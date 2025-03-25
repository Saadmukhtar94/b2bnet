// API base URL
const API_BASE_URL = "https://b2bnet.free.beeceptor.com"

// Default headers for API requests
const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
}

// Helper function to handle API responses
const handleResponse = async response => {
  const data = await response.json()

  if (!response.ok) {
    // If the server responded with an error, throw it
    const error = data.message || response.statusText
    throw new Error(error)
  }

  return data
}

// Authentication API calls
export const authAPI = {
  // Login user
  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify({ email, password })
    })

    return handleResponse(response)
  },

  // Register user
  register: async userData => {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(userData)
    })

    return handleResponse(response)
  },

  // Forgot password
  forgotPassword: async email => {
    const response = await fetch(`${API_BASE_URL}/forgot-password`, {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify({ email })
    })

    return handleResponse(response)
  },

  // Reset password
  resetPassword: async (token, email, password, password_confirmation) => {
    const response = await fetch(`${API_BASE_URL}/reset-password`, {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify({
        token,
        email,
        password,
        password_confirmation
      })
    })

    return handleResponse(response)
  },

  // Logout user
  logout: async token => {
    const response = await fetch(`${API_BASE_URL}/logout`, {
      method: "POST",
      headers: {
        ...defaultHeaders,
        Authorization: `Bearer ${token}`
      }
    })

    return handleResponse(response)
  }
}

