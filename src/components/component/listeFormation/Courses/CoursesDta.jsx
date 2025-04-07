import React from 'react';
import './CoursesData.css'; // Assuming you have a CSS file

function CoursesDta() {
  return (
    <div className="course-details-containerhh">
      <div className="left-columnhh">
        <div className="breadcrumbshh">
          Développement &gt; Science des données &gt; Deep Learning
        </div>
        <h1>Python pour le Deep Learning & Machine Learning: A à Z</h1>
        <p className="subtitlehh">Cours complet sur le Machine Learning pour maîtriser l'intelligence artificielle, Tensorflow, et les réseaux de neurones</p>
        <div className="rating-enrollmenthh">
          <span className="ratinghh">4,6 ⭐⭐⭐⭐⭐ (344 notes)</span>
          <span className="separatorhh"></span>
          <span className="enrollmenthh">36 402 participants</span>
        </div>
        <div className="created-by">Créé par Clém Donnet</div>
        <div className="last-updated-languagehh">
          <span className="last-updatedhh">Dernière mise à jour : 01/2024</span>
          <span className="separatorhh">•</span>
          <span className="languagehh">Français</span>
          <span className="separatorhh">•</span>
          <span className="subtitleshh">Français [Aut.]</span>
        </div>
        <div className="what-you-will-learnhh">
          <h2>Ce que vous apprendrez</h2>
          <ul className="learning-pointshh">
            <li>
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
              </svg>
              Apprenez à utiliser différents frameworks en Python pour résoudre des problèmes du monde réel à l'aide du Deep Learning et de l'intelligence artificielle
            </li>
            <li>
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
              </svg>
              Construisez des réseaux de neurones artificiels avec TensorFlow et Keras
            </li>
            <li>
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
              </svg>
              Faire des prédictions à l'aide de la régression linéaire, de la régression polynomiale et de la régression multivariée
            </li>
            <li>
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
              </svg>
              Apprenez les bases de la théorie du Machine Learning et du Deep Learning
            </li>
            <li>
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
              </svg>
              Apprenez à utiliser le Machine Learning et le Deep Learning en Python
            </li>
          </ul>
        </div>
      </div>
      <div className="right-columnhh">
        <div className="video-previewhh">
          <img src="/pd.png" alt="Course Previewhh" />
         
          <div className="preview-badge">Afficher un aperçu de ce cours</div>
        </div>
        <div className="tabs">
          <button className="tab active">Personnel</button>
          <button className="tab">Teams</button>
        </div>
        <div className="enrollmenthh-sectionhh">
          <h2>Inscrivez-vous aux meilleurs cours d'Udemy</h2>
          <p className="enrollment-texthh">Obtenez ce cours ainsi que plus de 900 de nos cours les mieux notés avec l'Abonnement individuel. <a href="#">En savoir plus</a></p>
          <button className="try-free-buttohhn">Essayez gratuitement l'Abonnement individuel</button>
          <p className="price-after-trial">À partir de 10,00 $US par mois après l'essai</p>
          <p className="cancel-anytime">Annulez à tout moment</p>
          <div className="or-separator">ou</div>
          <div className="single-purchasehh">
            <div className="price">$34,99 $US</div>
            <button className="add-to-carthh">Ajouter au panier</button>
            <button className="buy-nowhh">Acheter maintenant</button>
            <div className="guaranteehh">Garantie satisfait ou remboursé de 30 jours</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesDta;