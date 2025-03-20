import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { setToken } from './authService';
import './component/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorModalIsOpen(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3008/auth/login', { // Corrected URL
        email,
        password,
      });
      setToken(response.data.access_token);
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        if (error.response.data.message === 'Invalid credentials') { // Adjusted error message check
          setModalIsOpen(true);
        } else {
          setErrorModalIsOpen(true);
        }
      } else {
        setErrorModalIsOpen(true);
      }
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const closeErrorModal = () => {
    setErrorModalIsOpen(false);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src='./utilisateur.png' alt="User Icon" className="user-icon" />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>

      {modalIsOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Connexion échouée </h2>
            <p>Invalid credentials. Please check your email and password.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {errorModalIsOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Connexion échouée </h2>
            <p>Veuillez vérifier vos identifiants.</p>
            <button onClick={closeErrorModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;