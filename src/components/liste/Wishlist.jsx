import React from 'react';
 import './Cart.css' ;// Import your CSS file

const Wishlist = () => {
  return (
    <div className="panier-vide-containersd">
      <div className="panier-vide-contentsd">
        <img className="panier-vide-imagesd" src="/mon.png" alt="Panier vide" /> {/* Replace with your image path */}
        <h1 className="panier-vide-titlesd">Votre panier d'achat est vide</h1>
        <p className="panier-vide-messagesd">
          Vérifiez si vos favoris se trouvent bien dans votre panier ou ajoutez des
          articles de la nouvelle collection.
        </p>
        <button className="panier-vide-buttonsd">Voir la nouvelle collection</button>
      </div>
    </div>
  );
};

export default Wishlist;