// "use client"
// import { useEffect } from 'react';

// import React from 'react'

// import Script from 'next/script'
// export default function page() {
//   useEffect(() => {
//     const yearDropdown = document.getElementById("yearFounded");
//     const currentYear = new Date().getFullYear();
//     for (let year = currentYear; year >= 1900; year--) {
//       let option = document.createElement("option");
//       option.value = year;
//       option.textContent = year;
//       yearDropdown.appendChild(option);
//     }
//   }, []);
//   return (
//     <div>
//       <div className="container-fluid py-4">
//   <div className="row g-4">
//     {/* Left Sidebar - Profile */}
//     <div className="col-12 col-lg-3">
//       <div className="sidebar p-3 mb-4">
//         <div className="text-center py-2">
//           <img
//             src="/images/dp.png"
//             alt="Profile"
//             className="profile-img mb-2"
//           />
//           <h6 className="mb-1">Shams Aujara</h6>
//         </div>
//         <div className="d-grid gap-2 mt-2 mb-3">
//           <button className="btn btn-outline-custom btn-sm" type="button">
//             <i className="far fa-heart me-2" /> Favourite
//           </button>
//         </div>
//         <div className="business-item">
//           <img
//             src="/images/business.png"
//             alt="Tekgenie"
//             className="business-logo"
//           />
//           <div>
//             <div className="fw-medium">Tekgenie</div>
//           </div>
//           <div className="ms-auto text-success">
//             <i className="fas fa-check-circle" />
//           </div>
//         </div>
//         <div className="business-item">
//           <img
//             src="/images/business.png"
//             alt="Deenscorp Royale"
//             className="business-logo"
//           />
//           <div>
//             <div className="fw-medium">Deenscorp Royale</div>
//           </div>
//         </div>
//         <div className="d-grid gap-2 mt-4">
//           <button className="btn btn-primary-custom" type="button">
//             Add business
//           </button>
//         </div>
//         <div className="mt-4 pt-2">
//           <div className="menu-item">
//             <i className="fas fa-cog" /> Settings
//           </div>
//         </div>
//         <div className="mt-4 pt-2 border-top">
//           <div className="menu-item">
//             <i className="fas fa-info-circle" /> About B2BNet
//           </div>
//           <div className="menu-item">
//             <i className="fas fa-question-circle" /> Help Centre
//           </div>
//           <div className="menu-item">
//             <i className="fas fa-comment-dots" /> Feedback form
//           </div>
//           <div className="menu-item">
//             <i className="fas fa-shield-alt" /> Policy and Privacy
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Middle Section - Add Business Form */}
//     <div className="col-12 col-lg-6">
//       <div className="add-business-form bg-white rounded p-4">
//         <h5 className="mb-4">Add Business</h5>
//         <form>
//           {/* Banner Upload */}
//           <div className="banner-upload-container mb-4">
//             <div className="banner-placeholder text-center py-4">
//               <div className="text-muted">Upload banner</div>
//             </div>
//           </div>
//           {/* Logo Upload and Message Toggle */}
//           <div className="row mb-4 align-items-center">
//             <div className="col-6">
//               <div className="logo-upload-container">
//                 <button className="btn btn-outline-secondary btn-sm upload-btn">
//                   Upload Logo
//                 </button>
//               </div>
//             </div>
//             <div className="col-6 text-end">
//               <div className="form-check form-switch d-flex justify-content-end align-items-center">
//                 <label
//                   className="form-check-label me-2"
//                   htmlFor="openMessageToggle"
//                 >
//                   Open message to individuals
//                 </label>
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   id="openMessageToggle"
//                 />
//               </div>
//             </div>
//           </div>
//           {/* Company Name */}
//           <div className="mb-3">
//             <label htmlFor="companyName" className="form-label">
//               Company Name <span className="text-danger">*</span>
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="companyName"
//               required=""
//             />
//             <div className="form-text text-end">0/100</div>
//           </div>
//           {/* Core Area of Expertise */}
//           <div className="mb-3">
//             <label htmlFor="coreExpertise" className="form-label">
//               Core area of expertise
//               <span className="text-danger">*</span>
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="coreExpertise"
//               required=""
//             />
//             <div className="form-text text-end">0/120</div>
//           </div>
//           {/* Description */}
//           <div className="mb-3">
//             <label htmlFor="description" className="form-label">
//               Description of solution your company offers
//               <span className="text-danger">*</span>
//             </label>
//             <textarea
//               className="form-control"
//               id="description"
//               rows={4}
//               required=""
//               defaultValue={""}
//             />
//             <div className="form-text text-end">0/3,000</div>
//           </div>
//           {/* Additional Expertise */}
//           <div className="mb-3">
//             <label htmlFor="additionalExpertise" className="form-label">
//               Additional expertise
//               <span className="text-danger">*</span>
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="additionalExpertise"
//               required=""
//             />
//             <div className="d-flex justify-content-between">
//               <button
//                 type="button"
//                 className="btn btn-sm btn-primary-custom mt-2"
//               >
//                 <i className="fas fa-plus me-1" /> Add expertise
//               </button>
//               <div className="form-text text-end mt-2">0/120</div>
//             </div>
//           </div>
//           {/* Video/Image Description */}
//           <div className="mb-3">
//             <label className="form-label">
//               Describe you business in video/image
//               <span className="text-danger">*</span>
//             </label>
//             <div className="input-group">
//               <button className="btn btn-outline-secondary" type="button">
//                 Upload
//               </button>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Tag note"
//               />
//             </div>
//             <button
//               type="button"
//               className="btn btn-sm btn-primary-custom mt-2"
//             >
//               <i className="fas fa-plus me-1" /> Add video or image
//             </button>
//             <div className="form-text text-end">0/120</div>
//           </div>
//           {/* Industry */}
//           <div className="mb-3">
//             <label htmlFor="industry" className="form-label">
//               Industry <span className="text-danger">*</span>
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="industry"
//               required=""
//             />
//           </div>
//           {/* Company Size */}
//           <div className="mb-3">
//             <label htmlFor="companySize" className="form-label">
//               Company size <span className="text-danger">*</span>
//             </label>
//             {/* <select className="form-select" id="companySize" required="">
//               <option selected="" disabled="" value="">
//                 Select company size
//               </option>
//               <option>1-10 employees</option>
//               <option>11-50 employees</option>
//               <option>51-200 employees</option>
//               <option>201-500 employees</option>
//               <option>501-1000 employees</option>
//               <option>1001+ employees</option>
//             </select> */}
//             <select className="form-select" id="companySize" required defaultValue="">
//   <option disabled value="">
//     Select company size
//   </option>
//   <option value="1-10">1-10 employees</option>
//   <option value="11-50">11-50 employees</option>
//   <option value="51-200">51-200 employees</option>
//   <option value="201-500">201-500 employees</option>
//   <option value="501-1000">501-1000 employees</option>
//   <option value="1001+">1001+ employees</option>
// </select>

