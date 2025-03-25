"use client"
import React, { createContext, useContext, useState, useEffect } from "react"
import Cookies from "js-cookie"
import { authAPI } from "./api"

// Create the auth context
const AuthContext = createContext(undefined)

// Auth provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Check for saved user on initial load
  useEffect(() => {
    const token = Cookies.get("auth_token")
    const savedUser = localStorage.getItem("user")

    if (token && savedUser) {
      try {
        const userData = JSON.parse(savedUser)
        // If only token is stored, clear and force re-login
        if (!userData.id && userData.token) {
          Cookies.remove("auth_token")
          localStorage.removeItem("user")
        } else {
          setUser(userData)
        }
      } catch (err) {
        // If there's an error parsing the user data, clear everything
        Cookies.remove("auth_token")
        localStorage.removeItem("user")
      }
    }
    setLoading(false)
  }, [])

  // Login function
  const login = async (email, password) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authAPI.login(email, password)
      console.log("Login response:", response)

      // Create a complete user object with all user data and token
      const userData = {
        id: response.data.user.id,
        first_name: response.data.user.first_name,
        last_name: response.data.user.last_name,
        email: response.data.user.email,
        token: response.token,
        username: response.data.user.username,
        avatar: response.data.user.avatar,
        cover: response.data.user.cover,
        bio: response.data.user.bio,
        created_at: response.data.user.created_at,
        last_seen: response.data.user.last_seen
      }

      // Set cookie and localStorage
      Cookies.set("auth_token", response.token, {
        expires: 7,
        secure: true,
        sameSite: "strict"
      })
      localStorage.setItem("user", JSON.stringify(userData))

      setUser(userData)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred during login"
      )
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Register function
  const register = async userData => {
    setLoading(true)
    setError(null)
    try {
      const response = await authAPI.register(userData)
      console.log("Register response:", response)

      // Create a complete user object
      const newUser = {
        id: response.user.id,
        first_name: response.user.first_name,
        last_name: response.user.last_name,
        email: response.user.email,
        token: response.token,
        username: response.user.username,
        avatar: response.user.avatar,
        cover: response.user.cover,
        bio: response.user.bio,
        created_at: response.user.created_at,
        last_seen: response.user.last_seen
      }

      // Set cookie and localStorage
      Cookies.set("auth_token", response.token, {
        expires: 7,
        secure: true,
        sameSite: "strict"
      })
      localStorage.setItem("user", JSON.stringify(newUser))

      setUser(newUser)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred during registration"
      )
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Logout function
  const logout = async () => {
    setLoading(true)
    try {
      if (user?.token) {
        await authAPI.logout(user.token)
      }
    } catch (err) {
      console.error("Logout error:", err)
    } finally {
      // Clear cookie and localStorage
      Cookies.remove("auth_token")
      localStorage.removeItem("user")

      setUser(null)
      setLoading(false)
    }
  }

  // Clear error function
  const clearError = () => {
    setError(null)
  }

  // Create the context value
  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    clearError
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
