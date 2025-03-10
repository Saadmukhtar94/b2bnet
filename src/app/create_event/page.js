import React from 'react'
import Script from 'next/script';
import Image from 'next/image'
export const metadata = {
  title: "B2BNet - Create Event",
  description: "B2BNet - Business Networking Platform",
  icons: {
    icon: "/images/logo.png", 
  },
};
export default function page() {
  
  return (
    <div>
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
              <div className="d-grid gap-2 mt-2 mb-3">
                <button className="btn btn-outline-custom btn-sm" type="button">
                  <i className="far fa-heart me-2" /> Favourite
                </button>
              </div>
              <div className="business-item">
                {/* <img
                  src="assets/images/business.png"
                  alt="Tekgenie"
                  className="business-logo"
                /> */}
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
    {/* Middle Section - Create Event Form */}
    <div className="col-12 col-lg-6">
      <div className="create-event-form bg-white rounded p-4">
        <h5 className="mb-4">Create Event</h5>
        <form>
          {/* Hidden field for vendor_id */}
          <input type="hidden" name="vendor_id" defaultValue={1} />
          {/* Event Banner Upload */}
          <div className="event-banner-upload-container mb-4">
            <div className="banner-placeholder text-center py-4">
              <div className="text-muted">Upload event banner</div>
            </div>
          </div>
          {/* Event Title */}
          <div className="mb-3">
            <label htmlFor="eventTitle" className="form-label">
              Event Title *
            </label>
            <input
              type="text"
              className="form-control"
              id="eventTitle"
              name="title"
              defaultValue="Test Event"
              required=""
            />
            <div className="form-text text-end">0/100</div>
          </div>
          {/* Event Description */}
          <div className="mb-3">
            <label htmlFor="eventDescription" className="form-label">
              Event Description *
            </label>
            <textarea
              className="form-control"
              id="eventDescription"
              name="description"
              rows={4}
              required=""
              defaultValue={"Test Description"}
            />
            <div className="form-text text-end">0/2000</div>
          </div>
          {/* Date and Time */}
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <label htmlFor="startDate" className="form-label">
                Start Date *
              </label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                name="start_date"
                defaultValue="2025-01-29"
                required=""
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="endDate" className="form-label">
                End Date *
              </label>
              <input
                type="date"
                className="form-control"
                id="endDate"
                name="end_date"
                defaultValue="2025-01-29"
                required=""
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <label htmlFor="startTime" className="form-label">
                Start Time *
              </label>
              <input
                type="time"
                className="form-control"
                id="startTime"
                name="start_time"
                defaultValue="16:59:21"
                required=""
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="endTime" className="form-label">
                End Time *
              </label>
              <input
                type="time"
                className="form-control"
                id="endTime"
                name="end_time"
                defaultValue="22:59:21"
                required=""
              />
            </div>
          </div>
          {/* Location */}
          <div className="mb-3">
            <label htmlFor="venue" className="form-label">
              Venue *
            </label>
            <input
              type="text"
              className="form-control"
              id="venue"
              name="venue"
              placeholder="Enter venue name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location *
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              defaultValue="NY"
              required=""
            />
          </div>
          {/* Hidden fields for coordinates */}
          <input type="hidden" name="lat" defaultValue={85} />
          <input type="hidden" name="lon" defaultValue={123} />
          {/* Map Preview */}
          <div className="map-preview mb-3">
            {/* <img
              src="assets/images/map_preview.png"
              alt="Event Location Map"
              className="img-fluid rounded"
            /> */}
          </div>
          {/* Price */}
          <div className="mb-3">
            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="isPaid"
                name="is_paid"
              />
              <label className="form-check-label" htmlFor="isPaid">
                This is a paid event
              </label>
            </div>
            <div id="priceField" className="mt-2">
              <label htmlFor="price" className="form-label">
                Price (£) *
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                defaultValue={123}
                step="0.01"
              />
            </div>
          </div>
          {/* Social Media Links */}
          <div className="mb-4">
            <label className="form-label">Event Links</label>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <i className="fas fa-globe" />
              </span>
              <input
                type="url"
                className="form-control"
                name="websiteLink"
                placeholder="Website URL"
                defaultValue="https://bracktix.sadacode.com"
              />
            </div>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <i className="fab fa-linkedin" />
              </span>
              <input
                type="url"
                className="form-control"
                name="linkedinLink"
                placeholder="LinkedIn URL"
                defaultValue="https://bracktix.sadacode.com"
              />
            </div>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <i className="fab fa-facebook" />
              </span>
              <input
                type="url"
                className="form-control"
                name="facebookLink"
                placeholder="Facebook URL"
                defaultValue="https://bracktix.sadacode.com"
              />
            </div>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <i className="fab fa-twitter" />
              </span>
              <input
                type="url"
                className="form-control"
                name="xLink"
                placeholder="Twitter/X URL"
                defaultValue="https://bracktix.sadacode.com"
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary-custom px-5">
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
    {/* Right Sidebar - Tips and Promotional */}
    <div className="col-12 col-lg-3">
      <div className="sidebar card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-3">Event Creation Tips</h5>
          <div className="event-tip mb-3">
            <h6>
              <i className="fas fa-lightbulb text-warning me-2" />
              Create an engaging title
            </h6>
            <p className="small text-muted">
              Your event title should be clear, concise, and compelling to
              attract attendees.
            </p>
          </div>
          <div className="event-tip mb-3">
            <h6>
              <i className="fas fa-lightbulb text-warning me-2" />
              Add a high-quality banner
            </h6>
            <p className="small text-muted">
              Upload a professional banner image (1200 x 600px) to make your
              event stand out.
            </p>
          </div>
          <div className="event-tip mb-3">
            <h6>
              <i className="fas fa-lightbulb text-warning me-2" />
              Provide detailed information
            </h6>
            <p className="small text-muted">
              Include all relevant details about your event, such as agenda,
              speakers, and what attendees can expect.
            </p>
          </div>
          <div className="event-tip">
            <h6>
              <i className="fas fa-lightbulb text-warning me-2" />
              Promote your event
            </h6>
            <p className="small text-muted">
              Share your event on social media and invite relevant businesses to
              maximize attendance.
            </p>
          </div>
        </div>
      </div>
      {/* Promotional Banner */}
      <div className="p-2">
        {/* <img
          src="assets/images/right_banner.png"
          alt="Promotional Banner"
          className="w-100"
          style={{ height: 220, objectFit: "cover" }}
        /> */}
      </div>
    </div>
  </div>
</div>
<Script>
  {`document.addEventListener('DOMContentLoaded', function() {
            // Toggle price field visibility based on isPaid checkbox
            const isPaidCheckbox = document.getElementById('isPaid');
            const priceField = document.getElementById('priceField');
            
            function togglePriceField() {
                if (isPaidCheckbox.checked) {
                    priceField.style.display = 'block';
                } else {
                    priceField.style.display = 'none';
                }
            }
            
            // Initial state
            togglePriceField();
            
            // Listen for changes
            isPaidCheckbox.addEventListener('change', togglePriceField);
        });`}
</Script>
    </div>
  )
}
