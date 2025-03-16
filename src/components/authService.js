// authService.js

export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  export const setToken = (token) => {
    localStorage.setItem('token', token);
  };
  
  export const removeToken = () => {
    localStorage.removeItem('token');
  };
  
  export const isAuthenticated = () => {
    return !!getToken(); // Retourne true si un token est présent, sinon false
  };