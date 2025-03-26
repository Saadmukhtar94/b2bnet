"use client"

import React, { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/lib/auth-context"

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [strengthText, setStrengthText] = useState("Too weak")
  const [strengthClass, setStrengthClass] = useState("bg-danger")
  const [showPassword, setShowPassword] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const router = useRouter()
  const searchParams = useSearchParams()
  const { register, user, loading } = useAuth()

  // Redirect if already logged in
  useEffect(() => {
    if (user && !loading) {
      // Check if there's a redirect parameter
      const redirectTo = searchParams.get("redirect")
      if (redirectTo) {
        router.replace(decodeURIComponent(redirectTo))
      } else {
        router.replace("/dashboard")
      }
    }
  }, [user, loading, router, searchParams])

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Update password strength if password field is changed
    if (name === "password") {
      calculatePasswordStrength(value)
    }

    // Check if confirm password matches
    if (name === "password_confirmation") {
      if (value !== formData.password) {
        e.target.setCustomValidity("Passwords do not match")
      } else {
        e.target.setCustomValidity("")
      }
    }
  }

  const calculatePasswordStrength = password => {
    let strength = 0

    if (password.length >= 8) strength += 25
    if (password.match(/[A-Z]/)) strength += 25
    if (password.match(/[0-9]/)) strength += 25
    if (password.match(/[^A-Za-z0-9]/)) strength += 25

    setPasswordStrength(strength)

    if (strength <= 25) {
      setStrengthText("Too weak")
      setStrengthClass("bg-danger")
    } else if (strength <= 50) {
      setStrengthText("Could be stronger")
      setStrengthClass("bg-warning")
    } else if (strength <= 75) {
      setStrengthText("Strong")
      setStrengthClass("bg-info")
    } else {
      setStrengthText("Very strong")
      setStrengthClass("bg-success")
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!termsAccepted) {
      setError("You must accept the Terms of Service and Privacy Policy")
      return
    }

    if (formData.password !== formData.password_confirmation) {
      setError("Passwords do not match")
      return
    }

    setError("")
    setIsLoading(true)

    try {
      // Ensure the API expects c_password instead of password_confirmation
      const apiFormData = {
        ...formData,
        c_password: formData.password_confirmation
      }

      await register(apiFormData)

      // Check if there's a redirect parameter
      const redirectTo = searchParams.get("redirect")
      if (redirectTo) {
        router.push(decodeURIComponent(redirectTo))
      } else {
        router.push("/dashboard")
      }
    } catch (err) {
      console.error("Registration error:", err)
      setError(
        err instanceof Error
          ? err.message
          : "Registration failed. Please try again."
      )
    } finally {
      setIsLoading(false)
    }
  }

  // Update password strength when password changes
  useEffect(() => {
    calculatePasswordStrength(formData.password)
  }, [formData.password])

  // Don't render the form if user is already logged in and being redirected
  if (user && !loading) {
    const redirectTo = searchParams.get("redirect")
    return (
      <div className="text-center p-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Redirecting...</span>
        </div>
        <p className="mt-2">
          You are already logged in. Redirecting
          {redirectTo ? " to requested page" : " to dashboard"}...
        </p>
      </div>
    )
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="row mb-3">
        <div className="col-md-6 mb-3 mb-md-0">
          <label htmlFor="first_name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="border form-control"
            id="first_name"
            name="first_name"
            placeholder="Enter first name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="last_name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="border form-control"
            id="last_name"
            name="last_name"
            placeholder="Enter last name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="fas fa-envelope"></i>
          </span>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
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
            <i className="fas fa-lock"></i>
          </span>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            className="border btn btn-outline-secondary toggle-password"
            type="button"
            onClick={togglePasswordVisibility}
          >
            <i
              className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </button>
        </div>
        <div className="password-strength mt-2">
          <div className="progress" style={{ height: "5px" }}>
            <div
              className={`progress-bar ${strengthClass}`}
              role="progressbar"
              style={{ width: `${passwordStrength}%` }}
              aria-valuenow={passwordStrength}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
          <small className="text-muted">
            Password strength: <span id="strength-text">{strengthText}</span>
          </small>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="password_confirmation" className="form-label">
          Confirm Password
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="fas fa-lock"></i>
          </span>
          <input
            type="password"
            className="form-control"
            id="password_confirmation"
            name="password_confirmation"
            placeholder="Confirm your password"
            value={formData.password_confirmation}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-4 form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="termsCheck"
          checked={termsAccepted}
          onChange={e => setTermsAccepted(e.target.checked)}
          required
        />
        <label className="form-check-label" htmlFor="termsCheck">
          I agree to the <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>
        </label>
      </div>

      <div className="d-grid gap-2 mb-4">
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </button>
      </div>

      <div className="auth-divider">
        <span>or sign up with</span>
      </div>

      <div className="social-login">
        <button type="button" className="btn btn-outline-secondary social-btn">
          <i className="fab fa-google"></i>
        </button>
        <button type="button" className="btn btn-outline-secondary social-btn">
          <i className="fab fa-facebook-f"></i>
        </button>
        <button type="button" className="btn btn-outline-secondary social-btn">
          <i className="fab fa-linkedin-in"></i>
        </button>
      </div>
    </form>
  )
}
