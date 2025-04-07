import React from 'react';
import VideoCourseList from './VideoCourseList';
import CoursesDefinition from './CoursesDefinition';
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
        <div className="created-byhh">Créé par Clém Donnet</div>
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
        <div className="course-overview-containerhh">
          <section className="related-topicshh">
            <h2>Découvrir les sujets associés</h2>
            <div className="topics-list">
              <button className="topic-buttonhh">Deep Learning</button>
              <button className="topic-buttonhh">Science des données</button>
              <button className="topic-buttonhh">Développement</button>
            </div>
          </section>

          <section className="course-includes">
            <h2>Ce cours comprend :</h2>
            <ul className="includes-list">
              <li className="includes-item">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M19 7h-1V5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 10V9l-4 4 4 4zM6 7V5c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v2H6z"></path>
                </svg>
                Vidéo à la demande de 4,5 heures
              </li>
              <li className="includes-item">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M19 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 14H7v-2h4v2zm4 0h-4v-2h4v2zm2-4H7v-2h8v2zm0-4H7V6h10v2z"></path>
                </svg>
                3 articles
              </li>
              <li className="includes-itemhh">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
                </svg>
                21 ressources téléchargeables
              </li>
              <li className="includes-itemhh">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M17 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-7 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm12-2h-2c0-2.76-2.24-5-5-5S7.24 8 10 8h2c0 2.76 2.24 5 5 5s5-2.24 5-5zm-7-3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path>
                </svg>
                Accès sur mobiles et TV
              </li>
              <li className="includes-itemhh">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg>
                Certificat de fin de formation
              </li>
            </ul>
          </section>

          <section className="course-content-overview">
            <h2>Contenu du cours</h2>
            <p>21 sections • 146 sessions • Durée totale: 4 h 38 min</p>
            <button className="expand-sections-button">Développer toutes les sections</button>
          </section>
        </div>
        <div className="guaranteehhapp">
          <VideoCourseList />
          <CoursesDefinition/>
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
          <div className="or-separatorhh">ou</div>
          <div className="single-purchasehh">
            <div className="price">$34,99 $US</div>
            <button className="add-to-carthh">Ajouter au panier</button>
         
            <div className="purchase-details-containerreds">
      <button className="buy-now-buttonsezr">Acheter maintenant</button>
      <p className="guaranteezes">Garantie satisfait ou remboursé de 30 jours</p>
      <p className="accesszer">Accès complet illimité</p>
      <div className="share-offerzert">
        <button className="share-buttonzeds">Partager</button>
        <button className="offer-buttonzerds">Offrir ce cours</button>
      </div>
      <div className="coupon-sectionzesx">
        <button className="apply-coupon-buttonsdx">Appliquer le coupon</button>
        <div className="applied-couponsxcd">
          <div className="coupon-info">
            <span className="coupon-codesdxcvf">LETSLEARNNOW</span> <span className="applied-text">est appliqué</span>
            <span className="coupon-label">Coupon Udemy</span>
          </div>
          <button className="remove-coupon-buttonsdeza">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
        {/* You might have an input field and apply button here if no coupon is applied */}
        {/* <div className="coupon-inputeszr">
          <input type="text" placeholder="Saisissez le coupon" />
          <button className="apply-buttonzqa">Appliquer</button>
        </div> */}
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesDta;