import React from 'react'
export const metadata = {
  title: "B2BNet - Business Networking Platform",
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
      {/* Middle Section - Events */}
      <div className="col-12 col-lg-6">
        {/* Event Cards */}
        <div className="event-card">
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src=" /images/event.png"
                alt="Business Forum"
                className="event-img w-100"
              />
            </div>
            <div className="col-md-7">
              <div className="event-details">
                <h5>
                  Business Forum Presented by Epping Forest Chamber &amp;
                  District Council
                </h5>
                <div className="event-info">
                  <i className="far fa-calendar" /> Tuesday 17 September 2024
                </div>
                <div className="event-info">
                  <i className="far fa-clock" /> 06.30 pm to 09.00pm
                </div>
                <div className="event-info">
                  <i className="fas fa-map-marker-alt" /> 323 High Street Epping
                  CM16 4BZ
                </div>
                <div className="event-info">
                  <i className="fas fa-pound-sign" /> From £15
                </div>
                <div className="mt-2 d-flex align-items-center">
                  <span className="text-muted small">Organised by</span>
                </div>
                <div className="d-flex align-items-center mt-1">
                  <img
                    src=" /images/organizer.png"
                    alt="Chamber of Commerce"
                    className="company-logo"
                  />
                  <span>Epping Forest Chamber of Commerce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event-card">
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src=" /images/event.png"
                alt="CHP Annual Conference"
                className="event-img w-100"
              />
            </div>
            <div className="col-md-7">
              <div className="event-details">
                <h5>CHP Annual Conference</h5>
                <div className="event-info">
                  <i className="far fa-calendar" /> Tuesday 17 September 2024
                </div>
                <div className="event-info">
                  <i className="far fa-clock" /> 06.30 pm to 09.00pm
                </div>
                <div className="event-info">
                  <i className="fas fa-map-marker-alt" /> 31 Waddon Road,
                  Croydon, CR0 4LH, United Kingdom
                </div>
                <div className="event-info">
                  <i className="fas fa-pound-sign" /> From £15
                </div>
                <div className="mt-2 d-flex align-items-center">
                  <span className="text-muted small">Organised by</span>
                </div>
                <div className="d-flex align-items-center mt-1">
                  <img
                    src=" /images/organizer.png"
                    alt="CHP Logo"
                    className="company-logo"
                  />
                  <span>Complementary Health Professionals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event-card">
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src=" /images/event.png"
                alt="Business Forum"
                className="event-img w-100"
              />
            </div>
            <div className="col-md-7">
              <div className="event-details">
                <h5>
                  Business Forum Presented by Epping Forest Chamber &amp;
                  District Council
                </h5>
                <div className="event-info">
                  <i className="far fa-calendar" /> Tuesday 17 September 2024
                </div>
                <div className="event-info">
                  <i className="far fa-clock" /> 06.30 pm to 09.00pm
                </div>
                <div className="event-info">
                  <i className="fas fa-map-marker-alt" /> 323 High Street Epping
                  CM16 4BZ
                </div>
                <div className="event-info">
                  <i className="fas fa-pound-sign" /> From £15
                </div>
                <div className="mt-2 d-flex align-items-center">
                  <span className="text-muted small">Organised by</span>
                </div>
                <div className="d-flex align-items-center mt-1">
                  <img
                    src=" /images/organizer.png"
                    alt="Chamber of Commerce"
                    className="company-logo"
                  />
                  <span>Epping Forest Chamber of Commerce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event-card">
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src=" /images/event.png"
                alt="CHP Annual Conference"
                className="event-img w-100"
              />
            </div>
            <div className="col-md-7">
              <div className="event-details">
                <h5>CHP Annual Conference</h5>
                <div className="event-info">
                  <i className="far fa-calendar" /> Tuesday 17 September 2024
                </div>
                <div className="event-info">
                  <i className="far fa-clock" /> 06.30 pm to 09.00pm
                </div>
                <div className="event-info">
                  <i className="fas fa-map-marker-alt" /> 31 Waddon Road,
                  Croydon, CR0 4LH, United Kingdom
                </div>
                <div className="event-info">
                  <i className="fas fa-pound-sign" /> From £15
                </div>
                <div className="mt-2 d-flex align-items-center">
                  <span className="text-muted small">Organised by</span>
                </div>
                <div className="d-flex align-items-center mt-1">
                  <img
                    src=" /images/organizer.png"
                    alt="CHP Logo"
                    className="company-logo"
                  />
                  <span>Complementary Health Professionals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Sidebar - Promotional */}
      <div className="col-12 col-lg-3">
        <div className="sidebar card mb-4">
          <div className="card-body">
            <h5 className="card-title mb-3">Top Events</h5>
            <div className="side-event">
              <div className="d-flex">
                <img
                  src=" /images/top_event.png"
                  alt="London Built Environment"
                  className="event-banner-small me-3"
                />
                <div>
                  <div className="fw-medium">
                    London Built Environment September 2024 Mayfair Networking
                    Breakfast
                  </div>
                  <div className="text-muted small mt-1">Wed 14 Aug 2024</div>
                  <div className="d-flex align-items-center mt-1">
                    <i
                      className="fas fa-map-marker-alt text-muted me-1"
                      style={{ fontSize: 10 }}
                    />
                    <span className="text-muted" style={{ fontSize: 12 }}>
                      09.45
                    </span>
                    <span className="location-badge ms-2">Dagenham</span>
                  </div>
                  <div className="text-muted small mt-1">
                    Organised by London Built Environment
                  </div>
                </div>
              </div>
              <div className="position-absolute top-0 end-0 m-2">
                <span className="promotion-tag">Promoted</span>
              </div>
            </div>
            <div className="side-event">
              <div className="d-flex">
                <img
                  src=" /images/top_event.png"
                  alt="London Built Environment"
                  className="event-banner-small me-3"
                />
                <div>
                  <div className="fw-medium">
                    London Built Environment September 2024 Mayfair Networking
                    Breakfast
                  </div>
                  <div className="text-muted small mt-1">Wed 14 Aug 2024</div>
                  <div className="d-flex align-items-center mt-1">
                    <i
                      className="fas fa-map-marker-alt text-muted me-1"
                      style={{ fontSize: 10 }}
                    />
                    <span className="text-muted" style={{ fontSize: 12 }}>
                      09.45
                    </span>
                    <span className="location-badge ms-2">Dagenham</span>
                  </div>
                  <div className="text-muted small mt-1">
                    Organised by London Built Environment
                  </div>
                </div>
              </div>
            </div>
            <div className="side-event">
              <div className="d-flex">
                <img
                  src=" /images/top_event.png"
                  alt="London Built Environment"
                  className="event-banner-small me-3"
                />
                <div>
                  <div className="fw-medium">
                    London Built Environment September 2024 Mayfair Networking
                    Breakfast
                  </div>
                  <div className="text-muted small mt-1">Wed 14 Aug 2024</div>
                  <div className="d-flex align-items-center mt-1">
                    <i
                      className="fas fa-map-marker-alt text-muted me-1"
                      style={{ fontSize: 10 }}
                    />
                    <span className="text-muted" style={{ fontSize: 12 }}>
                      09.45
                    </span>
                    <span className="location-badge ms-2">Dagenham</span>
                  </div>
                  <div className="text-muted small mt-1">
                    Organised by London Built Environment
                  </div>
                </div>
              </div>
            </div>
            <div className="side-event">
              <div className="d-flex">
                <img
                  src=" /images/top_event.png"
                  alt="London Built Environment"
                  className="event-banner-small me-3"
                />
                <div>
                  <div className="fw-medium">
                    London Built Environment September 2024 Mayfair Networking
                    Breakfast
                  </div>
                  <div className="text-muted small mt-1">Wed 14 Aug 2024</div>
                  <div className="d-flex align-items-center mt-1">
                    <i
                      className="fas fa-map-marker-alt text-muted me-1"
                      style={{ fontSize: 10 }}
                    />
                    <span className="text-muted" style={{ fontSize: 12 }}>
                      09.45
                    </span>
                    <span className="location-badge ms-2">Dagenham</span>
                  </div>
                  <div className="text-muted small mt-1">
                    Organised by London Built Environment
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Investment Banner */}
          <div className=" p-2 ">
            <img
              src=" /images/right_banner.png"
              alt="Investment Opportunities"
              className="w-100"
              style={{ height: 220, objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}
