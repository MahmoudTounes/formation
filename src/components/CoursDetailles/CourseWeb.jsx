import React from 'react';
import './CoursDetailles.css'; // Assurez-vous d'importer votre fichier CSS

function CourseWeb() {
  return (
    <div>
      <div className="amazon-interfacee">
        <header className="headerap">
          <div className="header-tope">
            <img src="/logo.png" alt="MyDev" className="logonp" />
            <div className="address">Votre adresse</div>
            <input type="text" placeholder="Rechercher Amazon.fr" className="search-bare" />
            <button className="search-buttonee">Q</button>
            <a href="/login" className="accountse">identifiez-vous Comptes</a>
            <a href="/cart" className="carte">Panier</a>
          </div>
          <nav className="nav">
            <a href="#">Toutes</a>
            <a href="#">Meilleures ventes</a>
            <a href="#">MyDev</a>
          </nav>
        </header>
        <main className="main-contentss">
          <section className="herop">
            <h1>Les meilleures ventes</h1>
            <p>Nos produits les plus populaires en vertu du nombre de ventes. Mis à jour fréquemment.</p>
          </section>
        </main>
      </div>

      <div className="livres-amazon">
        <div className="sidebar">
          <a href ="">Tout département</a>
          <a href="/progrmation">Informatique</a>
          <a href="/Progrmation">Programmation</a>
          <a href="#">Développement web</a>
          <a href="#">Bases de données</a>
          <a href="#">Réseaux</a>
          <a href="#">Cybersécurité</a>
          <a href="#">Intelligence artificielle</a>
          <a href="#">Systèmes d'exploitation</a>
          <a href="#">Matériel informatique</a>
          <a href="#">Logiciels</a>
          <a href="#">Bureautique</a>
          <a href="#">Graphisme</a>
          <a href="#">Jeux vidéo</a>
          <a href="#">Internet</a>
          <a href="#">Objets connectés</a>
          <a href="#">Informatique pour enfants</a>
          <a href="#">Informatique pour seniors</a>
        </div>
        <div className="main-content">
          <div className="title">Livres d'informatique pour débutants</div>
          <div className="books-grid">
            <div className="book">
              <img src="/c1.png" alt="L'informatique pour les nuls" />
              <p>L'informatique pour les nuls</p>
              <p className="price">24,99 €</p>
            </div>
            <div className="book">
              <img src="/c2.png" alt="Apprendre l'informatique en douceur" />
              <p>Apprendre l'informatique en douceur</p>
              <p className="price">19,95 €</p>
            </div>
            <div className="book">
              <img src="/c3.png" alt="Le guide complet de l'informatique pour débutants" />
              <p>Le guide complet de l'informatique pour débutants</p>
              <p className="price">29,90 €</p>
            </div>
            <div className="book">
              <img src="/c4.png" alt="Initiation à l'informatique pas à pas" />
              <p>Initiation à l'informatique pas à pas</p>
              <p className="price">22,50 €</p>
            </div>
            <div className="book">
              <img src="/c5.png" alt="Les bases de l'informatique pour les nuls" />
              <p>Les bases de l'informatique pour les nuls</p>
              <p className="price">17,99 €</p>
            </div>
            <div className="book">
              <img src="/c6.png" alt="Python pour les débutants" />
              <p>Python pour les débutants</p>
              <p className="price">26,50 €</p>
            </div>
            <div className="book">
              <img src="/c7.png" alt="HTML et CSS pour les débutants" />
              <p>HTML et CSS pour les débutants</p>
              <p className="price">21,99 €</p>
            </div>
            <div className="book">
              <img src="/c8.png" alt="JavaScript pour les débutants" />
              <p>JavaScript pour les débutants</p>
              <p className="price">23,75 €</p>
            </div>
          
            {/* Ajoutez d'autres livres ici */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseWeb;


  