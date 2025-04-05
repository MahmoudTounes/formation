import React from 'react';
import './format.css'; // Créez ce fichier CSS
import { Link } from 'react-router-dom'; // Importez Link

function Cours() {
  return (
    <div className="interface-containereq">
      <div className="headeeq">
        <div className="navigationeq">
          <a href="Initiationapp">Info base</a>
          <a href="Programmationapps">Programmation</a>
          <a href="Cybersecurite">Sécurité</a>
          <a href="login">Contact</a>
        </div>
      </div>
      <div className="contenteq">
        <div className="text-contenteq">
          <h2>Info Débutants</h2>
        </div>

        <div className="image-with-buttoneqs">
          {/*<img src="/img.jpg" alt="Description de l'image" className="contenteq-imageeqs" />*/}
          <Link to="/interformation" target="_blank" className="formationeq-buttoneqs">
            DÉCOUVRIR LES FORMATIONS
            </Link>
            </div>
            </div>
            <Link to="/cours" className="return-to-shop">
                    ← Retour à la accueil
                    </Link>
        </div>
  );
}

export default Cours;