import React from 'react'
import Image from 'next/image'

export default function header() {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-light sticky-top" >
  <div className="container-fluid">
    <div className="navbar-brand me-2 me-md-4">
      <div className="app-logo">
        <Image
      src="/images/logo.png"
      width={28}
      height={28}
      alt="Picture of the author"
    />

      </div>
    </div>
    <div className="d-flex flex-grow-1 justify-content-center">
      <div className="input-group" style={{ maxWidth: 500 }}>
        <input
          type="text"
          className="form-control rounded-start-pill"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-secondary rounded-end-pill"
          type="button"
        >
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
    <div className="d-flex justify-content-end">
      <div className="mx-3 mx-sm-2 text-center">
        <div className="nav-icon">
          <i className="fas fa-network-wired" />
        </div>
        <div className="nav-text d-none d-sm-block">Networking</div>
      </div>
      <div className="mx-3 mx-sm-2 text-center">
        <div className="nav-icon">
          <i className="fas fa-comment" />
        </div>
        <div className="nav-text d-none d-sm-block">Message</div>
      </div>
      <div className="mx-3 mx-sm-2 text-center">
        <div className="nav-icon">
          <i className="fas fa-folder" />
        </div>
        <div className="nav-text d-none d-sm-block">Directory</div>
      </div>
      <div className="mx-3 mx-sm-2 text-center">
        <div className="nav-icon">
          <i className="fas fa-bell" />
        </div>
        <div className="nav-text d-none d-sm-block">Notification</div>
      </div>
      {/* Profile Dropdown */}
      <div className="mx-3 mx-sm-2 text-center dropdown">
        <div
          className="dropdown-toggle"
          id="profileDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="nav-icon profile-icon">
            {/* <img
              src="assets/images/dp.png"
              alt="Profile"
              className="nav-profile-img"
            /> */}
             <Image
      src="/images/dp.png"
      width={28}
      height={28}
      alt="Profile"
      className='nav-profile-img'
    />

          </div>
          <div className="nav-text d-none d-sm-block">Me</div>
        </div>
        <ul
          className="dropdown-menu dropdown-menu-end profile-dropdown"
          aria-labelledby="profileDropdown"
        >
          <li>
            <div className="px-3 py-2">
              <div className="d-flex align-items-center">
                {/* <img
                  src="assets/images/dp.png"
                  alt="Profile"
                  className="dropdown-profile-img me-2"
                /> */}
                 <Image
      src="/images/dp.png"
      width={28}
      height={28}
      alt="Profile"
      className='dropdown-profile-img me-2'
    />
                <div>
                  <div className="fw-medium">Shams Aujara</div>
                  <div className="text-muted small">View Profile</div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <h6 className="dropdown-header">Account</h6>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="fas fa-cog me-2 text-muted" /> Settings &amp;
              Privacy
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="fas fa-question-circle me-2 text-muted" /> Help
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="fas fa-moon me-2 text-muted" /> Display
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="fas fa-sign-out-alt me-2 text-muted" /> Sign Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}
