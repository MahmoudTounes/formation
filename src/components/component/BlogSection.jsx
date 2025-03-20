import React from 'react';
import './BlogSection.css'; // Importez le fichier CSS

function SectionBlog() {
  return (
    <div className="blog-section">
      <div className="blog-header">
        <h2>NOTRE BLOG</h2>
        <h3>Derniers Articles du Blog</h3>
      </div>
      <div className="blog-cards">
        <div className="blog-card">
          <div className="blog-image">
            <img src="/b1.webp" alt="Blog 1" />
          </div>
          <div className="blog-info">
            <p>ADMIN 18 JANV. 2001 3 COMMENTAIRES</p>
            <h3>Construisez votre Carrière de Rêve en Logiciel et Ingénierie</h3>
            <p>Une petite rivière nommée Duden coule à proximité et leur fournit les éléments nécessaires.</p>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-image">
            <img src="/b2.webp" alt="Blog 2" />
          </div>
          <div className="blog-info">
            <p>ADMIN 25 AVR 2022 5 COMMENTAIRES</p>
            <h3>Construisez votre Carrière de Rêve en Logiciel et Ingénierie</h3>
            <p>Une petite rivière nommée Duden coule à proximité et leur fournit les éléments nécessaires.</p>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-image">
            <img src="/b3.webp" alt="Blog 3" />
          </div>
          <div className="blog-info">
            <p>UTILISATEUR 15 MAI 2022 10 COMMENTAIRES</p>
            <h3>Construisez votre Carrière de Rêve en Logiciel et Ingénierie</h3>
            <p>Une petite rivière nommée Duden coule à proximité et leur fournit les éléments nécessaires.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionBlog;