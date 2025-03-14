
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// export const metadata = {
//   title: "B2BNet - Login",
//   description: "B2BNet - Business Networking Platform",
//   icons: {
//     icon: "/images/logo.png",
//   },
// };

export default function Page() {
  useEffect(() => {
    const togglePassword = document.querySelector('.toggle-password');
    const passwordField = document.querySelector('#password');

    if (togglePassword && passwordField) {
      togglePassword.addEventListener('click', function () {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
      });
    }
  }, []);

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-left">
          <div className="auth-content">
            <div className="text-center mb-4">
              <Image width={40} height={40} src="/images/logo.png" alt="B2BNet Logo" className="auth-logo" />
            </div>
            <h2 className="auth-title">Welcome Back</h2>
            <p className="auth-subtitle">Log in to your B2BNet account</p>
            <form className="auth-form">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-envelope" />
                  </span>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-lock" />
                  </span>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                  <button type="button" className="border btn btn-outline-secondary toggle-password">
                    <i className="fas fa-eye" />
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <Link href="/forgot_password" className="forgot-password">Forgot password?</Link>
              </div>
              <div className="d-grid gap-2 mb-4">
                <button type="submit" className="btn btn-primary">Log In</button>
              </div>
              <div className="auth-divider"><span>or continue with</span></div>
              <div className="social-login">
                <button type="button" className="btn btn-outline-secondary social-btn">
                  <i className="fab fa-google" />
                </button>
                <button type="button" className="btn btn-outline-secondary social-btn">
                  <i className="fab fa-facebook-f" />
                </button>
                <button type="button" className="btn btn-outline-secondary social-btn">
                  <i className="fab fa-linkedin-in" />
                </button>
              </div>
            </form>
            <div className="auth-footer">
              <p>Don&apos;t have an account? <Link href="/register" className="signup-link">Sign up</Link></p>
            </div>
          </div>
        </div>
        <div className="auth-right">
          <div className="auth-image-container">
            <div className="auth-overlay" />
            <div className="auth-image-content">
              <h2>Connect. Collaborate. Grow.</h2>
              <p>Join thousands of businesses networking and growing together on B2BNet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
