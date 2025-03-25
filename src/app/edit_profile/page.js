import React from 'react'
import Image from 'next/image'
import Script from 'next/script';
export const metadata = {
  title: "B2BNet - Edit Profile",
  description: "B2BNet - Business Networking Platform",
  icons: {
    icon: "/images/logo.png", 
  },
};
export default function page() {
  return (
    <div>
        <>
  {/* Main Content */}
  <div className="container-fluid py-4">
    <div className="row g-4">
      {/* Left Sidebar - Profile */}
      <div className="col-12 col-lg-3">
                 <div className="sidebar p-3 mb-4">
                   <div className="text-center py-2">
                     <Image
                       src="/images/dp.png"
                       alt="Profile"
                       className="profile-img mb-2"
                       width={72}
                       height={72}
                       
                     />
                     <h6 className="mb-1">Shams Aujara</h6>
                   </div>
                   {/* <div className="d-grid gap-2 mt-2 mb-3">
                     <button className="btn btn-outline-custom btn-sm" type="button">
                       <i className="far fa-heart me-2" /> Favourite
                     </button>
                   </div> */}
                   <div className="business-item">
                    
                      <Image
                       src="/images/business.png"
                       alt="Profile"
                       className="business-logo"
                       width={41}
                       height={41}
                     />
                     <div>
                       <div className="fw-medium">Tekgenie</div>
                     </div>
                     <div className="ms-auto text-success">
                       <i className="fas fa-check-circle" />
                     </div>
                   </div>
                   <div className="business-item">
                     
                     <Image
                       src="/images/business.png"
                       alt="Profile"
                       className="business-logo"
                       width={41}
                       height={41}
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
      {/* Middle Section - Edit Profile Form */}
      <div className="col-12 col-lg-6">
        {/* Profile Settings Tabs */}
        <div className="bg-white rounded mb-4">
          <ul className="nav nav-tabs nav-fill" id="profileTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="personal-tab"
                data-bs-toggle="tab"
                data-bs-target="#personal"
                type="button"
                role="tab"
                aria-controls="personal"
                aria-selected="true"
              >
                <i className="fas fa-user me-2" /> Personal Info
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="business-tab"
                data-bs-toggle="tab"
                data-bs-target="#business"
                type="button"
                role="tab"
                aria-controls="business"
                aria-selected="false"
              >
                <i className="fas fa-building me-2" /> Business Details
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="account-tab"
                data-bs-toggle="tab"
                data-bs-target="#account"
                type="button"
                role="tab"
                aria-controls="account"
                aria-selected="false"
              >
                <i className="fas fa-lock me-2" /> Account Settings
              </button>
            </li>
          </ul>
          <div className="tab-content p-4" id="profileTabsContent">
            {/* Personal Info Tab */}
            <div
              className="tab-pane fade show active"
              id="personal"
              role="tabpanel"
              aria-labelledby="personal-tab"
            >
              <h5 className="mb-4">Personal Information</h5>
              <form id="personalInfoForm">
                {/* Profile Picture */}
                <div className="mb-4 text-center">
                  <div className="profile-picture-container">
                    <Image width={100} height={100}
                      src="/images/dp.png"
                      alt="Profile Picture"
                      className="edit-profile-picture"
                    />
                    <div className="profile-picture-overlay">
                      <button
                        type="button"
                        className="btn btn-sm btn-light rounded-circle"
                      >
                        <i className="fas fa-camera" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Change Photo
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-link text-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                {/* Name Fields */}
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="firstName" className="form-label">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      defaultValue="Shams"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      defaultValue="Aujara"
                      required=""
                    />
                  </div>
                </div>
                {/* Headline */}
                <div className="mb-3">
                  <label htmlFor="headline" className="form-label">
                    Professional Headline
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="headline"
                    defaultValue="Software Developer & Business Owner at Tekgenie"
                  />
                  <div className="form-text">
                    A brief description of your professional role
                  </div>
                </div>
                {/* About */}
                <div className="mb-3">
                  <label htmlFor="about" className="form-label">
                    About
                  </label>
                  <textarea
                    className="form-control"
                    id="about"
                    rows={4}
                    defaultValue={
                      "Experienced software developer with a passion for creating innovative solutions for businesses. Specializing in web development, mobile applications, and business process automation."
                    }
                  />
                  <div className="form-text text-end">0/2000</div>
                </div>
                {/* Location */}
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    defaultValue="London, United Kingdom"
                  />
                </div>
                {/* Contact Information */}
                <h6 className="mt-4 mb-3">Contact Information</h6>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    defaultValue="shams@tekgenie.com"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    defaultValue="+44 20 1234 5678"
                  />
                </div>
                {/* Social Media Links */}
                <h6 className="mt-4 mb-3">Social Media</h6>
                <div className="mb-3">
                  <label htmlFor="linkedin" className="form-label">
                    LinkedIn
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fab fa-linkedin-in" />
                    </span>
                    <input
                      type="url"
                      className="form-control"
                      id="linkedin"
                      defaultValue="https://linkedin.com/in/shamsaujara"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="twitter" className="form-label">
                    Twitter
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fab fa-twitter" />
                    </span>
                    <input
                      type="url"
                      className="form-control"
                      id="twitter"
                      defaultValue="https://twitter.com/shamsaujara"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="website" className="form-label">
                    Personal Website
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-globe" />
                    </span>
                    <input
                      type="url"
                      className="form-control"
                      id="website"
                      defaultValue="https://shamsaujara.com"
                    />
                  </div>
                </div>
                {/* Privacy Settings */}
                <h6 className="mt-4 mb-3">Privacy Settings</h6>
                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="showEmail"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="showEmail">
                      Show email address to connections
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="showPhone"
                    />
                    <label className="form-check-label" htmlFor="showPhone">
                      Show phone number to connections
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="profileVisibility"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="profileVisibility"
                    >
                      Make profile visible to all B2BNet users
                    </label>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-2"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary-custom">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
            {/* Business Details Tab */}
            <div
              className="tab-pane fade"
              id="business"
              role="tabpanel"
              aria-labelledby="business-tab"
            >
              <h5 className="mb-4">Business Details</h5>
              <form id="businessDetailsForm">
                {/* Business Selection */}
                <div className="mb-4">
                  <label htmlFor="businessSelect" className="form-label">
                    Select Business to Edit
                  </label>
                  
                  <select className="form-select" id="businessSelect" defaultValue="1">
  <option value="1">Tekgenie</option>
  <option value="2">Deenscorp Royale</option>
</select>

                </div>
                {/* Business Logo */}
                <div className="mb-4 text-center">
                  <div className="business-logo-container">
                    <Image width={37} height={22}
                      src="/images/business.png"
                      alt="Business Logo"
                      className="edit-business-logo"
                    />
                    <div className="business-logo-overlay">
                      <button
                        type="button"
                        className="btn btn-sm btn-light rounded-circle"
                      >
                        <i className="fas fa-camera" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Change Logo
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-link text-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                {/* Business Banner */}
                <div className="mb-4">
                  <label className="form-label">Business Banner</label>
                  <div className="business-banner-container">
                    <Image width={500} height={300}
                      src="/images/business_banner.jpg"
                      alt="Business Banner"
                      className="edit-business-banner"
                    />
                    <div className="business-banner-overlay">
                      <button
                        type="button"
                        className="btn btn-sm btn-light rounded-circle"
                      >
                        <i className="fas fa-camera" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Change Banner
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-link text-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                {/* Business Name */}
                <div className="mb-3">
                  <label htmlFor="businessName" className="form-label">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="businessName"
                    defaultValue="Tekgenie"
                    required=""
                  />
                </div>
                {/* Business Category */}
                <div className="mb-3">
                  <label htmlFor="businessCategory" className="form-label">
                    Business Category *
                  </label>
  <select className="form-select" id="businessCategory" required defaultValue="technology">
  <option value="">Select a category</option>
  <option value="technology">Technology &amp; IT</option>
  <option value="marketing">Marketing &amp; Advertising</option>
  <option value="finance">Finance &amp; Banking</option>
  <option value="retail">Retail &amp; E-commerce</option>
  <option value="healthcare">Healthcare &amp; Medical</option>
  <option value="education">Education &amp; Training</option>
  <option value="manufacturing">Manufacturing &amp; Production</option>
  <option value="hospitality">Hospitality &amp; Tourism</option>
  <option value="construction">Construction &amp; Real Estate</option>
  <option value="other">Other</option>
</select>

                </div>
                {/* Business Description */}
                <div className="mb-3">
                  <label htmlFor="businessDescription" className="form-label">
                    Business Description *
                  </label>
                  <textarea
                    className="form-control"
                    id="businessDescription"
                    rows={4}
                    required=""
                    defaultValue={
                      "Tekgenie is a software development and IT solutions company specializing in custom web applications, mobile app development, and business process automation. We help businesses leverage technology to improve efficiency and drive growth."
                    }
                  />
                  <div className="form-text text-end">0/2000</div>
                </div>
                {/* Business Size */}
                <div className="mb-3">
                  <label htmlFor="businessSize" className="form-label">
                    Company Size
                  </label>
                  {/* <select className="form-select" id="businessSize">
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50" selected="">
                      11-50 employees
                    </option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1001+">1001+ employees</option>
                  </select> */}
                  <select className="form-select" id="businessSize" defaultValue="11-50">
  <option value="">Select company size</option>
  <option value="1-10">1-10 employees</option>
  <option value="11-50">11-50 employees</option>
  <option value="51-200">51-200 employees</option>
  <option value="201-500">201-500 employees</option>
  <option value="501-1000">501-1000 employees</option>
  <option value="1001+">1001+ employees</option>
</select>

                </div>
                {/* Founded Year */}
                <div className="mb-3">
                  <label htmlFor="foundedYear" className="form-label">
                    Founded Year
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="foundedYear"
                    defaultValue={2018}
                    min={1900}
                    max={2023}
                  />
                </div>
                {/* Business Location */}
                <div className="mb-3">
                  <label htmlFor="businessLocation" className="form-label">
                    Business Location *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="businessLocation"
                    defaultValue="Northolt, London, UK"
                    required=""
                  />
                </div>
                {/* Business Contact Information */}
                <h6 className="mt-4 mb-3">Contact Information</h6>
                <div className="mb-3">
                  <label htmlFor="businessEmail" className="form-label">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="businessEmail"
                    defaultValue="info@tekgenie.com"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="businessPhone" className="form-label">
                    Business Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="businessPhone"
                    defaultValue="+44 20 7123 4567"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="businessWebsite" className="form-label">
                    Business Website
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="businessWebsite"
                    defaultValue="https://www.tekgenie.com"
                  />
                </div>
                {/* Business Social Media */}
                <h6 className="mt-4 mb-3">Social Media</h6>
                <div className="mb-3">
                  <label htmlFor="businessLinkedin" className="form-label">
                    LinkedIn
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fab fa-linkedin-in" />
                    </span>
                    <input
                      type="url"
                      className="form-control"
                      id="businessLinkedin"
                      defaultValue="https://linkedin.com/company/tekgenie"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="businessTwitter" className="form-label">
                    Twitter
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fab fa-twitter" />
                    </span>
                    <input
                      type="url"
                      className="form-control"
                      id="businessTwitter"
                      defaultValue="https://twitter.com/tekgenie"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="businessFacebook" className="form-label">
                    Facebook
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fab fa-facebook-f" />
                    </span>
                    <input
                      type="url"
                      className="form-control"
                      id="businessFacebook"
                      defaultValue="https://facebook.com/tekgenie"
                    />
                  </div>
                </div>
                {/* Submit Button */}
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-2"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary-custom">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
            {/* Account Settings Tab */}
            <div
              className="tab-pane fade"
              id="account"
              role="tabpanel"
              aria-labelledby="account-tab"
            >
              <h5 className="mb-4">Account Settings</h5>
              {/* Email Settings */}
              <div className="card mb-4">
                <div className="card-header">
                  <h6 className="mb-0">Email Settings</h6>
                </div>
                <div className="card-body">
                  <form id="emailSettingsForm">
                    <div className="mb-3">
                      <label htmlFor="accountEmail" className="form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="accountEmail"
                        defaultValue="shams@tekgenie.com"
                        required=""
                      />
                      <div className="form-text">
                        This email is used for login and notifications
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary-custom">
                        Update Email
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Password Settings */}
              <div className="card mb-4">
                <div className="card-header">
                  <h6 className="mb-0">Change Password</h6>
                </div>
                <div className="card-body">
                  <form id="passwordSettingsForm">
                    <div className="mb-3">
                      <label htmlFor="currentPassword" className="form-label">
                        Current Password *
                      </label>
                      <div className="input-group">
                        <input
                          type="password"
                          className="form-control"
                          id="currentPassword"
                          required=""
                        />
                        <button
                          className="btn btn-outline-secondary toggle-password"
                          type="button"
                        >
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="newPassword" className="form-label">
                        New Password *
                      </label>
                      <div className="input-group">
                        <input
                          type="password"
                          className="form-control"
                          id="newPassword"
                          required=""
                        />
                        <button
                          className="btn btn-outline-secondary toggle-password"
                          type="button"
                        >
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                      <div className="password-strength mt-2">
                        <div className="progress" style={{ height: 5 }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "0%" }}
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <small className="text-muted">
                          Password strength:{" "}
                          <span id="strength-text">Too weak</span>
                        </small>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="confirmNewPassword"
                        className="form-label"
                      >
                        Confirm New Password *
                      </label>
                      <div className="input-group">
                        <input
                          type="password"
                          className="form-control"
                          id="confirmNewPassword"
                          required=""
                        />
                        <button
                          className="btn btn-outline-secondary toggle-password"
                          type="button"
                        >
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary-custom">
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Notification Settings */}
              <div className="card mb-4">
                <div className="card-header">
                  <h6 className="mb-0">Notification Preferences</h6>
                </div>
                <div className="card-body">
                  <form id="notificationSettingsForm">
                    <div className="mb-3">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="emailNotifications"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="emailNotifications"
                        >
                          Email Notifications
                        </label>
                      </div>
                      <div className="form-text">
                        Receive email notifications for important updates
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="messageNotifications"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="messageNotifications"
                        >
                          Message Notifications
                        </label>
                      </div>
                      <div className="form-text">
                        Receive notifications when someone messages you
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="connectionNotifications"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="connectionNotifications"
                        >
                          Connection Notifications
                        </label>
                      </div>
                      <div className="form-text">
                        Receive notifications for new connection requests
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="eventNotifications"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="eventNotifications"
                        >
                          Event Notifications
                        </label>
                      </div>
                      <div className="form-text">
                        Receive notifications about upcoming events
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="marketingEmails"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="marketingEmails"
                        >
                          Marketing Emails
                        </label>
                      </div>
                      <div className="form-text">
                        Receive promotional emails and newsletters
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary-custom">
                        Save Preferences
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Account Deactivation */}
              <div className="card mb-4 border-danger">
                <div className="card-header bg-danger bg-opacity-10 text-danger">
                  <h6 className="mb-0">Account Deactivation</h6>
                </div>
                <div className="card-body">
                  <p>
                    Deactivating your account will hide your profile and content
                    from other users. You can reactivate your account at any
                    time by logging in.
                  </p>
                  <p className="text-danger mb-4">
                    This action is reversible, but all your data will be hidden
                    until you reactivate your account.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deactivateModal"
                    >
                      Deactivate Account
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Sidebar - Tips and Help */}
      <div className="col-12 col-lg-3">
        <div className="sidebar card mb-4">
          <div className="card-body">
            <h5 className="card-title mb-3">Profile Tips</h5>
            <div className="profile-tip mb-3">
              <h6>
                <i className="fas fa-lightbulb text-warning me-2" />
                Complete your profile
              </h6>
              <p className="small text-muted">
                Profiles with complete information get up to 30% more views and
                connection requests.
              </p>
            </div>
            <div className="profile-tip mb-3">
              <h6>
                <i className="fas fa-lightbulb text-warning me-2" />
                Add a professional photo
              </h6>
              <p className="small text-muted">
                Business profiles with professional photos receive 14x more
                views than those without.
              </p>
            </div>
            <div className="profile-tip mb-3">
              <h6>
                <i className="fas fa-lightbulb text-warning me-2" />
                Update your skills
              </h6>
              <p className="small text-muted">
                Keep your skills and expertise up to date to be discovered by
                the right businesses.
              </p>
            </div>
            <div className="profile-tip">
              <h6>
                <i className="fas fa-lightbulb text-warning me-2" />
                Connect your social accounts
              </h6>
              <p className="small text-muted">
                Link your social media accounts to expand your network and
                increase visibility.
              </p>
            </div>
          </div>
        </div>
        <div className="sidebar card mb-4">
          <div className="card-body">
            <h5 className="card-title mb-3">Profile Completion</h5>
            <div className="profile-completion mb-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span>Profile Strength</span>
                <span className="text-primary">75%</span>
              </div>
              <div className="progress" style={{ height: 8 }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="completion-tasks">
              <div className="completion-task completed">
                <i className="fas fa-check-circle text-success me-2" />
                <span>Add profile photo</span>
              </div>
              <div className="completion-task completed">
                <i className="fas fa-check-circle text-success me-2" />
                <span>Add business details</span>
              </div>
              <div className="completion-task completed">
                <i className="fas fa-check-circle text-success me-2" />
                <span>Add contact information</span>
              </div>
              <div className="completion-task">
                <i className="fas fa-circle text-muted me-2" />
                <span>Add skills and expertise</span>
              </div>
              <div className="completion-task">
                <i className="fas fa-circle text-muted me-2" />
                <span>Connect social accounts</span>
              </div>
            </div>
          </div>
        </div>
        {/* Promotional Banner */}
        <div className="p-2">
           <Image  width={242} height={220}
            src="/images/right_banner.png"
            alt="Promotional Banner"
            className="w-100"
            // style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  </div>
  {/* Deactivate Account Modal */}
  <div
    className="modal fade"
    id="deactivateModal"
    tabIndex={-1}
    aria-labelledby="deactivateModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="deactivateModalLabel">
            Deactivate Account
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <p>
            Are you sure you want to deactivate your account? Your profile and
            content will be hidden from other users until you reactivate your
            account.
          </p>
          <div className="mb-3">
            <label htmlFor="deactivateReason" className="form-label">
              Please tell us why you&apos;re leaving (optional)
            </label>
            {/* <select className="form-select" id="deactivateReason">
              <option value="" selected="">
                Select a reason
              </option>
              <option value="temporary">I'm temporarily taking a break</option>
              <option value="privacy">Privacy concerns</option>
              <option value="experience">Not having a good experience</option>
              <option value="alternative">Using an alternative platform</option>
              <option value="other">Other reason</option>
            </select> */}
            <select className="form-select" id="deactivateReason" defaultValue="">
  <option value="">Select a reason</option>
  <option value="temporary">I&apos;m temporarily taking a break</option>
  <option value="privacy">Privacy concerns</option>
  <option value="experience">Not having a good experience</option>
  <option value="alternative">Using an alternative platform</option>
  <option value="other">Other reason</option>
</select>

          </div>
          <div className="mb-3">
            <label htmlFor="deactivateFeedback" className="form-label">
              Additional feedback (optional)
            </label>
            <textarea
              className="form-control"
              id="deactivateFeedback"
              rows={3}
              placeholder="Tell us more about your experience..."
              defaultValue={""}
            />
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="confirmDeactivate"
              required=""
            />
            <label className="form-check-label" htmlFor="confirmDeactivate">
              I understand that my account will be deactivated
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-danger"
            id="deactivateButton"
            disabled=""
          >
            Deactivate Account
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Delete Account Modal */}
  <div
    className="modal fade"
    id="deleteModal"
    tabIndex={-1}
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header bg-danger text-white">
          <h5 className="modal-title" id="deleteModalLabel">
            Delete Account Permanently
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <div className="alert alert-danger">
            <i className="fas fa-exclamation-triangle me-2" />
            <strong>Warning:</strong> This action cannot be undone. All your
            data will be permanently deleted.
          </div>
          <p>Before you proceed, please understand that:</p>
          <ul>
            <li>All your profile information will be permanently deleted</li>
            <li>All your business listings will be removed</li>
            <li>All your connections and messages will be lost</li>
            <li>You will not be able to recover any of this information</li>
          </ul>
          <div className="mb-3">
            <label htmlFor="deleteReason" className="form-label">
              Please tell us why you&apos;re deleting your account
            </label>
            {/* <select className="form-select" id="deleteReason" required="">
              <option value="" selected="">
                Select a reason
              </option>
              <option value="privacy">Privacy concerns</option>
              <option value="experience">Not having a good experience</option>
              <option value="alternative">Using an alternative platform</option>
              <option value="unused">Not using the platform</option>
              <option value="other">Other reason</option>
            </select> */}
            <select className="form-select" id="deleteReason" required defaultValue="">
  <option value="">Select a reason</option>
  <option value="privacy">Privacy concerns</option>
  <option value="experience">Not having a good experience</option>
  <option value="alternative">Using an alternative platform</option>
  <option value="unused">Not using the platform</option>
  <option value="other">Other reason</option>
