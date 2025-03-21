// Formation.js
import React from "react";
import { Link } from "react-router-dom";

const progrmation = [
  {
    image: "/html.png",
    title: "Formation HTML pour débutants",
    description: "Apprenez les bases du langage HTML .",
    link: "/formation/html",
  },
  {
    image: "/css.png",
    title: "Formation CSS pour débutants",
    description: "Maîtrisez les concepts du CSS .",
    link: "/formation/css",
  },
  {
    image: "/java.jpg",
    title: "Formation JavaScript pour débutants",
    description: "Initiez-vous au JavaScript ",
    link: "/formation/javascript",
  },
  {
    image: "/figma.png",
    title: "Formation Figma pour débutants",
    description: "Découvrez Figma",
    link: "/formation/figma",
  },
  {
    image: "/php.jpg",
    title: "Formation PHP pour débutants",
    description: "Apprenez les bases du langage PHP .",
    link: "/formation/php",
  },
  {
    image: "/python.png",
    title: "Formation Python pour débutants",
    description: "Découvrez Python.",
    link: "/formation/python",
  },
  {
    image: "/progc.png",
    title: "Formation C++ pour débutants",
    description: "Apprenez à construire des interfaces utilisateur dynamiques avec la bibliothèque React.",
    link: "/formation/react",
  },
  {
    image: "/sql.png",
    title: "Formation SQL pour débutants",
    description: "Maîtrisez les bases de SQL .",
    link: "/formation/sql",
  },
  {
    image: "/git.png",
    title: "Formation Git pour débutants",
    description: "Apprenez les bases de Git ",
    link: "/formation/git",
  },
  {
    image: "/calgo.png",
    title: "Formation C pour débutants",
    description: "Découvrez C et apprenez à développer des applications côté serveur en JavaScript.",
    link: "/formation/nodejs",
  },
];

function Progrmation() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-actions">
          <span>Les Coures</span>
        </div>
      </header>
      <div className="search-bar">
        <input type="text" placeholder="Q Search for anything" />
      </div>
      <div className="community-grid">
        {formations.map((formation, index) => (
          <div className="community-card" key={index}>
            <div className="community-image">
              <img src={formation.image} alt={formation.title} />
            </div>
            <div className="community-details">
              <h3>{formation.title}</h3>
              <p>{formation.description}</p>
              <Link to={formation.link}>
                <button>Voir les livres</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Progrmation;