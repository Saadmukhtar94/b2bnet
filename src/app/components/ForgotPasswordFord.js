'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { authAPI } from '@/lib/api';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [resendStatus, setResendStatus] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await authAPI.forgotPassword(email);
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async (e) => {
    e.preventDefault();
    
    if (resendStatus) return;
    
    setResendStatus('Sending...');
    
    try {
      await authAPI.forgotPassword(email);
      setResendStatus('Email sent!');
      
      setTimeout(() => {
        setResendStatus('');
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to resend email. Please try again.');
      setResendStatus('');
    }
  };

  return (
    <>
      {!isSubmitted ? (
        <form className="auth-form" id="forgotPasswordForm" onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-envelope"></i></span>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <small className="form-text text-muted mt-2">We&apos;ll send a password reset link to this email address.</small>
          </div>
          
          <div className="d-grid gap-2 mb-4">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Sending...
                </>
              ) : 'Reset Password'}
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center" id="successMessage">
          <div className="mb-4">
            <i className="fas fa-envelope-open-text text-success" style={{ fontSize: '60px' }}></i>
          </div>
          <h4>Check Your Email</h4>
          <p className="text-muted mb-4">We&apos;ve sent a password reset link to your email address. Please check your inbox and follow the instructions.</p>
          
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          
          <p className="text-muted small">
            Didn&apos;t receive the email? Check your spam folder or{' '}
            <a 
              href="#" 
              id="resendLink" 
              onClick={handleResend}
            >
              {resendStatus || 'click here to resend'}
            </a>.
          </p>
        </div>
      )}
    </>
  );
}