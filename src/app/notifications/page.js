import React from 'react'
export const metadata = {
  title: "B2BNet - Notifications",
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
                <img
                  src=" /images/dp.png"
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
                  src=" /images/business.png"
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
                  src=" /images/business.png"
                  alt="Profile"
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
    {/* Middle Section - Notifications */}
    <div className="col-12 col-lg-6">
      {/* Notification Header */}
      <div className="notification-header bg-white p-3 rounded mb-3 d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Notifications</h5>
        <div className="notification-actions">
          <button className="btn btn-sm btn-outline-secondary me-2">
            Mark all as read
          </button>
          <div className="dropdown d-inline-block">
            <button
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
              type="button"
              id="notificationFilterDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-filter me-1" /> Filter
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="notificationFilterDropdown"
            >
              <li>
                <a className="dropdown-item active" href="#">
                  All notifications
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Unread
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mentions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Events
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Connection requests
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Notification List */}
      <div className="notification-list">
        {/* Today Section */}
        <div className="notification-date-header">
          <span>Today</span>
        </div>
        {/* Unread Notification */}
        <div className="notification-item unread">
          <div className="notification-content">
            <div className="notification-avatar">
              <img
                src=" /images/business.png"
                alt="Tekgenie"
                className="notification-img"
              />
            </div>
            <div className="notification-details">
              <div className="notification-text">
                <strong>Tekgenie</strong> has invited you to their upcoming
                event <strong>"Adobe Illustrator Beginner Tutorial"</strong> on
                September 17, 2024.
              </div>
              <div className="notification-time">2 hours ago</div>
            </div>
          </div>
          <div className="notification-actions">
            <button className="btn btn-sm btn-primary-custom me-2">
              Accept
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              Decline
            </button>
          </div>
        </div>
        {/* Unread Notification */}
        <div className="notification-item unread">
          <div className="notification-content">
            <div className="notification-avatar">
              <img
                src=" /images/business.png"
                alt="Barking & Dagenham Chamber of Commerce"
                className="notification-img"
              />
            </div>
            <div className="notification-details">
              <div className="notification-text">
                <strong>Barking &amp; Dagenham Chamber of Commerce</strong> has
                sent you a connection request.
              </div>
              <div className="notification-time">5 hours ago</div>
            </div>
          </div>
          <div className="notification-actions">
            <button className="btn btn-sm btn-primary-custom me-2">
              Accept
            </button>
            <button className="btn btn-sm btn-outline-secondary">Ignore</button>
          </div>
        </div>
        {/* Yesterday Section */}
        <div className="notification-date-header">
          <span>Yesterday</span>
        </div>
        {/* Read Notification */}
        <div className="notification-item">
          <div className="notification-content">
            <div className="notification-avatar">
              <img
                src=" /images/dp.png"
                alt="John Smith"
                className="notification-img"
              />
            </div>
            <div className="notification-details">
              <div className="notification-text">
                <strong>John Smith</strong> from{" "}
                <strong>New West End Company</strong> viewed your profile.
              </div>
              <div className="notification-time">Yesterday at 3:45 PM</div>
            </div>
          </div>
        </div>
        {/* Read Notification */}
        <div className="notification-item">
          <div className="notification-content">
            <div className="notification-avatar">
              <img
                src=" /images/business.png"
                alt="Tekgenie"
                className="notification-img"
              />
            </div>
            <div className="notification-details">
              <div className="notification-text">
                <strong>Tekgenie</strong> has posted a new event:{" "}
                <strong>"Adobe Illustrator Beginner Tutorial"</strong>.
              </div>
              <div className="notification-time">Yesterday at 10:20 AM</div>
            </div>
          </div>
        </div>
        {/* Last Week Section */}
        <div className="notification-date-header">
          <span>Last Week</span>
        </div>
        {/* Read Notification */}
        <div className="notification-item">
          <div className="notification-content">
            <div className="notification-avatar">
              <img
                src=" /images/business.png"
                alt="Deenscorp Royale"
                className="notification-img"
              />
            </div>
            <div className="notification-details">
              <div className="notification-text">
                <strong>Deenscorp Royale</strong> and{" "}
                <strong>5 other businesses</strong> are attending{" "}
                <strong>"Business Forum"</strong> in your area.
              </div>
              <div className="notification-time">Sep 10, 2024</div>
            </div>
          </div>
        </div>
        {/* Read Notification */}
        <div className="notification-item">
          <div className="notification-content">
            <div className="notification-avatar">
              <img
                src=" /images/business.png"
                alt="London Built Environment"
                className="notification-img"
              />
            </div>
            <div className="notification-details">
              <div className="notification-text">
                <strong>London Built Environment</strong> has mentioned you in a
                post about <strong>"Networking Breakfast"</strong>.
              </div>
              <div className="notification-time">Sep 8, 2024</div>
            </div>
          </div>
        </div>
        {/* Read Notification */}
        <div className="notification-item">
          <div className="notification-content">
            <div className="notification-avatar">
              <img
                src=" /images/business.png"
                alt="B2BNet"
                className="notification-img"
              />
            </div>
            <div className="notification-details">
              <div className="notification-text">
                Welcome to B2BNet! Complete your profile to connect with other
                businesses.
              </div>
              <div className="notification-time">Sep 5, 2024</div>
            </div>
          </div>
          <div className="notification-actions">
            <button className="btn btn-sm btn-primary-custom">
              Complete Profile
            </button>
          </div>
        </div>
      </div>
      {/* Load More Button */}
      <div className="text-center mt-3 mb-4">
        <button className="btn btn-outline-secondary">
          <i className="fas fa-sync-alt me-2" /> Load More
        </button>
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
                src=" /images/business_logo1.png"
                alt="New West End Company"
                className="business-logo-small me-3"
              />
              <div>
                <div className="fw-medium">New West End Company</div>
                <div className="text-muted small">
                  We are a global partnership of 600 businesses, working to
                  deliver a New West End
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
                src=" /images/business_logo2.png"
                alt="New West End Company"
                className="business-logo-small me-3"
              />
              <div>
                <div className="fw-medium">New West End Company</div>
                <div className="text-muted small">
                  We are a global partnership of 600 businesses, working to
                  deliver a New West End
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
                src=" /images/business_logo3.png"
                alt="New West End Company"
                className="business-logo-small me-3"
              />
              <div>
                <div className="fw-medium">New West End Company</div>
                <div className="text-muted small">
                  We are a global partnership of 600 businesses, working to
                  deliver a New West End
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
                src=" /images/business_logo1.png"
                alt="New West End Company"
                className="business-logo-small me-3"
              />
              <div>
                <div className="fw-medium">New West End Company</div>
                <div className="text-muted small">
                  We are a global partnership of 600 businesses, working to
                  deliver a New West End
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
          src=" /images/right_banner.png"
          alt="Promotional Banner"
          className="w-100"
          style={{ height: 220, objectFit: "cover" }}
        />
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
