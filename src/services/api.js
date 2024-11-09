// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors for request or response

// Request Interceptor
api.interceptors.request.use(
  config => {
    // Modify config if needed (e.g., add auth tokens)
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  response => response,
  error => {
    // Handle global errors
    return Promise.reject(error);
  }
);

export default api;
