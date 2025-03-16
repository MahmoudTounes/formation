import React from 'react';
import './PanierVide.css';
import panierImage from './images/images(1).jpg'; // Importation de l'image

function MonPanier({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="panier-vide-container panier-drawer">
      <div className="panier-vide-content">
        <button className="close-button" onClick={onClose}>Fermer</button>
        <img
          className="panier-vide-image"
          src={panierImage} // Utilisation de l'image importée
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
  );
}

export default MonPanier;