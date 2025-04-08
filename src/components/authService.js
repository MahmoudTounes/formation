// Fonction pour stocker le token dans le localStorage
export const setToken = (token) => {
  localStorage.setItem('token', token);
};

// Fonction pour récupérer le token du localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};

// Fonction pour supprimer le token du localStorage
export const removeToken = () => {
  localStorage.removeItem('token');
};

// Fonction pour vérifier si l'utilisateur est authentifié (présence du token)
export const isAuthenticated = () => {
  return !!getToken(); // Retourne true si un token existe, false sinon
};