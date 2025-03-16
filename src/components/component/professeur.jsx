import React from 'react';
import { Link } from 'react-router-dom';

function Professeur() {
  return (
    <div className="auth-container">
      <div className="login-form">
        <div className="avatar">
          <img src="utilisateur.png" alt="Avatar" />
        </div>
        <h2>Connexion</h2>
        <Link to="/login">Connexion</Link>
        <p>Pas de compte? <Link to="/register">S'inscrire</Link></p>
      </div>
    </div>
  );
}

export default Professeur;