import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './component/Login.css'; // Assurez-vous d'avoir un fichier CSS pour la mise en page

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    accountType: 'professeur',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:5000/auth/login', loginData);
      localStorage.setItem('token', response.data.access_token); // Stocker le token JWT si l'authentification réussit
      navigate('/'); // Rediriger vers la page d'accueil après la connexion
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setErrorMessage(err.response.data.message);
      } else {
        setErrorMessage('Erreur de connexion.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Connexion</h2>
        <form onSubmit={handleLoginSubmit}>
          <select
            name="accountType"
            value={loginData.accountType}
            onChange={handleLoginChange}
            required
          >
            <option value="professeur">Professeur</option>
            <option value="eleve">Élève</option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleLoginChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
          <button type="submit">Se connecter</button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <p>
          Vous n'avez pas de compte ? <Link to="/register">Créer un compte</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;