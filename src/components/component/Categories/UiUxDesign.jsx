import React, { useState, useEffect } from 'react';
import Interformation from '../Interformation';
import './UiUxDesign.css';
import { useLocation } from 'react-router-dom';


  const UiUxDesign = () => {
   console.log('UiUxDesign is rendering');
  const location = useLocation();
  const product = location.state?.product;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (product) {
      // Vérifier si le produit existe déjà dans le panier
      const existingItem = cartItems.find(item => item.id === 1); // Assuming only one product for now

      if (existingItem) {
        // Si le produit existe, incrémenter la quantité
        setCartItems(prevItems =>
          prevItems.map(item =>
            item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        // Si le produit n'existe pas, l'ajouter au panier
        setCartItems(prevItems => [
          ...prevItems,
          {
            id: 1, // Vous pouvez générer un ID unique ici si nécessaire
            image: product.image,
            title: `Course by ${product.teacher}`,
            price: parseFloat(product.price),
            quantity: 1,
          },
        ]);
      }
    }
  }, [product]); // Réagit aux changements de 'product'

  const handleQuantityChange = (itemId, newQuantity) => {
    const parsedQuantity = parseInt(newQuantity, 10);
    if (!isNaN(parsedQuantity) && parsedQuantity > 0) {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: parsedQuantity } : item
        )
      );
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: 1 } : item
        )
      );
    }
  };

  const handleApplyCoupon = () => {
    const couponInput = document.querySelector('.coupon-input input');
    if (couponInput) {
      const newQuantity = parseInt(couponInput.value, 10);
      if (!isNaN(newQuantity) && newQuantity > 0 && cartItems.length > 0) {
        setCartItems(cartItems.map(item => ({ ...item, quantity: newQuantity })));
      } else {
        alert('Veuillez saisir une quantité valide.');
      }
    }
  };

  const handleUpdateCart = () => {
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const stockDisponible = 10;
    if (totalQuantity <= stockDisponible) {
      alert('Stock disponible.');
    } else {
      alert('Stock insuffisant.');
    }
  };

  const handleProceedToPayment = () => {
    const confirmPayment = window.confirm('Confirmer le paiement ?');
    if (confirmPayment) {
      alert('Paiement validé.');
    } else {
      alert('Paiement annulé.');
    }
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="drawer-content">
      <Interformation />
      <div className="panier-container">
        <div className="panier-left">
          <h1 className="panier-title">Panier</h1>
          <p className="panier-item-count">{cartItems.length} cour{cartItems.length > 1 ? 's' : ''} dans le panier</p>
          <div className="cart-items">
            <div className="cart-header">
              <span>Image</span>
              <span>Titre</span>
              <span>Prix</span>
              <span>Quantité</span>
              <span>Total</span>
            </div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} style={{ width: '50px', height: 'auto' }} />
                <span>{item.title}</span>
                <span>${item.price.toFixed(2)}</span>
                <div className="quantity-input">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="quantity-field"
                  />
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panier-right">
          <div className="summary">
            <div className="total-quantity">
              <span>Nombre de livre{totalQuantity > 1 ? 's' : ''} :</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="total">
              <span>Total :</span>
              <span className="total-price">${totalPrice.toFixed(2)}</span>
            </div>
            <a href="/Payer" className="checkout-button">Payer →</a>
            <p className="no-debit-message">Vous ne serez pas encore débité</p>
          </div>

          <div className="promotions">
            <h3>Promotions</h3>
            <div className="coupon-input">
              <input type="text" placeholder="Saisissez le coupon" />
              <button className="apply-coupon-button" onClick={handleApplyCoupon}>Appliquer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UiUxDesign;