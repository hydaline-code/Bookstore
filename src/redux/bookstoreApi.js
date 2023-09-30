import axios from 'axios';

// Create an instance of axios with the base URL of your Bookstore API
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const api = axios.create({
  baseURL,
});

// Define your API endpoints
export const fetchBooks = (appId) => api.get(`/apps/${appId}/books`);
export const addBook = (appId, book) => api.post(`/apps/${appId}/books`, book);
export const removeBook = (appId, itemId) => api.delete(`/apps/${appId}/books/${itemId}`);
// Export the axios instance
export default api;