//           </div>
//           {/* Company Type */}
//           <div className="mb-3">
//             <label htmlFor="companyType" className="form-label">
//               Company Type <span className="text-danger">*</span>
//             </label>
//             {/* <select className="form-select" id="companyType" required="">
//               <option selected="" disabled="" value="">
//                 Select company type
//               </option>
//               <option>Public Company</option>
//               <option>Private Company</option>
//               <option>Partnership</option>
//               <option>Sole Proprietorship</option>
//               <option>Non-profit</option>
//               <option>Government</option>
//             </select> */}
//             <select className="form-select" id="companyType" required defaultValue="">
//   <option disabled value="">
//     Select company type
//   </option>
//   <option value="Public">Public Company</option>
//   <option value="Private">Private Company</option>
//   <option value="Partnership">Partnership</option>
//   <option value="Sole Proprietorship">Sole Proprietorship</option>
//   <option value="Non-profit">Non-profit</option>
//   <option value="Government">Government</option>
// </select>

//           </div>
//           {/* Year Founded */}
//           <div className="mb-3">
//             <label htmlFor="yearFounded" className="form-label">
//               Year founded <span className="text-danger">*</span>
//             </label>
//             {/* <select className="form-select" id="yearFounded" required="">
//               <option selected="" disabled="" value="">
//                 Select year
//               </option>
//             </select> */}
//             <select
//   className="form-select"
//   id="yearFounded"
//   required
//   defaultValue=""
// >
//   <option disabled value="">Select year</option>
//   {/* Options will be dynamically added via useEffect */}
// </select>
//           </div>
//           {/* URL Links */}
//           <div className="mb-4">
//             <label className="form-label">URL Links</label>
//             <div className="input-group mb-2">
//               <span className="input-group-text">
//                 <i className="fas fa-globe" />
//               </span>
//               <input
//                 type="url"
//                 className="form-control"
//                 placeholder="Website link"
//               />
//             </div>
//             <div className="input-group mb-2">
//               <span className="input-group-text">
//                 <i className="fab fa-linkedin" />
//               </span>
//               <input
//                 type="url"
//                 className="form-control"
//                 placeholder="LinkedIn link"
//               />
//             </div>
//             <div className="input-group mb-2">
//               <span className="input-group-text">
//                 <i className="fab fa-facebook" />
//               </span>
//               <input
//                 type="url"
//                 className="form-control"
//                 placeholder="Facebook link"
//               />
//             </div>
//             <div className="input-group">
//               <span className="input-group-text">
//                 <i className="fab fa-twitter" />
//               </span>
//               <input type="url" className="form-control" placeholder="X link" />
//             </div>
//           </div>
//           {/* Contact Person */}
//           <div className="mb-4">
//             <label className="form-label">Contact person</label>
//             <div className="contact-person-container p-3 border rounded mb-2">
//               <div className="row g-2">
//                 <div className="col-auto">
//                   <div className="contact-photo-placeholder">
//                     <div className="text-center">
//                       <small>Add Photo</small>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col">
//                   <input
//                     type="text"
//                     className="form-control mb-2"
//                     placeholder="Full name"
//                   />
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Position"
//                   />
//                 </div>
//               </div>
//             </div>
//             <button type="button" className="btn btn-sm btn-primary-custom">
//               <i className="fas fa-plus me-1" /> Add contact
//             </button>
//           </div>
//           {/* Address */}
//           <div className="mb-3">
//             <div className="d-flex justify-content-between align-items-center mb-2">
//               <label className="form-label mb-0">Address</label>
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   id="primaryLocation"
//                 />
//                 <label className="form-check-label" htmlFor="primaryLocation">
//                   Primary location
//                 </label>
//               </div>
//             </div>
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder="Address line 1"
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder="Address line 2"
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder="Town"
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder="City"
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder="County"
//             />
//             <input
//               type="text"
//               className="form-control mb-3"
//               placeholder="Postcode"
//             />
//             <button
//               type="button"
//               className="btn btn-sm btn-primary-custom mb-3"
//             >
//               <i className="fas fa-plus me-1" /> Add location
//             </button>
//             {/* Map Preview */}
//             <div className="map-preview mb-3">
//               <img
//                 src="/images/map_preview.png"
//                 alt="Map Location"
//                 className="img-fluid rounded"
//               />
//             </div>
//           </div>
//           {/* Submit Button */}
//           <div className="text-center">
//             <button type="submit" className="btn btn-primary-custom px-5">
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     {/* Right Sidebar - Promotional */}
//     <div className="col-12 col-lg-3">
//       <div className="sidebar card mb-4">
//         <div className="card-body">
//           <h5 className="card-title mb-3">Discover businesses</h5>
//           <div className="side-business">
//             <div className="d-flex">
//               <img
//                 src="/images/business_logo1.png"
//                 alt="New West End Company"
//                 className="business-logo-small me-3"
//               />
//               <div>
//                 <div className="fw-medium">New West End Company</div>
//                 <div className="text-muted small">
//                   We are a global partnership of 600 businesses, working to
//                   deliver a New West End
//                 </div>
//                 <div className="d-flex align-items-center mt-1">
//                   <i
//                     className="fas fa-map-marker-alt text-muted me-1"
//                     style={{ fontSize: 10 }}
//                   />
//                   <span className="text-muted" style={{ fontSize: 12 }}>
//                     SOHO
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="position-absolute top-0 end-0 m-2">
//               <span className="promotion-tag">Promoted</span>
//             </div>
//           </div>
//           <div className="side-business">
//             <div className="d-flex">
//               <img
//                 src="/images/business_logo2.png"
//                 alt="New West End Company"
//                 className="business-logo-small me-3"
//               />
//               <div>
//                 <div className="fw-medium">New West End Company</div>
//                 <div className="text-muted small">
//                   We are a global partnership of 600 businesses, working to
//                   deliver a New West End
//                 </div>
//                 <div className="d-flex align-items-center mt-1">
//                   <i
//                     className="fas fa-map-marker-alt text-muted me-1"
//                     style={{ fontSize: 10 }}
//                   />
//                   <span className="text-muted" style={{ fontSize: 12 }}>
//                     SOHO
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="side-business">
//             <div className="d-flex">
//               <img
//                 src="/images/business_logo3.png"
//                 alt="New West End Company"
//                 className="business-logo-small me-3"
//               />
//               <div>
//                 <div className="fw-medium">New West End Company</div>
//                 <div className="text-muted small">
//                   We are a global partnership of 600 businesses, working to
//                   deliver a New West End
//                 </div>
//                 <div className="d-flex align-items-center mt-1">
//                   <i
//                     className="fas fa-map-marker-alt text-muted me-1"
//                     style={{ fontSize: 10 }}
//                   />
//                   <span className="text-muted" style={{ fontSize: 12 }}>
//                     SOHO
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Promotional Banner */}
//       <div className="p-2">
//         <img
//           src="/images/right_banner.png"
//           alt="Promotional Banner"
//           className="w-100"
//           style={{ height: 220, objectFit: "cover" }}
//         />
//       </div>
//     </div>
//   </div>
// </div>
// <Script>
//   {`
//    document.addEventListener("DOMContentLoaded", function () {
//         const yearSelect = document.getElementById("yearFounded");
//         const currentYear = new Date().getFullYear();

