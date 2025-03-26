import React from 'react';
import Link from 'next/link';
import RegisterForm from '../components/Registerform';
export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-left">
          <div className="auth-content">
            <div className="text-center mb-4">
              <img src="/assets/images/logo.png" alt="B2BNet Logo" className="auth-logo" />
            </div>
            
            <h2 className="auth-title">Create Account</h2>
            <p className="auth-subtitle">Join the B2BNet business community</p>
            
            <RegisterForm />
            
            <div className="auth-footer">
              <p>Already have an account? <Link href="/login">Log in</Link></p>
            </div>
          </div>
        </div>
        
        <div className="auth-right">
          <div className="auth-image-container">
            <div className="auth-overlay"></div>
            <div className="auth-image-content">
              <h2>Expand Your Business Network</h2>
              <p>Connect with other businesses, discover opportunities, and grow your business with B2BNet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 