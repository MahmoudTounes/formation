import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ cartItemCount }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const goToCart = () => {
    navigate('/cart');
    setIsCartOpen(false);
  };

  const goToWishlist = () => {
    navigate('/wishlist'); // Assurez-vous d'avoir une route pour la liste de souhaits
    setIsCartOpen(false);
  };

  return (
    <header>
      
      {isCartOpen && (
        <div className="panier-drawer" style={{ top: '60px', right: '10px' }}>
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
              <Link to="/Formations">
                <button className="panier-vide-button">Voir la nouvelle collection</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;