//         for (let year = currentYear; year >= 1900; year--) {
//           const option = document.createElement("option");
//           option.value = year;
//           option.textContent = year;
//           yearSelect.appendChild(option);
//         }`}
// </Script>

//     </div>
//   )
// }

import React from "react";
import Businessscript from "../components/businessscript";
export default function page() {
  return (
    <div>
      <div className="container-fluid py-4">
        <div className="row g-4">
          {/* Left Sidebar - Profile */}
          <div className="col-12 col-lg-3">
            <div className="sidebar p-3 mb-4">
              <div className="text-center py-2">
                <img
                  src="/images/dp.png"
                  alt="Profile"
                  className="profile-img mb-2"
                />
                <h6 className="mb-1">Shams Aujara</h6>
              </div>
              <div className="d-grid gap-2 mt-2 mb-3">
                <button className="btn btn-outline-custom btn-sm" type="button">
                  <i className="far fa-heart me-2" /> Favourite
                </button>
              </div>
              <div className="business-item">
                <img
                  src="/images/business.png"
                  alt="Tekgenie"
                  className="business-logo"
                />
                <div>
                  <div className="fw-medium">Tekgenie</div>
                </div>
                <div className="ms-auto text-success">
                  <i className="fas fa-check-circle" />
                </div>
              </div>
              <div className="business-item">
                <img
                  src="/images/business.png"
                  alt="Deenscorp Royale"
                  className="business-logo"
                />
                <div>
                  <div className="fw-medium">Deenscorp Royale</div>
                </div>
              </div>
              <div className="d-grid gap-2 mt-4">
                <button className="btn btn-primary-custom" type="button">
                  Add business
                </button>
              </div>
              <div className="mt-4 pt-2">
                <div className="menu-item">
                  <i className="fas fa-cog" /> Settings
                </div>
              </div>
              <div className="mt-4 pt-2 border-top">
                <div className="menu-item">
                  <i className="fas fa-info-circle" /> About B2BNet
                </div>
                <div className="menu-item">
                  <i className="fas fa-question-circle" /> Help Centre
                </div>
                <div className="menu-item">
                  <i className="fas fa-comment-dots" /> Feedback form
                </div>
                <div className="menu-item">
                  <i className="fas fa-shield-alt" /> Policy and Privacy
                </div>
              </div>
            </div>
          </div>
          {/* Middle Section - Add Business Form */}
          <div className="col-12 col-lg-6">
            <div className="add-business-form bg-white rounded p-4">
              <h5 className="mb-4">Add Business</h5>
              <form>
                {/* Banner Upload */}
                <div className="banner-upload-container mb-4">
                  <div className="banner-placeholder text-center py-4">
                    <div className="text-muted">Upload banner</div>
                  </div>
                </div>
                {/* Logo Upload and Message Toggle */}
                <div className="row mb-4 align-items-center">
                  <div className="col-6">
                    <div className="logo-upload-container">
                      <button className="btn btn-outline-secondary btn-sm upload-btn">
                        Upload Logo
                      </button>
                    </div>
                  </div>
                  <div className="col-6 text-end">
                    <div className="form-check form-switch d-flex justify-content-end align-items-center">
                      <label
                        className="form-check-label me-2"
                        htmlFor="openMessageToggle">
                        Open message to individuals
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="openMessageToggle"
                      />
                    </div>
                  </div>
                </div>
                {/* Company Name */}
                <div className="mb-3">
                  <label htmlFor="companyName" className="form-label">
                    Company Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    required=""
                  />
                  <div className="form-text text-end">0/100</div>
                </div>
                {/* Core Area of Expertise */}
                <div className="mb-3">
                  <label htmlFor="coreExpertise" className="form-label">
                    Core area of expertise
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="coreExpertise"
                    required=""
                  />
                  <div className="form-text text-end">0/120</div>
                </div>
                {/* Description */}
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description of solution your company offers
                    <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows={4}
                    required=""
                    defaultValue={""}
                  />
                  <div className="form-text text-end">0/3,000</div>
                </div>
                {/* Additional Expertise */}
                <div className="mb-3">
                  <label htmlFor="additionalExpertise" className="form-label">
                    Additional expertise
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="additionalExpertise"
                    required=""
                  />
                  <div className="d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary-custom mt-2">
                      <i className="fas fa-plus me-1" /> Add expertise
                    </button>
                    <div className="form-text text-end mt-2">0/120</div>
                  </div>
                </div>
                {/* Video/Image Description */}
                <div className="mb-3">
                  <label className="form-label">
                    Describe you business in video/image
                    <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <button className="btn btn-outline-secondary" type="button">
                      Upload
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tag note"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-primary-custom mt-2">
                    <i className="fas fa-plus me-1" /> Add video or image
                  </button>
                  <div className="form-text text-end">0/120</div>
                </div>
                {/* Industry */}
                <div className="mb-3">
                  <label htmlFor="industry" className="form-label">
                    Industry <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="industry"
                    required=""
                  />
                </div>
                {/* Company Size */}
                <div className="mb-3">
                  <label htmlFor="companySize" className="form-label">
                    Company size <span className="text-danger">*</span>
                  </label>
                  {/* <select className="form-select" id="companySize" required="">
              <option selected="" disabled="" value="">
                Select company size
              </option>
              <option>1-10 employees</option>
              <option>11-50 employees</option>
              <option>51-200 employees</option>
              <option>201-500 employees</option>
              <option>501-1000 employees</option>
              <option>1001+ employees</option>
            </select> */}
                  <select
                    className="form-select"
                    id="companySize"
                    required
                    defaultValue="">
                    <option disabled value="">
                      Select company size
                    </option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1001+">1001+ employees</option>
                  </select>
                </div>
                {/* Company Type */}
                <div className="mb-3">
                  <label htmlFor="companyType" className="form-label">
                    Company Type <span className="text-danger">*</span>
                  </label>
                  {/* <select className="form-select" id="companyType" required="">
              <option selected="" disabled="" value="">
                Select company type
              </option>
              <option>Public Company</option>
              <option>Private Company</option>
              <option>Partnership</option>
              <option>Sole Proprietorship</option>
              <option>Non-profit</option>
              <option>Government</option>
            </select> */}
                  <select
                    className="form-select"
                    id="companyType"
                    required
                    defaultValue="">
                    <option disabled value="">
                      Select company type
                    </option>
                    <option value="Public">Public Company</option>
                    <option value="Private">Private Company</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Sole Proprietorship">
                      Sole Proprietorship
                    </option>
                    <option value="Non-profit">Non-profit</option>
                    <option value="Government">Government</option>
                  </select>
                </div>
                {/* Year Founded */}
                <div className="mb-3">
                  <label htmlFor="yearFounded" className="form-label">
                    Year founded <span className="text-danger">*</span>
                  </label>
                  {/* <select className="form-select" id="yearFounded" required="">
              <option selected="" disabled="" value="">
                Select year
              </option>
            </select> */}
                  <Businessscript />
                </div>
                {/* URL Links */}
                <div className="mb-4">
                  <label className="form-label">URL Links</label>
                  <div className="input-group mb-2">
                    <span className="input-group-text">
                      <i className="fas fa-globe" />
                    </span>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Website link"
                    />
                  </div>
                  <div className="input-group mb-2">
                    <span className="input-group-text">
                      <i className="fab fa-linkedin" />
                    </span>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="LinkedIn link"
                    />
                  </div>
                  <div className="input-group mb-2">
                    <span className="input-group-text">
                      <i className="fab fa-facebook" />
                    </span>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Facebook link"
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fab fa-twitter" />
                    </span>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="X link"
                    />
                  </div>
                </div>
                {/* Contact Person */}
                <div className="mb-4">
                  <label className="form-label">Contact person</label>
                  <div className="contact-person-container p-3 border rounded mb-2">
                    <div className="row g-2">
                      <div className="col-auto">
                        <div className="contact-photo-placeholder">
                          <div className="text-center">
                            <small>Add Photo</small>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="Full name"
                        />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Position"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-primary-custom">
                    <i className="fas fa-plus me-1" /> Add contact
                  </button>
                </div>
                {/* Address */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <label className="form-label mb-0">Address</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="primaryLocation"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="primaryLocation">
                        Primary location
                      </label>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Address line 1"
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Address line 2"
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Town"
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="City"
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="County"
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Postcode"
                  />
                  <button
                    type="button"
                    className="btn btn-sm btn-primary-custom mb-3">
                    <i className="fas fa-plus me-1" /> Add location
                  </button>
                  {/* Map Preview */}
                  <div className="map-preview mb-3">
                    <img
                      src="/images/map_preview.png"
                      alt="Map Location"
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary-custom px-5">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Right Sidebar - Promotional */}
          <div className="col-12 col-lg-3">
            <div className="sidebar card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Discover businesses</h5>
                <div className="side-business">
                  <div className="d-flex">
                    <img
                      src="/images/business_logo1.png"
                      alt="New West End Company"
                      className="business-logo-small me-3"
                    />
                    <div>
                      <div className="fw-medium">New West End Company</div>
                      <div className="text-muted small">
                        We are a global partnership of 600 businesses, working
                        to deliver a New West End
                      </div>
                      <div className="d-flex align-items-center mt-1">
                        <i
                          className="fas fa-map-marker-alt text-muted me-1"
                          style={{ fontSize: 10 }}
                        />
                        <span className="text-muted" style={{ fontSize: 12 }}>
                          SOHO
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="promotion-tag">Promoted</span>
                  </div>
                </div>
                <div className="side-business">
                  <div className="d-flex">
                    <img
                      src="/images/business_logo2.png"
                      alt="New West End Company"
                      className="business-logo-small me-3"
                    />
                    <div>
                      <div className="fw-medium">New West End Company</div>
                      <div className="text-muted small">
                        We are a global partnership of 600 businesses, working
                        to deliver a New West End
                      </div>
                      <div className="d-flex align-items-center mt-1">
                        <i
                          className="fas fa-map-marker-alt text-muted me-1"
                          style={{ fontSize: 10 }}
                        />
                        <span className="text-muted" style={{ fontSize: 12 }}>
                          SOHO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="side-business">
                  <div className="d-flex">
                    <img
                      src="/images/business_logo3.png"
                      alt="New West End Company"
                      className="business-logo-small me-3"
                    />
                    <div>
                      <div className="fw-medium">New West End Company</div>
                      <div className="text-muted small">
                        We are a global partnership of 600 businesses, working
                        to deliver a New West End
                      </div>
                      <div className="d-flex align-items-center mt-1">
                        <i
                          className="fas fa-map-marker-alt text-muted me-1"
                          style={{ fontSize: 10 }}
                        />
                        <span className="text-muted" style={{ fontSize: 12 }}>
                          SOHO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Promotional Banner */}
            <div className="p-2">
              <img
                src="/images/right_banner.png"
                alt="Promotional Banner"
                className="w-100"
                style={{ height: 220, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Script>
  {`
   document.addEventListener("DOMContentLoaded", function () {
        const yearSelect = document.getElementById("yearFounded");
        const currentYear = new Date().getFullYear();

        for (let year = currentYear; year >= 1900; year--) {
          const option = document.createElement("option");
          option.value = year;
          option.textContent = year;
          yearSelect.appendChild(option);
        }`}
</Script> */}
    </div>
  );
}
