import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSearch, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart');
  };

  const goToWishlist = () => {
    navigate('/wishlist');
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>
          <div className='social'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className='icon' />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='icon' />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className='icon' />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className='icon' />
            </a>
          </div>
        </div>
      </section>

      <header className="header">
        <div className="top-bar">
          <div className="container">
            <div className="menu">
              <span onClick={toggleMenu} className="menu-icon">
                <FontAwesomeIcon icon={faBars} />
                <span>menu</span>
              </span>
            </div>
            <div className="logo">
              <img src="/logo.png" alt="Image de succès" />
            </div>
            <div className="user-actions">
              <div className="connect">
                <Link to="/connecter">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Seconnecter</span>
                </Link>
              </div>
              <div className="search">
                <span onClick={toggleSearch} className="search-icon">
                  <FontAwesomeIcon icon={faSearch} />
                  <span>recherche</span>
                </span>
                {isSearchOpen && (
                  <input type="text" placeholder="Rechercher..." className="search-input" />
                )}
              </div>
              <div className="cart">
                <span onClick={toggleCart}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span>mon panier</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="drawer">
            <div className="drawer-header">
              <span className="menu-text">Menu</span>
              <span className="logo-text">MYDEV</span>
            </div>
            <nav>
              <ul>
                <li><Link to="/accueil">accueil</Link></li>
                <li><Link to="/formations">formations</Link></li>
                <li><Link to="/cours">cours</Link></li>
              </ul>
            </nav>
          </div>
        )}

        {isSearchOpen && (
          <div className="search-drawer">
            <div className="search-drawer-header">
              <input type="text" placeholder="Rechercher..." className="search-input" />
              <button className="close-button" onClick={toggleSearch}>Fermer</button>
            </div>
          </div>
        )}

        {isCartOpen && (
          <div className="panier-drawer" style={{ top: '50px', right: '10px' }}>
            <div className="panier-vide-container">
              <div className="panier-vide-contenu">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span onClick={goToCart} style={{ cursor: 'pointer' }}>
                    <span>Panier</span>
                  </span>
                  <span onClick={goToWishlist} style={{ cursor: 'pointer' }}>
                    <span>liste.souhaits</span>
                  </span>
                </div>
                <button className="close-button" onClick={toggleCart}>Fermer</button>
                <img
                  className="panier-vide-image"
                  src='./mon.png'
                  alt="Panier vide"
                />
                <h1 className="panier-vide-title">Votre panier d'achat est vide</h1>
                <p className="panier-vide-message">
                  Vérifiez si vos favoris se trouvent bien dans votre panier ou ajoutez des
                  articles de la nouvelle collection.
                </p>
                <button className="panier-vide-button">Voir la nouvelle collection</button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;