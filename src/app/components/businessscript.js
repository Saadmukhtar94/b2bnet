"use client";

import { useEffect, useState, useRef } from "react";

const Businessscript = () => { // Capitalized component name
  const [yearOptions, setYearOptions] = useState([]);
  const yearSelectRef = useRef(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYearOptions(Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i));
  }, []);

  return (
    <div>     
      <select id="yearFounded" name="yearFounded" ref={yearSelectRef} className="form-select">
        <option disabled value="">Select year</option> {/* Corrected select option */}
        {yearOptions.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Businessscript; // Capitalized export
