
"use client"; // ✅ Mark as a Client Component

import { useEffect } from "react";

export default function BootstrapLoader() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js"); // ✅ Loads Bootstrap JS on the client
  }, []);

  return null; // ✅ No UI needed, just loads Bootstrap JS
}
