"use client";
import React, { useEffect } from "react";
import Script from "next/script";

export default function Page() {
  useEffect(() => {
    // Toggle password visibility
    const togglePassword = document.querySelector(".toggle-password");
    const passwordField = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirmPassword");
    const strengthBar = document.querySelector(".progress-bar");
    const strengthText = document.getElementById("strength-text");

    if (togglePassword && passwordField) {
      togglePassword.addEventListener("click", function () {
        const type = passwordField.type === "password" ? "text" : "password";
        passwordField.type = type;
        this.querySelector("i").classList.toggle("fa-eye");
        this.querySelector("i").classList.toggle("fa-eye-slash");
      });
    }

    // Password strength meter
    if (passwordField && strengthBar && strengthText) {
      passwordField.addEventListener("input", function () {
        const password = this.value;
        let strength = 0;

        if (password.length >= 8) strength += 25;
        if (/[A-Z]/.test(password)) strength += 25;
        if (/[0-9]/.test(password)) strength += 25;
        if (/[^A-Za-z0-9]/.test(password)) strength += 25;

        strengthBar.style.width = strength + "%";

        if (strength <= 25) {
          strengthBar.className = "progress-bar bg-danger";
          strengthText.textContent = "Too weak";
        } else if (strength <= 50) {
          strengthBar.className = "progress-bar bg-warning";
          strengthText.textContent = "Could be stronger";
        } else if (strength <= 75) {
          strengthBar.className = "progress-bar bg-info";
          strengthText.textContent = "Strong";
        } else {
          strengthBar.className = "progress-bar bg-success";
          strengthText.textContent = "Very strong";
        }
      });
    }

    // Confirm password validation
    if (confirmPassword && passwordField) {
      confirmPassword.addEventListener("input", function () {
        if (this.value !== passwordField.value) {
          this.setCustomValidity("Passwords do not match");
        } else {
          this.setCustomValidity("");
        }
      });
    }
  }, []);

  return (
    <div>
        <div className="auth-container">
  <div className="auth-wrapper">
    <div className="auth-left">
      <div className="auth-content">
        <div className="text-center mb-4">
          <img
            src=" /images/logo.png"
            alt="B2BNet Logo"
            className="auth-logo"
          />
        </div>
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Join the B2BNet business community</p>
        <form className="auth-form">
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="border form-control"
                id="firstName"
                placeholder="Enter first name"
                required=""
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="border form-control"
                id="lastName"
                placeholder="Enter last name"
                required=""
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-envelope" />
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required=""
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-lock" />
              </span>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Create a password"
                required=""
              />
              <button
                className="border btn btn-outline-secondary toggle-password"
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
                Password strength: <span id="strength-text">Too weak</span>
              </small>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-lock" />
              </span>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your password"
                required=""
              />
            </div>
          </div>
          <div className="mb-4 form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="termsCheck"
              required=""
            />
            <label className="form-check-label" htmlFor="termsCheck">
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>
          <div className="d-grid gap-2 mb-4">
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </div>
          <div className="auth-divider">
            <span>or sign up with</span>
          </div>
          <div className="social-login">
            <button
              type="button"
              className="btn btn-outline-secondary social-btn"
            >
              <i className="fab fa-google" />
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary social-btn"
            >
              <i className="fab fa-facebook-f" />
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary social-btn"
            >
              <i className="fab fa-linkedin-in" />
            </button>
          </div>
        </form>
        <div className="auth-footer">
          <p>
            Already have an account? <a href="login.html">Log in</a>
          </p>
        </div>
      </div>
    </div>
    <div className="auth-right">
      <div className="auth-image-container">
        <div className="auth-overlay" />
        <div className="auth-image-content">
          <h2>Expand Your Business Network</h2>
          <p>
            Connect with other businesses, discover opportunities, and grow your
            business with B2BNet.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<Script strategy="afterInteractive">
  {`  document.addEventListener('DOMContentLoaded', function() {
            // Toggle password visibility
            const togglePassword = document.querySelector('.toggle-password');
            const passwordField = document.querySelector('#password');
            
            togglePassword.addEventListener('click', function() {
                const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordField.setAttribute('type', type);
                this.querySelector('i').classList.toggle('fa-eye');
                this.querySelector('i').classList.toggle('fa-eye-slash');
            });
            
            // Password strength meter
            const strengthBar = document.querySelector('.progress-bar');
            const strengthText = document.getElementById('strength-text');
            
            passwordField.addEventListener('input', function() {
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
            
            // Confirm password validation
            const confirmPassword = document.getElementById('confirmPassword');
            
            confirmPassword.addEventListener('input', function() {
                if (this.value !== passwordField.value) {
                    this.setCustomValidity('Passwords do not match');
                } else {
                    this.setCustomValidity('');
                }
            });
        });`}
</Script>
    </div>
  )
}
