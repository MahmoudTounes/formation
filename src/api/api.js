import axios from 'axios';

// src/api/api.jsx
const baseURL = 'http://localhost:5000'; // Vérifiez que c'est correct

const api = axios.create({
  baseURL: baseURL,
});

// Intercepteur de requête pour ajouter le token aux requêtes si présent
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur de réponse pour gérer les erreurs d'authentification (par exemple, token expiré)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Gérer le cas où le token n'est pas valide ou a expiré
      // Par exemple, rediriger l'utilisateur vers la page de connexion et supprimer le token
      localStorage.removeItem('token');
      // window.location.href = '/login'; // Redirigez si nécessaire
    }
    return Promise.reject(error);
  }
);

export default api;