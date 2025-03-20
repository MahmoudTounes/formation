import React from 'react';
import './TemSection.css';

function SectionTemoignages() {
  return (
    <div className="testimonial-sectiont">
      <div className="testimonial-headert">
        <h2>TÉMOIGNAGES</h2>
        <h1>Nos Étudiants Performants</h1>
      </div>
      <div className="student-cardst">
        <div className="student-cardt">
          <div className="student-imagets">
            <img src="/m1.webp" alt="Étudiant 1" />
          </div>
          <div className="student-infot">
            <h3>ROGER SCOTT</h3>
            <p>DIRECTEUR MARKETING</p>
          </div>
          <div className="quote-icon">
            <i className="fas fa-quote-left"></i>
          </div>
          <div className="student-quote">
            <p>
              Loin, très loin, derrière les montagnes de mots, loin des pays
              Vokalia et Consonantia, vivent les textes aveugles.
            </p>
          </div>
        </div>
        <div className="student-cardt">
          <div className="student-imagets">
            <img src="/m2.webp" alt="Étudiant 2" />
          </div>
          <div className="student-info">
            <h3>ROGER SCOTT</h3>
            <p>DIRECTEUR MARKETING</p>
          </div>
          <div className="quote-icon">
            <i className="fas fa-quote-left"></i>
          </div>
          <div className="student-quote">
            <p>
              Loin, très loin, derrière les montagnes de mots, loin des pays
              Vokalia et Consonantia, vivent les textes aveugles.
            </p>
          </div>
        </div>
        <div className="student-cardt">
          <div className="student-imagets">
            <img src="/t3.webp" alt="Étudiant 3" />
          </div>
          <div className="student-info">
            <h3>ROGER SCOTT</h3>
            <p>DIRECTEUR MARKETING</p>
          </div>
          <div className="quote-icon">
            <i className="fas fa-quote-left"></i>
          </div>
          <div className="student-quote">
            <p>
              Loin, très loin, derrière les montagnes de mots, loin des pays
              Vokalia et Consonantia, vivent les textes aveugles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTemoignages;