import React from "react";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "B2BNet - Business Detail",
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
          {/* Middle Section - Business Detail */}
          <div className="col-12 col-lg-6">
            {/* Business Header */}
            <div className="business-detail-header bg-white rounded overflow-hidden mb-3">
              <div className="business-banner position-relative">
                <img
                  src="assets/images/business_banner.jpg"
                  alt="Tekgenie Banner"
                  className="w-100"
                  style={{ height: 200, objectFit: "cover" }}
                />
                <div className="business-logo-container">
                  <img
                    src="assets/images/business_logo2.png"
                    alt="Tekgenie"
                    className="business-detail-logo"
                  />
                </div>
              </div>
              <div className="business-detail-info p-4 pt-5">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h4 className="mb-0">
                    Tekgenie{" "}
                    <span className="verified-badge">
                      <i className="fas fa-check-circle" />
                    </span>
                  </h4>
                  <span className="location-badge">Northolt</span>
                </div>
                <p className="text-muted mb-3">
                  Software Development &amp; IT Solutions
                </p>
                <div className="business-stats d-flex flex-wrap mb-3">
                  <div className="me-4">
                    <span className="text-muted">Founded:</span> 2018
                  </div>
                  <div className="me-4">
                    <span className="text-muted">Size:</span> 10-50 employees
                  </div>
                  <div>
                    <span className="text-muted">Industry:</span> Information
                    Technology
                  </div>
                </div>
                <div className="business-actions d-flex flex-wrap">
                  <button className="btn btn-primary-custom me-2 mb-2">
                    <i className="far fa-envelope me-1" /> Contact
                  </button>
                  <button className="btn btn-outline-custom me-2 mb-2">
                    <i className="far fa-bookmark me-1" /> Save
                  </button>
                  <button className="btn btn-outline-custom me-2 mb-2">
                    <i className="fas fa-share-alt me-1" /> Share
                  </button>
                </div>
              </div>
            </div>
            {/* About Section */}
            <div className="business-detail-section bg-white rounded p-4 mb-3">
              <h5 className="card-title mb-3">About</h5>
              <p>
                Revolutionising Your Digital Experience - Innovative IT
                Solutions for Businesses and Individuals. We specialize in
                creating custom software solutions that help businesses
                streamline their operations and improve efficiency.
              </p>
              <p>
                Our team of experienced developers and IT professionals are
                dedicated to delivering high-quality solutions that meet the
                unique needs of each client. We work closely with our clients to
                understand their requirements and provide tailored solutions
                that exceed their expectations.
              </p>
            </div>
            {/* Services Section */}
            <div className="business-detail-section bg-white rounded p-4 mb-3">
              <h5 className="card-title mb-3">Services</h5>
              <div className="service-list">
                <div className="service-item mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary me-2" />
                    <h6 className="mb-0">Software Development</h6>
                  </div>
                  <p className="ms-4 mb-0 text-muted">
                    Custom software development tailored to your business needs,
                    including web applications, mobile apps, and enterprise
                    solutions.
                  </p>
                </div>
                <div className="service-item mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary me-2" />
                    <h6 className="mb-0">IT Consultancy</h6>
                  </div>
                  <p className="ms-4 mb-0 text-muted">
                    Expert advice on technology strategy, digital
                    transformation, and IT infrastructure optimization.
                  </p>
                </div>
                <div className="service-item mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary me-2" />
                    <h6 className="mb-0">UI/UX Design</h6>
                  </div>
                  <p className="ms-4 mb-0 text-muted">
                    User-centered design services to create intuitive and
                    engaging digital experiences.
                  </p>
                </div>
                <div className="service-item">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-primary me-2" />
                    <h6 className="mb-0">Technical Support</h6>
                  </div>
                  <p className="ms-4 mb-0 text-muted">
                    Ongoing technical support and maintenance services to ensure
                    your systems run smoothly.
                  </p>
                </div>
              </div>
            </div>
            {/* Media Section */}
            <div className="business-detail-section bg-white rounded p-4 mb-3">
              <h5 className="card-title mb-3">Media</h5>
              <div className="row g-2 business-media">
                <div className="col-4">
                  <img
                    src="assets/images/media1.jpg"
                    alt="Media 1"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-4">
                  <img
                    src="assets/images/media2.jpg"
                    alt="Media 2"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-4">
                  <div className="position-relative">
                    <img
                      src="assets/images/media3.jpg"
                      alt="Media 3"
                      className="img-fluid rounded"
                    />
                    <div className="more-media-overlay rounded d-flex align-items-center justify-content-center">
                      <span className="text-white">+3 more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Section */}
            <div className="business-detail-section bg-white rounded p-4 mb-3">
              <h5 className="card-title mb-3">Contact</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="contact-person d-flex align-items-center">
                    <img
                      src="assets/images/contact_person.png"
                      alt="John Smith"
                      className="contact-person-img me-3"
                    />
                    <div>
                      <h6 className="mb-1">John Smith</h6>
                      <p className="text-muted mb-0">
                        Chief Technology Officer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="contact-info">
                    <div className="mb-2">
                      <i className="fas fa-envelope text-muted me-2" />
                      <a
                        href="mailto:info@tekgenie.com"
                        className="text-decoration-none">
                        info@tekgenie.com
                      </a>
                    </div>
                    <div className="mb-2">
                      <i className="fas fa-phone text-muted me-2" />
                      <a
                        href="tel:+442071234567"
                        className="text-decoration-none">
                        +44 20 7123 4567
                      </a>
                    </div>
                    <div>
                      <i className="fas fa-globe text-muted me-2" />
                      <a
                        href="https://www.tekgenie.com"
                        target="_blank"
                        className="text-decoration-none">
                        www.tekgenie.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-links mt-3">
                <Link
                  href="/linkedin"
                  className="btn btn-outline-secondary btn-sm me-2">
                  <i className="fab fa-linkedin-in me-1" /> LinkedIn
                </Link>

                <Link
                  href="/facebook"
                  className="btn btn-outline-secondary btn-sm me-2">
                  <i className="fab fa-facebook-f me-1" /> Facebook
                </Link>

                <Link
                  href="/twitter"
                  className="btn btn-outline-secondary btn-sm">
                  <i className="fab fa-twitter me-1" /> Twitter
                </Link>
              </div>
            </div>
            {/* Location Section */}
            <div className="business-detail-section bg-white rounded p-4 mb-3">
              <h5 className="card-title mb-3">Location</h5>
              <div className="location-info mb-3">
                <p className="mb-1">
                  <strong>Primary Location:</strong>
                </p>
                <p className="mb-1">123 Business Park, High Street</p>
                <p className="mb-1">Northolt, London</p>
                <p className="mb-0">UB5 5AB</p>
              </div>
              <div className="map-container">
                <img
                  src="assets/images/map_preview.png"
                  alt="Business Location Map"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
          {/* Right Sidebar - Promotional */}
          <div className="col-12 col-lg-3">
            <div className="sidebar card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Similar businesses</h5>
                <div className="side-business">
                  <div className="d-flex">
                    <img
                      src="assets/images/business_logo1.png"
                      alt="Tech Solutions Ltd"
                      className="business-logo-small me-3"
                    />
                    <div>
                      <div className="fw-medium">Tech Solutions Ltd</div>
                      <div className="text-muted small">
                        IT services and software development for small and
                        medium businesses
                      </div>
                      <div className="d-flex align-items-center mt-1">
                        <i
                          className="fas fa-map-marker-alt text-muted me-1"
                          style={{ fontSize: 10 }}
                        />
                        <span className="text-muted" style={{ fontSize: 12 }}>
                          Ealing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="side-business">
                  <div className="d-flex">
                    <img
                      src="assets/images/business_logo2.png"
                      alt="Digital Innovators"
                      className="business-logo-small me-3"
                    />
                    <div>
                      <div className="fw-medium">Digital Innovators</div>
                      <div className="text-muted small">
                        Web and mobile app development with focus on user
                        experience
                      </div>
                      <div className="d-flex align-items-center mt-1">
                        <i
                          className="fas fa-map-marker-alt text-muted me-1"
                          style={{ fontSize: 10 }}
                        />
                        <span className="text-muted" style={{ fontSize: 12 }}>
                          Harrow
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="side-business">
                  <div className="d-flex">
                    <img
                      src="assets/images/business_logo3.png"
                      alt="Cloud Systems"
                      className="business-logo-small me-3"
                    />
                    <div>
                      <div className="fw-medium">Cloud Systems</div>
                      <div className="text-muted small">
                        Cloud infrastructure and migration services for
                        businesses
                      </div>
                      <div className="d-flex align-items-center mt-1">
                        <i
                          className="fas fa-map-marker-alt text-muted me-1"
                          style={{ fontSize: 10 }}
                        />
                        <span className="text-muted" style={{ fontSize: 12 }}>
                          Wembley
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Upcoming Events */}
            <div className="sidebar card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Upcoming events</h5>
                <div className="side-event">
                  <div className="d-flex">
                    <img
                      src="assets/images/top_event.png"
                      alt="Tech Meetup"
                      className="event-banner-small me-3"
                    />
                    <div>
                      <div className="fw-medium">
                        Adobe Illustrator Beginner Tutorial
                      </div>
                      <div className="text-muted small mt-1">
                        Wed 14 Aug 2024
                      </div>
                      <div className="d-flex align-items-center mt-1">
                        <i
                          className="fas fa-map-marker-alt text-muted me-1"
                          style={{ fontSize: 10 }}
                        />
                        <span className="text-muted" style={{ fontSize: 12 }}>
                          09.45
                        </span>
                        <span className="location-badge ms-2">Northolt</span>
                      </div>
                      <div className="text-muted small mt-1">
                        Organised by Tekgenie
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Promotional Banner */}
            <div className="p-2">
              <img
                src="assets/images/right_banner.png"
                alt="Promotional Banner"
                className="w-100"
                style={{ height: 220, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
