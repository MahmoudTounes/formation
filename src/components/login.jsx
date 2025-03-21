import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './component/login.css'; // Importez votre fichier CSS

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
      const response = await axios.post('http://localhost:3007/auth/login', {
        email: loginData.email,
        password: loginData.password,
        accountType: loginData.accountType,
      });
      localStorage.setItem('token', response.data.access_token);
      navigate('/');
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
      <div className="login-image-container">
        <img src="/utilisateur.png" alt="Login" className="login-image" />
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <h2>Connexion</h2>
          <form onSubmit={handleLoginSubmit}>
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
            <select
              name="accountType"
              value={loginData.accountType}
              onChange={handleLoginChange}
              required
            >
              <option value="professeur">Professeur</option>
              <option value="eleve">Élève</option>
            </select>
            <button type="submit">Se connecter</button>
          </form>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <p>
            Vous n'avez pas de compte ? <Link to="/register">Créer un compte</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;