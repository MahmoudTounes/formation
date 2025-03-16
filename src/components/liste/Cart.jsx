import React from 'react';

function Cart({ cartItems }) { // Recevez cartItems en tant que props
  return (
    <div className="cart-page">
      <h1>Votre Panier</h1>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} {/* Remplacez par les propriétés de votre produit */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;