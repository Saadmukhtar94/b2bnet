import React from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
export const metadata = {
  title: "B2BNet - Forgot Password",
  description: "B2BNet - Business Networking Platform",
  icons: {
    icon: "/images/logo.png",
  },
};
export default function page() {
  return (
    <div>
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-left">
            <div className="auth-content">
              <div className="text-center mb-4">
                <Image
                  width={40}
                  height={40}
                  src="/images/logo.png"
                  alt="B2BNet Logo"
                  className="auth-logo"
                />
              </div>
              <h2 className="auth-title">Forgot Password?</h2>
              <p className="auth-subtitle">
                Enter your email to reset your password
              </p>
              {/* Initial Form (Email Entry) */}
              <form className="auth-form" id="forgotPasswordForm">
                <div className="mb-4">
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
                  <small className="form-text text-muted mt-2">
                    We&apos;ll send a password reset link to this email address.
                  </small>
                </div>
                <div className="d-grid gap-2 mb-4">
                  <button type="submit" className="btn btn-primary">
                    Reset Password
                  </button>
                </div>
              </form>
              {/* Success Message (Initially Hidden) */}
              <div className="text-center d-none" id="successMessage">
                <div className="mb-4">
                  <i
                    className="fas fa-envelope-open-text text-success"
                    style={{ fontSize: 60 }}
                  />
                </div>
                <h4>Check Your Email</h4>
                <p className="text-muted mb-4">
                  We&apos;ve sent a password reset link to your email address. Please
                  check your inbox and follow the instructions.
                </p>
                <p className="text-muted small">
                  Didn&apos;t receive the email? Check your spam folder or{" "}
                  {/* <a href="#" id="resendLink">
              click here to resend
            </a> */}
                  <Link href="/resend" id="resendLink">
                    Click here to resend
                  </Link>
                  .
                </p>
              </div>
              <div className="auth-footer">
                <p>
                  Remember your password? <Link href="/login">Log in</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="auth-right">
            <div className="auth-image-container">
              <div className="auth-overlay" />
              <div className="auth-image-content">
                <h2>Password Recovery</h2>
                <p>
                  Don&apos;t worry, we&apos;ve got you covered. Follow the simple steps to
                  reset your password and regain access to your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script id="forgot-password-script">
        {`  document.addEventListener('DOMContentLoaded', function() {
            const forgotPasswordForm = document.getElementById('forgotPasswordForm');
            const successMessage = document.getElementById('successMessage');
            const resendLink = document.getElementById('resendLink');
            
            // Handle form submission
            forgotPasswordForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simulate API call with a timeout
                const submitButton = this.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...';
                
                setTimeout(function() {
                    // Hide form and show success message
                    forgotPasswordForm.style.display = 'none';
                    successMessage.classList.remove('d-none');
                }, 1500);
            });
            
            // Handle resend link
            resendLink.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Show temporary message
                this.textContent = 'Sending...';
                
                setTimeout(() => {
                    this.textContent = 'Email sent!';
                    
                    setTimeout(() => {
                        this.textContent = 'click here to resend';
                    }, 3000);
                }, 1500);
            });
        });`}
      </Script>
    </div>
  );
}