</select>

          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Enter your password to confirm
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required=""
            />
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="confirmDelete"
              required=""
            />
            <label className="form-check-label" htmlFor="confirmDelete">
              I understand that this action is permanent and cannot be undone
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-danger"
            id="deleteButton"
            disabled=""
          >
            Delete Account Permanently
          </button>
        </div>
      </div>
    </div>
  </div>
</>
<Script id='editProfile-script'>
  {` document.addEventListener('DOMContentLoaded', function() {
            // Profile image preview
            const profileImageInput = document.getElementById('profileImage');
            const profileImagePreview = document.getElementById('profileImagePreview');
            
            if (profileImageInput) {
                profileImageInput.addEventListener('change', function() {
                    if (this.files && this.files[0]) {
                        const reader = new FileReader();
                        
                        reader.onload = function(e) {
                            profileImagePreview.src = e.target.result;
                        }
                        
                        reader.readAsDataURL(this.files[0]);
                    }
                });
            }
            
            // Business logo preview
            const businessLogoInput = document.getElementById('businessLogo');
            const businessLogoPreview = document.getElementById('businessLogoPreview');
            
            if (businessLogoInput) {
                businessLogoInput.addEventListener('change', function() {
                    if (this.files && this.files[0]) {
                        const reader = new FileReader();
                        
                        reader.onload = function(e) {
                            businessLogoPreview.src = e.target.result;
                        }
                        
                        reader.readAsDataURL(this.files[0]);
                    }
                });
            }
            
            // Toggle password visibility
            const togglePasswordButtons = document.querySelectorAll('.toggle-password');
            
            togglePasswordButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const passwordField = this.previousElementSibling;
                    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
                    passwordField.setAttribute('type', type);
                    this.querySelector('i').classList.toggle('fa-eye');
                    this.querySelector('i').classList.toggle('fa-eye-slash');
                });
            });
            
            // Password strength meter
            const newPassword = document.getElementById('newPassword');
            const strengthBar = document.querySelector('.progress-bar');
            const strengthText = document.getElementById('strength-text');
            
            if (newPassword) {
                newPassword.addEventListener('input', function() {
                    const password = this.value;
                    let strength = 0;
                    
                    if (password.length >= 8) strength += 25;
                    if (password.match(/[A-Z]/)) strength += 25;
                    if (password.match(/[0-9]/)) strength += 25;
                    if (password.match(/[^A-Za-z0-9]/)) strength += 25;
                    
                    strengthBar.style.width = strength + '%';
                    
                    if (strength <= 25) {
                        strengthBar.className = 'progress-bar bg-danger';
                        strengthText.textContent = 'Too weak';
                    } else if (strength <= 50) {
                        strengthBar.className = 'progress-bar bg-warning';
                        strengthText.textContent = 'Could be stronger';
                    } else if (strength <= 75) {
                        strengthBar.className = 'progress-bar bg-info';
                        strengthText.textContent = 'Strong';
                    } else {
                        strengthBar.className = 'progress-bar bg-success';
                        strengthText.textContent = 'Very strong';
                    }
                });
            }
            
            // Confirm password validation
            const confirmNewPassword = document.getElementById('confirmNewPassword');
            
            if (confirmNewPassword && newPassword) {
                confirmNewPassword.addEventListener('input', function() {
                    if (this.value !== newPassword.value) {
                        this.setCustomValidity('Passwords do not match');
                    } else {
                        this.setCustomValidity('');
                    }
                });
            }
            
            // Enable/disable deactivate button based on checkbox
            const confirmDeactivate = document.getElementById('confirmDeactivate');
            const deactivateButton = document.getElementById('deactivateButton');
            
            if (confirmDeactivate && deactivateButton) {
                confirmDeactivate.addEventListener('change', function() {
                    deactivateButton.disabled = !this.checked;
                });
            }
            
            // Enable/disable delete button based on checkbox
            const confirmDelete = document.getElementById('confirmDelete');
            const deleteButton = document.getElementById('deleteButton');
            
            if (confirmDelete && deleteButton) {
                confirmDelete.addEventListener('change', function() {
                    deleteButton.disabled = !this.checked;
                });
            }
        });`}
</Script>
    </div>
  )
}
