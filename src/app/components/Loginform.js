import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
 import { useAuth } from '@/lib/auth-context';

export default function Loginform() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();
  const searchParams = useSearchParams();

  
  // const user = {
  //   email: "saadmukhtar584@gmail.com",
  //   password: "123456",
  // };

  const { login, user, loading } = useAuth(); 

  // Redirect if already logged in
  useEffect(() => {
    if (user /* && !loading */) {
      const redirectTo = searchParams.get('redirect');
      router.replace(redirectTo ? decodeURIComponent(redirectTo) : '/dashboard');
    }
  }, [user,  loading,  router, searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await login(email, password);
      // Auth context will handle storing the user data
      
      // Check if there's a redirect parameter
      const redirectTo = searchParams.get('redirect');
      if (redirectTo) {
          router.push(decodeURIComponent(redirectTo));
      } else {
          router.push('/dashboard');
      }
  } catch (err) {
      console.error('Login error:', err);
      setError(err instanceof Error ? err.message : 'Login failed. Please check your credentials.');
  } finally {
      setIsLoading(false);
  }
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
 <form className="auth-form" onSubmit={handleSubmit}>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
            onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="border btn btn-outline-secondary toggle-password"
                    onClick={togglePasswordVisibility}>
                    <i
                      className={`fas ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      }`}></i>
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <Link href="/forgot_password" className="forgot-password">
                  Forgot password?
                </Link>
              </div>
              <div className="d-grid gap-2 mb-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                  >
                  {isLoading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"></span>
                      Logging in...
                    </>
                  ) : (
                    "Log In"
                  )}
                  
                </button>
              </div>
              <div className="auth-divider">
                <span>or continue with</span>
              </div>
              <div className="social-login">
                <button
                  type="button"
                  className="btn btn-outline-secondary social-btn">
                  <i className="fab fa-google" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary social-btn">
                  <i className="fab fa-facebook-f" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary social-btn">
                  <i className="fab fa-linkedin-in" />
                </button>
              </div>
            </form>

  )
 }
