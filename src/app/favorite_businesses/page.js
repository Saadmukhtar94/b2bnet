"use client";
import Image from "next/image";
import { useEffect } from "react";
import React from 'react'
import { metadata } from "./metadata"; // ✅ Import metadata from the new file


export default function Page() {
  useEffect(() => {
    // Initialize tooltips
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Handle favorite button clicks
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                this.setAttribute('title', 'Remove from favorites');
                this.setAttribute('data-bs-original-title', 'Remove from favorites');
            } else {
                this.setAttribute('title', 'Add to favorites');
                this.setAttribute('data-bs-original-title', 'Add to favorites');
            }

            // Refresh tooltip
            const tooltip = bootstrap.Tooltip.getInstance(this);
            if (tooltip) {
                tooltip.update();
            }
        });
    });

    // Handle icon selection in modal
    const iconButtons = document.querySelectorAll('.icon-select');
    iconButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            iconButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
        });
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
        favoriteButtons.forEach(button => {
            button.removeEventListener('click', () => {});
        });

        iconButtons.forEach(button => {
            button.removeEventListener('click', () => {});
        });
    };
}, []);  // Dependency array here

  return (
    <div>
        <>
  {/* Main Content */}
  <div className="container-fluid py-3">
    <div className="row">
      <div className="col-lg-9">
    {/* Page Header */}
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 className="mb-1">Favorite Businesses</h4>
        <p className="text-muted mb-0">
          Manage your saved businesses and stay connected
        </p>
      </div>
      <div className="d-flex">
        <div className="dropdown me-2">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="sortDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-sort me-1" /> Sort
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="sortDropdown"
          >
            <li>
              <a className="dropdown-item" href="#">
                <i className="fas fa-sort-alpha-down me-2" /> Name (A-Z)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fas fa-sort-alpha-up me-2" /> Name (Z-A)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fas fa-calendar-alt me-2" /> Date Added
                (Newest)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="fas fa-calendar-alt me-2" /> Date Added
                (Oldest)
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="filterDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-filter me-1" /> Filter
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="filterDropdown"
          >
            <li>
              <a className="dropdown-item" href="#">
                All Categories
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Technology
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Marketing
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Finance
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Retail
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Healthcare
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Favorites List */}
    <div className="row">
      {/* Favorite Business Card */}
      <div className="col-md-6 col-xl-4 mb-4">
        <div className="favorite-business-card">
          <div className="favorite-actions">
            <button
              className="btn btn-icon favorite-btn active"
              data-bs-toggle="tooltip"
              title="Remove from favorites"
            >
              <i className="fas fa-star" />
            </button>
            <div className="dropdown">
              <button className="btn btn-icon" data-bs-toggle="dropdown">
                <i className="fas fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-comment me-2" /> Message
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-share-alt me-2" /> Share
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-tag me-2" /> Add to List
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-danger" href="#">
                    <i className="fas fa-times me-2" /> Remove
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="favorite-business-logo">
            <Image width={100} height={100}
              src="/images/business_logo1.png"
              alt="New West End Company"
            />
          </div>
          <div className="favorite-business-info">
            <h5 className="favorite-business-name">
              New West End Company
              <i className="fas fa-check-circle verified-badge" />
            </h5>
            <p className="favorite-business-category">
              Retail &amp; Business Services
            </p>
            <p className="favorite-business-description">
              A leading business partnership representing 600+ retailers and
              businesses in London&apos;s West End.
            </p>
            <div className="favorite-business-stats">
              <div>
                <i className="fas fa-map-marker-alt" /> London, UK
              </div>
              <div>
                <i className="fas fa-users" /> 500-1000 employees
              </div>
            </div>
            <div className="favorite-business-actions">
              <a
                href="business_detail.html"
                className="btn btn-sm btn-outline-custom"
              >
                View Profile
              </a>
              <a href="chat.html" className="btn btn-sm btn-primary-custom">
                Message
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Favorite Business Card */}
      <div className="col-md-6 col-xl-4 mb-4">
        <div className="favorite-business-card">
          <div className="favorite-actions">
            <button
              className="btn btn-icon favorite-btn active"
              data-bs-toggle="tooltip"
              title="Remove from favorites"
            >
              <i className="fas fa-star" />
            </button>
            <div className="dropdown">
              <button className="btn btn-icon" data-bs-toggle="dropdown">
                <i className="fas fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-comment me-2" /> Message
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-share-alt me-2" /> Share
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-tag me-2" /> Add to List
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-danger" href="#">
                    <i className="fas fa-times me-2" /> Remove
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="favorite-business-logo">
            <Image width={100} height={100}
              src="/images/business_logo2.png"
              alt="Tech Solutions Ltd"
            />
          </div>
          <div className="favorite-business-info">
            <h5 className="favorite-business-name">
              Tech Solutions Ltd
              <i className="fas fa-check-circle verified-badge" />
            </h5>
            <p className="favorite-business-category">
              Technology &amp; Software
            </p>
            <p className="favorite-business-description">
              Innovative technology solutions for businesses of all sizes.
              Specializing in custom software development.
            </p>
            <div className="favorite-business-stats">
              <div>
                <i className="fas fa-map-marker-alt" /> Manchester, UK
              </div>
              <div>
                <i className="fas fa-users" /> 100-250 employees
              </div>
            </div>
            <div className="favorite-business-actions">
              <a
                href="business_detail.html"
                className="btn btn-sm btn-outline-custom"
              >
                View Profile
              </a>
              <a href="chat.html" className="btn btn-sm btn-primary-custom">
                Message
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Favorite Business Card */}
      <div className="col-md-6 col-xl-4 mb-4">
        <div className="favorite-business-card">
          <div className="favorite-actions">
            <button
              className="btn btn-icon favorite-btn active"
              data-bs-toggle="tooltip"
              title="Remove from favorites"
            >
              <i className="fas fa-star" />
            </button>
            <div className="dropdown">
              <button className="btn btn-icon" data-bs-toggle="dropdown">
                <i className="fas fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-comment me-2" /> Message
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-share-alt me-2" /> Share
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-tag me-2" /> Add to List
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-danger" href="#">
                    <i className="fas fa-times me-2" /> Remove
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="favorite-business-logo">
            <Image width={100} height={100}
              src="/images/business_logo3.png"
              alt="Creative Studios"
            />
          </div>
          <div className="favorite-business-info">
            <h5 className="favorite-business-name">Creative Studios</h5>
            <p className="favorite-business-category">
              Design &amp; Marketing
            </p>
            <p className="favorite-business-description">
              Full-service creative agency specializing in branding, digital
              marketing, and web design.
            </p>
            <div className="favorite-business-stats">
              <div>
                <i className="fas fa-map-marker-alt" /> Bristol, UK
              </div>
              <div>
                <i className="fas fa-users" /> 25-50 employees
              </div>
            </div>
            <div className="favorite-business-actions">
              <a
                href="business_detail.html"
                className="btn btn-sm btn-outline-custom"
              >
                View Profile
              </a>
              <a href="chat.html" className="btn btn-sm btn-primary-custom">
                Message
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Favorite Business Card */}
      <div className="col-md-6 col-xl-4 mb-4">
        <div className="favorite-business-card">
          <div className="favorite-actions">
            <button
              className="btn btn-icon favorite-btn active"
              data-bs-toggle="tooltip"
              title="Remove from favorites"
            >
              <i className="fas fa-star" />
            </button>
            <div className="dropdown">
              <button className="btn btn-icon" data-bs-toggle="dropdown">
                <i className="fas fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-comment me-2" /> Message
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-share-alt me-2" /> Share
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-tag me-2" /> Add to List
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-danger" href="#">
                    <i className="fas fa-times me-2" /> Remove
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="favorite-business-logo">
            <Image width={100} height={100}
              src="/images/business_logo4.png"
              alt="Digital Innovators"
            />
          </div>
          <div className="favorite-business-info">
            <h5 className="favorite-business-name">
              Digital Innovators
              <i className="fas fa-check-circle verified-badge" />
            </h5>
            <p className="favorite-business-category">
              Technology &amp; Innovation
            </p>
            <p className="favorite-business-description">
              Cutting-edge digital solutions and innovation consulting for
              forward-thinking businesses.
            </p>
            <div className="favorite-business-stats">
              <div>
                <i className="fas fa-map-marker-alt" /> Edinburgh, UK
              </div>
              <div>
                <i className="fas fa-users" /> 50-100 employees
              </div>
            </div>
            <div className="favorite-business-actions">
              <a
                href="business_detail.html"
                className="btn btn-sm btn-outline-custom"
              >
                View Profile
              </a>
              <a href="chat.html" className="btn btn-sm btn-primary-custom">
                Message
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Favorite Business Card */}
      <div className="col-md-6 col-xl-4 mb-4">
        <div className="favorite-business-card">
          <div className="favorite-actions">
            <button
              className="btn btn-icon favorite-btn active"
              data-bs-toggle="tooltip"
              title="Remove from favorites"
            >
              <i className="fas fa-star" />
            </button>
            <div className="dropdown">
              <button className="btn btn-icon" data-bs-toggle="dropdown">
                <i className="fas fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-comment me-2" /> Message
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-share-alt me-2" /> Share
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-tag me-2" /> Add to List
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-danger" href="#">
                    <i className="fas fa-times me-2" /> Remove
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="favorite-business-logo">
            <Image width={100} height={100}
              src="/images/business_logo5.png"
              alt="Green Solutions"
            />
          </div>
          <div className="favorite-business-info">
            <h5 className="favorite-business-name">Green Solutions</h5>
            <p className="favorite-business-category">
              Sustainability &amp; Environment
            </p>
            <p className="favorite-business-description">
              Sustainable business solutions and environmental consulting
              for eco-conscious organizations.
            </p>
            <div className="favorite-business-stats">
              <div>
                <i className="fas fa-map-marker-alt" /> Leeds, UK
              </div>
              <div>
                <i className="fas fa-users" /> 25-50 employees
              </div>
            </div>
            <div className="favorite-business-actions">
              <a
                href="business_detail.html"
                className="btn btn-sm btn-outline-custom"
              >
                View Profile
              </a>
              <a href="chat.html" className="btn btn-sm btn-primary-custom">
                Message
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Favorite Business Card */}
      <div className="col-md-6 col-xl-4 mb-4">
        <div className="favorite-business-card">
          <div className="favorite-actions">
            <button
              className="btn btn-icon favorite-btn active"
              data-bs-toggle="tooltip"
              title="Remove from favorites"
            >
              <i className="fas fa-star" />
            </button>
            <div className="dropdown">
              <button className="btn btn-icon" data-bs-toggle="dropdown">
                <i className="fas fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-comment me-2" /> Message
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-share-alt me-2" /> Share
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-tag me-2" /> Add to List
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-danger" href="#">
                    <i className="fas fa-times me-2" /> Remove
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="favorite-business-logo">
            <Image width={100} height={100}
              src="/images/business_logo6.png"
              alt="Financial Partners"
            />
          </div>
          <div className="favorite-business-info">
            <h5 className="favorite-business-name">
              Financial Partners
              <i className="fas fa-check-circle verified-badge" />
            </h5>
            <p className="favorite-business-category">
              Finance &amp; Consulting
            </p>
            <p className="favorite-business-description">
              Expert financial consulting and business advisory services for
              SMEs and growing enterprises.
            </p>
            <div className="favorite-business-stats">
              <div>
                <i className="fas fa-map-marker-alt" /> Birmingham, UK
              </div>
              <div>
                <i className="fas fa-users" /> 50-100 employees
              </div>
            </div>
            <div className="favorite-business-actions">
              <a
                href="business_detail.html"
                className="btn btn-sm btn-outline-custom"
              >
                View Profile
              </a>
              <a href="chat.html" className="btn btn-sm btn-primary-custom">
                Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Pagination */}
    <nav aria-label="Favorites pagination" className="mt-2">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a
            className="page-link"
            href="#"
            tabIndex={-1}
            aria-disabled="true"
          >
            <i className="fas fa-chevron-left" />
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            <i className="fas fa-chevron-right" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
      {/* Right Sidebar */}
      <div className="col-lg-3">
        {/* Lists Widget */}
        <div className="sidebar card mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="card-title mb-0">My Lists</h5>
              <button
                className="btn btn-sm btn-outline-custom"
                data-bs-toggle="modal"
                data-bs-target="#createListModal"
              >
                <i className="fas fa-plus me-1" /> New
              </button>
            </div>
            <div className="list-group list-group-flush">
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <div>
                  <i className="fas fa-star me-2 text-warning" />
                  All Favorites
                </div>
                <span className="badge bg-secondary rounded-pill">24</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <div>
                  <i className="fas fa-handshake me-2 text-primary" />
                  Potential Partners
                </div>
                <span className="badge bg-secondary rounded-pill">8</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <div>
                  <i className="fas fa-user-tie me-2 text-success" />
                  Suppliers
                </div>
                <span className="badge bg-secondary rounded-pill">12</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <div>
                  <i className="fas fa-building me-2 text-info" />
                  Local Businesses
                </div>
                <span className="badge bg-secondary rounded-pill">4</span>
              </a>
            </div>
          </div>
        </div>
        {/* Recent Activity */}
        <div className="sidebar card mb-4">
          <div className="card-body">
            <h5 className="card-title mb-3">Recent Activity</h5>
            <div className="activity-item">
              <div className="activity-icon bg-light-primary">
                <i className="fas fa-star" />
              </div>
              <div className="activity-content">
                <p className="mb-1">
                  You added <strong>Tech Solutions Ltd</strong> to favorites
                </p>
                <small className="text-muted">2 days ago</small>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon bg-light-success">
                <i className="fas fa-comment" />
              </div>
              <div className="activity-content">
                <p className="mb-1">
                  You messaged <strong>New West End Company</strong>
                </p>
                <small className="text-muted">3 days ago</small>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon bg-light-info">
                <i className="fas fa-tag" />
              </div>
              <div className="activity-content">
                <p className="mb-1">
                  You added <strong>Creative Studios</strong> to &#34;Potential
                  Partners&#34; list
                </p>
                <small className="text-muted">1 week ago</small>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon bg-light-warning">
                <i className="fas fa-star" />
              </div>
              <div className="activity-content">
                <p className="mb-1">
                  You added <strong>Green Solutions</strong> to favorites
                </p>
                <small className="text-muted">1 week ago</small>
              </div>
            </div>
          </div>
        </div>
        {/* Promotional Banner */}
        <div className="p-2">
          <Image width={100} height={100}
            src="/images/right_banner.png"
            alt="Promotional Banner"
            className="w-100"
            style={{ height: 220, objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  </div>
  {/* Create List Modal */}
  <div
    className="modal fade"
    id="createListModal"
    tabIndex={-1}
    aria-labelledby="createListModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="createListModalLabel">
            Create New List
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="listName" className="form-label">
                List Name
              </label>
              <input
                type="text"
                className="form-control"
                id="listName"
                placeholder="Enter list name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="listIcon" className="form-label">
                Icon
              </label>
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary icon-select active"
                >
                  <i className="fas fa-star" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary icon-select"
                >
                  <i className="fas fa-handshake" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary icon-select"
                >
                  <i className="fas fa-user-tie" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary icon-select"
                >
                  <i className="fas fa-building" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary icon-select"
                >
                  <i className="fas fa-briefcase" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary icon-select"
                >
                  <i className="fas fa-chart-line" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary icon-select"
                >
                  <i className="fas fa-lightbulb" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary icon-select"
                >
                  <i className="fas fa-globe" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary icon-select"
                >
                  <i className="fas fa-cog" />
                </button>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="listDescription" className="form-label">
                Description (Optional)
              </label>
              <textarea
                className="form-control"
                id="listDescription"
                rows={3}
                placeholder="Enter a description for this list"
                defaultValue={""}
              />
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="privateList"
              />
              <label className="form-check-label" htmlFor="privateList">
                Make this list private
              </label>
              <div className="form-text">
                Private lists are only visible to you
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" className="btn btn-primary-custom">
            Create List
          </button>
        </div>
      </div>
    </div>
  </div>
</>


    </div>
  )
}
