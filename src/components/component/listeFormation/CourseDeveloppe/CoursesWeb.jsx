import React from 'react';
//import './CoursesDefinition.css'; // Assuming you have a CSS file

function CoursesWeb() {
  const items = [
    {
      id: 1,
      title: 'Formation Complète Développeur Web',
      instructor: 'John Taieb (Codeur), Apprendre à Coder',
      rating: 4.5,
      reviews: 27658,
      price: 11.99,
      originalPrice: 74.99,
      imageUrl: 'na.png', // Replace with actual image path
      badge: 'Meilleure vente',
    },
    {
      id: 2,
      title: 'FORMATION COMPLETE POUR DEVENIR FULL-STACK',
      instructor: 'Code With Nael',
      rating: 4.4,
      reviews: 946,
      price: 11.99,
      originalPrice: 69.99,
      imageUrl: 'pm.png', // Replace with actual image path
      badge: 'Meilleure vente',
    },
    {
      id: 3,
      title: '20 Projets en JavaScript',
      instructor: 'Enzo Ustariz - Web School',
      rating: 4.6,
      reviews: 766,
      price: 11.99,
      originalPrice: 69.99,
      imageUrl: 'java.jpg', // Replace with actual image path
    },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  const originalTotal = items.reduce((sum, item) => sum + item.originalPrice, 0).toFixed(2);

  return (
    <div className="frequently-bought-together-container">
      <h2 className="title">Fréquemment achetés ensemble</h2>
      <ul className="items-list">
        {items.map(item => (
          <li key={item.id} className="item">
            <div className="image-container">
              <img src={item.imageUrl} alt={item.title} className="item-image" />
              <button className="add-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </button>
            </div>
            <div className="info">
              <h3 className="item-title">{item.title}</h3>
              <p className="instructor">{item.instructor}</p>
              <div className="rating-reviews">
                <span className="rating">{item.rating}</span>
                <span className="stars">⭐⭐⭐⭐⭐</span>
                <span className="reviews">({item.reviews})</span>
              </div>
              {item.badge && <span className="badge">{item.badge}</span>}
            </div>
            <div className="price-section">
              <span className="price">{item.price} $US</span>
              {item.originalPrice && (
                <span className="original-price">{item.originalPrice} $US</span>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="total-section">
        <span className="total-label">Total :</span>
        <div className="total-prices">
          <span className="total-price">{total} $US</span>
          <span className="original-total-price">{originalTotal} $US</span>
        </div>
      </div>
      <button className="add-to-cart-button">Tout ajouter au panier</button>
    </div>
  );
}

export default CoursesWeb;