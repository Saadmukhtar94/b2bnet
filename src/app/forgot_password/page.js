import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ForgotPasswordForm from '../components/ForgotPasswordFord';
export default function ForgotPassword() {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-left">
          <div className="auth-content">
            <div className="text-center mb-4">
              <Image src="/images/logo.png" alt="B2BNet Logo" width={40}
              height={40} className="auth-logo" />
            </div>
            
            <h2 className="auth-title">Forgot Password?</h2>
            <p className="auth-subtitle">Enter your email to reset your password</p>
            
            <ForgotPasswordForm />
            
            <div className="auth-footer">
              <p>Remember your password? <Link href="/login">Log in</Link></p>
            </div>
          </div>
        </div>
        
        <div className="auth-right">
          <div className="auth-image-container">
            <div className="auth-overlay"></div>
            <div className="auth-image-content">
              <h2>Password Recovery</h2>
              <p>Don't worry, we've got you covered. Follow the simple steps to reset your password and regain access to your account.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}