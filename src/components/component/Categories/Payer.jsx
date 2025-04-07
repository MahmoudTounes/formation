import React, { useState, useEffect } from 'react';
import './Payer.css'; // Votre fichier CSS personnalisé
import { useLocation } from 'react-router-dom';

const Payer = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const [total, setTotal] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    // Calculer le total à partir des éléments du panier
    const newTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(parseFloat(newTotal.toFixed(2))); // Garder deux décimales

    // Calculer le nombre total d'articles
    const newItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
    setItemCount(newItemCount);
  }, [cartItems]);

  return (
    <div className="payment-container">
      <header className="payment-header">
        <img src="/logo.png" alt="Udemy" className="udemy-logo" />
        <a href="/UiUxDesign" className="cancel-button">Annuler</a>
      </header>
      <main className="payment-main">
        <section className="payment-details">
          <h1 className="payment-title">Paiement</h1>

          <div className="section">
            <h2 className="section-title">1. Se connecter ou créer un compte</h2>
            <p className="section-description">
              Vous devez avoir un compte Udemy pour accéder aux cours que vous avez achetés.
              Vérifiez que votre adresse e-mail est correcte, car nous l'utiliserons pour vous
              envoyer votre confirmation de commande. En vous inscrivant, vous acceptez nos
              <a href="#" className="link">Conditions générales d'utilisation</a> et
              notre <a href="#" className="link">Politique de confidentialité</a>.
            </p>
            <div className="login-options">
              <div className="email-login">
                <input type="email" placeholder="E-mail" className="email-input" />
              </div>
              <div className="social-login-separator">ou</div>
              <div className="social-login-buttons">
                <button className="social-button google-button">
                  <img src="/google.png" alt="Google" className="social-icon" />
                </button>
                <button className="social-button facebook-button">
                  <img src="/fcb.png" alt="Facebook" className="social-icon" />
                </button>
                <button className="social-button apple-button">
                  <img src="/appel.png" alt="Apple" className="social-icon" />
                </button>
              </div>
            </div>
            <p className="no-password-needed">Aucun mot de passe n'est requis</p>
            <button className="continue-button">Continuer</button>
          </div>

          <div className="section">
            <h2 className="section-title">
              2. Adresse de facturation et mode de paiement
              <img src="/iconee.png" alt="Secure" className="lock-icon" />
            </h2>
            {/* Ajoutez ici les champs pour l'adresse de facturation et le mode de paiement */}
            <p className="placeholder-text">
              (Contenu pour l'adresse de facturation et le mode de paiement ici)
            </p>
          </div>
        </section>

        <aside className="order-summary">
          <h2 className="summary-title">Récapitulatif de la commande</h2>
          {cartItems.map(item => (
            <div className="summary-item" key={item.id}>
              <span>{item.title} ({item.quantity} {item.quantity > 1 ? 'livres' : 'livre'}) :</span>
              <span>{(item.price * item.quantity).toFixed(2)} $US</span>
            </div>
          ))}

          <div className="summary-total">
            <span>Total ({itemCount} Cours) :</span>
            <span>{total} $US</span>
          </div>
          <div className="payment-button-container">
            <div className="total-amount">
              Total :
              <span className="total-price">{total} $US</span>
            </div>
            <button className="pay-button">
              Payer →
            </button>
            <p className="no-charge-yet">Vous ne serez pas encore débité</p>
          </div>
          <div className="promotion-section">
            <h2 className="promotion-title">Promotions</h2>
            <div className="coupon-input">
              <input type="text" placeholder="Saisissez le coupon" />
              <button className="apply-coupon-button">Appliquer</button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Payer;