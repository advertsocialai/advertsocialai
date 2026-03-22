// Centralized API configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://bohrx.ai/backendadmin";

export const API_ENDPOINTS = {
  // Auth
  LOGIN: `${API_BASE_URL}/api/login`,

  // Blog
  GET_ALL_BLOGS: `${API_BASE_URL}/api/alblogs/getall`,
  GET_BLOG: (id) => `${API_BASE_URL}/api/getblogs/${id}`,
  CREATE_BLOG: `${API_BASE_URL}/api/blogs`,
  UPDATE_BLOG: (id) => `${API_BASE_URL}/api/updateblogs/${id}`,
  DELETE_BLOG: (id) => `${API_BASE_URL}/api/deleteblogs/${id}`,

  // Contacts
  ADD_CONTACT: `${API_BASE_URL}/api/contacts/add`,
  GET_ALL_CONTACTS: `${API_BASE_URL}/api/contacts/getall`,

  // FAQs
  GET_ALL_FAQS: `${API_BASE_URL}/api/faqs`,
  CREATE_FAQ: `${API_BASE_URL}/api/faqs`,
  UPDATE_FAQ: (id) => `${API_BASE_URL}/api/faqs/${id}`,
  DELETE_FAQ: (id) => `${API_BASE_URL}/api/faqs/${id}`,

  // Services / Pages
  GET_ALL_SERVICES: `${API_BASE_URL}/api/Services/Getall`,
  GET_SERVICE: (id) => `${API_BASE_URL}/api/Services/view/${id}`,
  CREATE_SERVICE: `${API_BASE_URL}/api/Services/Addservice`,
  UPDATE_SERVICE: (id) => `${API_BASE_URL}/api/Services/update/${id}`,
  DELETE_SERVICE: (id) => `${API_BASE_URL}/api/Services/delete/${id}`,

  // Jobs
  GET_ALL_JOBS: `${API_BASE_URL}/api/jobs/getall`,
  GET_JOB: (id) => `${API_BASE_URL}/api/jobs/view/${id}`,
  CREATE_JOB: `${API_BASE_URL}/api/jobpost`,

  // Newsletter / Subscribers
  GET_SUBSCRIBERS: `${API_BASE_URL}/api/subscribers`,
  SUBSCRIBE: `${API_BASE_URL}/api/subscribe`,
  UNSUBSCRIBE: `${API_BASE_URL}/api/unsubscribe`,
  SEND_NEWSLETTER: `${API_BASE_URL}/api/send-newsletter`,

  // Registered Users
  GET_REGISTERED_USERS: `${API_BASE_URL}/api/registered-users`,
};

export const BLOG_IMAGE_BASE_URL = `${API_BASE_URL}/public/Blog/`;
