import React from 'react';
import './Interformation.css'; // Import the CSS file

function interformation() {
  return (
    <div className="udemy-navbar">
      <div className="udemy-logo">
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" />
      </div>
      <div className="navbar-links">
        <button className="dropdown-button">Découvrir</button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Que souhaitez-vous apprendre ?" />
        <button className="search-icon">
          <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d="M21.71 20.29L18 16.6A9 9 0 1016.6 18l3.7 3.71a1 1 0 101.42-1.42zM10 16a6 6 0 110-12 6 6 0 010 12z"></path>
          </svg>
        </button>
      </div>
      <div className="navbar-actions">
        <a href="#" className="navbar-link">Certificate</a>
        <button className="cart-button">
          <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d="M9 20a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2zM2 2h2l2 16h16l-1 2H4a1 1 0 01-1-1H2V2zm3 4h14v10H5V6z"></path>
          </svg>
        </button>
        <button className="login-button">Se connecter</button>
        <button className="signup-button">S'inscrire</button>
        <button className="language-button">
          <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d="M12.87 15.07l-2.54-2.53c1.74-1.74 2.98-4.17 3.71-6.8H17V4h-2.5v1.79h-.02C13.49 6.19 11.52 8.22 9.16 9.75L6.43 7.02a8 8 0 10-2.12 2.12L9.16 9.75c.47.6.98 1.15 1.54 1.67l2.54 2.53zM12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm-1-8v2h2v-2h-2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default interformation;