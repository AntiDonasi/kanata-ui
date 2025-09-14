/**
 * API service for fetching data from the backend
 */

// Base URL for API requests
const API_BASE_URL = '/api';

/**
 * Generic function to fetch data from the API
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise<any>} - Promise with the response data
 */
async function fetchAPI(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * Team API functions
 */
export const teamAPI = {
  /**
   * Get all team members
   * @returns {Promise<Array>} - Promise with team members data
   */
  getAll: async () => {
    const response = await fetchAPI('/team');
    return response.data;
  },

  /**
   * Get team member by ID
   * @param {string} id - Team member ID
   * @returns {Promise<Object>} - Promise with team member data
   */
  getById: async (id) => {
    const response = await fetchAPI(`/team/${id}`);
    return response.data;
  },
};

/**
 * Features API functions
 */
export const featuresAPI = {
  /**
   * Get all features
   * @returns {Promise<Array>} - Promise with features data
   */
  getAll: async () => {
    const response = await fetchAPI('/features');
    return response.data;
  },

  /**
   * Get feature by ID
   * @param {string} id - Feature ID
   * @returns {Promise<Object>} - Promise with feature data
   */
  getById: async (id) => {
    const response = await fetchAPI(`/features/${id}`);
    return response.data;
  },
};

/**
 * Contact API functions
 */
export const contactAPI = {
  /**
   * Submit contact form
   * @param {Object} formData - Contact form data
   * @returns {Promise<Object>} - Promise with submission result
   */
  submitForm: async (formData) => {
    const response = await fetchAPI('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    return response;
  },
};