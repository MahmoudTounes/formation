import React from 'react';
import './CoursesDefinition.css'; // Assuming you have a CSS file

function CoursesDefinition() {
  const items = [
    {
      id: 1,
      title: 'Python pour le Deep Learning & le Machine Learning: A à Z',
      instructor: 'Clara Donnart',
      rating: 4.4,
      reviews: 344,
      price: 34.99,
      imageUrl: 'pd.png', // Replace with actual image path
    },
    {
      id: 2,
      title: 'Analyse de Données avec Python: Numpy, Pandas et Matplotlib',
      instructor: 'Lucie G.',
      rating: 4.3,
      reviews: 347,
      price: 24.99,
      imageUrl: 'pq.png', // Replace with actual image path
    },
    {
      id: 3,
      title: 'Python pour la Data Science et le Machine Learning: A à Z',
      instructor: 'Clara Lannoy',
      rating: 4.0,
      reviews: 244,
      price: 34.99,
      imageUrl: 'ml.png', // Replace with actual image path
    },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0).toFixed(2);

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
            </div>
            <span className="price">{item.price} $US</span>
          </li>
        ))}
      </ul>
      <div className="total-section">
        <span className="total-label">Total :</span>
        <span className="total-price">{total} $US</span>
      </div>
      <button className="add-to-cart-button">Tout ajouter au panier</button>
    </div>
  );
}

export default CoursesDefinition;