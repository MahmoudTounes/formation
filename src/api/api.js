// api.js
import axios from 'axios';
import { getToken } from '../components/authService'; // Importez getToken

const api = axios.create({
  baseURL: 'http://localhost:3007/api', // Votre URL de base
});

// Intercepteur pour ajouter le token JWT aux requêtes
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;