import React from 'react'
 import Image from 'next/image'
 export const metadata = {
  title: "B2BNet - Directory",
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
    {/* Middle Section - Directory Listings */}
    <div className="col-12 col-lg-6">
      {/* Search and Filter Bar */}
      <div className="search-filter-bar bg-white p-3 rounded mb-3">
        <div className="row g-2">
          <div className="col-md-8">
            <div className="input-group">
              <span className="input-group-text bg-transparent border-end-0">
                <i className="fas fa-search" />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search businesses"
              />
            </div>
          </div>
          <div className="col-md-4">
            {/* <select className="form-select">
              <option selected="">Filter by industry</option>
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Manufacturing</option>
              <option>Retail</option>
            </select> */}
            <select className="form-select" defaultValue="">
  <option value="">Filter by industry</option>
  <option value="Technology">Technology</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Manufacturing">Manufacturing</option>
  <option value="Retail">Retail</option>
</select>

          </div>
        </div>
      </div>
      {/* Business Listings */}
      <div className="business-card">
        <div className="row g-0">
          <div className="col-md-3 col-lg-4 d-flex align-items-center justify-content-center p-3">
            <Image width={120} height={71.34}
              src="/images/business.png"
              alt="Tekgenie"
              className="business-card-logo"
            />
          </div>
          <div className="col-md-9 col-lg-8">
            <div className="business-details">
              <div className="d-flex justify-content-between align-items-start">
                <h5 className="business-name">
                  Tekgenie{" "}
                  <span className="verified-badge">
                    <i className="fas fa-check-circle" />
                  </span>
                </h5>
                <span className="location-badge">Northolt</span>
              </div>
              <p className="business-description">
                Revolutionising Your Digital Experience - Innovative IT
                Solutions for Businesses and Individuals.
              </p>
              <div className="business-services">
                <div className="service-item">
                  <i className="fas fa-check-circle text-primary me-2" />
                  Software Development and Tech Resources
                </div>
                <div className="service-item">
                  <i className="fas fa-check-circle text-primary me-2" />
                  Software Consultancy Prototyping
                </div>
              </div>
              <div className="mt-3 d-flex justify-content-between align-items-center">
                <button className="btn btn-sm btn-outline-custom">
                  <i className="far fa-bookmark me-1" /> Save
                </button>
                <button className="btn btn-sm btn-primary-custom">
                  <i className="far fa-envelope me-1" /> Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="business-card">
        <div className="row g-0">
          <div className="col-md-3 col-lg-4 d-flex align-items-center justify-content-center p-3">
          <Image width={120} height={71.34}
              src="/images/business.png"
              alt="Barking & Dagenham Chamber of Commerce"
              className="business-card-logo"
            />
          </div>
          <div className="col-md-9 col-lg-8">
            <div className="business-details">
              <div className="d-flex justify-content-between align-items-start">
                <h5 className="business-name">
                  Barking &amp; Dagenham Chamber of Commerce
                </h5>
                <span className="location-badge">Dagenham</span>
              </div>
              <p className="business-description">
                A chamber based within the Borough of Barking &amp; Dagenham
                that helps local businesses connect and grow together.
              </p>
              <div className="business-services">
                <div className="service-item">
                  <i className="fas fa-check-circle text-primary me-2" />
                  Promote trade and enhance the economic success of local
                  enterprises
                </div>
                <div className="service-item">
                  <i className="fas fa-check-circle text-primary me-2" />
                  Provides platforms for business introductions, networking
                  events
                </div>
              </div>
              <div className="mt-3 d-flex justify-content-between align-items-center">
                <button className="btn btn-sm btn-outline-custom">
                  <i className="far fa-bookmark me-1" /> Save
                </button>
                <button className="btn btn-sm btn-primary-custom">
                  <i className="far fa-envelope me-1" /> Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="business-card">
        <div className="row g-0">
          <div className="col-md-3 col-lg-4 d-flex align-items-center justify-content-center p-3">
          <Image width={120} height={71.34}
              src="/images/business.png"
              alt="Tekgenie"
              className="business-card-logo"
            />
          </div>
          <div className="col-md-9 col-lg-8">
            <div className="business-details">
              <div className="d-flex justify-content-between align-items-start">
                <h5 className="business-name">
                  Tekgenie{" "}
                  <span className="verified-badge">
                    <i className="fas fa-check-circle" />
                  </span>
                </h5>
                <span className="location-badge">Northolt</span>
              </div>
              <p className="business-description">
                Revolutionising Your Digital Experience - Innovative IT
                Solutions for Businesses and Individuals.
              </p>
              <div className="business-services">
                <div className="service-item">
                  <i className="fas fa-check-circle text-primary me-2" />
                  Software Development and Tech Resources
                </div>
                <div className="service-item">
                  <i className="fas fa-check-circle text-primary me-2" />
                  Software Consultancy Prototyping
                </div>
              </div>
              <div className="mt-3 d-flex justify-content-between align-items-center">
                <button className="btn btn-sm btn-outline-custom">
                  <i className="far fa-bookmark me-1" /> Save
                </button>
                <button className="btn btn-sm btn-primary-custom">
                  <i className="far fa-envelope me-1" /> Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="business-card">
        <div className="row g-0">
          <div className="col-md-3 col-lg-4 d-flex align-items-center justify-content-center p-3">
          <Image width={120} height={71.34}
              src="/images/business.png"
              alt="Barking & Dagenham Chamber of Commerce"
              className="business-card-logo"
            />
          </div>
          <div className="col-md-9 col-lg-8">
            <div className="business-details">
              <div className="d-flex justify-content-between align-items-start">
                <h5 className="business-name">
                  Barking &amp; Dagenham Chamber of Commerce
                </h5>
                <span className="location-badge">Dagenham</span>
              </div>
              <p className="business-description">
                A chamber based within the Borough of Barking &amp; Dagenham
                that helps local businesses connect and grow together.
              </p>
              <div className="business-services">
                <div className="service-item">
                  <i className="fas fa-check-circle text-primary me-2" />
                  Promote trade and enhance the economic success of local
                  enterprises
                </div>
                <div className="service-item">
                  <i className="fas fa-check-circle text-primary me-2" />
                  Provides platforms for business introductions, networking
                  events
                </div>
              </div>
              <div className="mt-3 d-flex justify-content-between align-items-center">
                <button className="btn btn-sm btn-outline-custom">
                  <i className="far fa-bookmark me-1" /> Save
                </button>
                <button className="btn btn-sm btn-primary-custom">
                  <i className="far fa-envelope me-1" /> Contact
                </button>
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
          <h5 className="card-title mb-3">Discover businesses</h5>
          <div className="side-business">
            <div className="d-flex">
              <Image width={48} height={48}
                src="/images/business_logo1.png"
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
            <Image width={48} height={48}
                src="/images/business_logo2.png"
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
            <Image width={48} height={48}
                src="/images/business_logo3.png"
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
            <Image width={48} height={48}
                src="/images/business_logo1.png"
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

    </div>
  )
}
