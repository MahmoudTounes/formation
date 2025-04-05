
import React from 'react';

const topics = [
  {
    title: 'Introduction à HTML (HyperText Markup Language)',
    sections: [
      {
        title: 'Les Fondamentaux du HTML',
        videos: [
          { title: 'Qu\'est-ce que HTML ? Structure de base d\'une page web', url: 'URL_HTML_BASE_FR' },
          { title: 'Les balises HTML essentielles (titres, paragraphes, liens)', url: 'URL_HTML_BALISES_BASE_FR' },
          { title: 'Listes (ordonnées et non ordonnées), images et tableaux en HTML', url: 'URL_HTML_LISTES_IMAGES_TABLEAUX_FR' },
        ],
      },
      {
        title: 'Formulaires et éléments sémantiques',
        videos: [
          { title: 'Créer des formulaires HTML (champs de texte, boutons, cases à cocher)', url: 'URL_HTML_FORMULAIRES_BASE_FR' },
          { title: 'Les attributs importants des formulaires (method, action, name)', url: 'URL_HTML_FORMULAIRES_ATTRIBUTS_FR' },
          { title: 'HTML sémantique : structurer votre contenu avec logique', url: 'URL_HTML_SEMANTIQUE_FR' },
        ],
      },
    ],
  },
  {
    title: 'Introduction à CSS (Cascading Style Sheets)',
    sections: [
      {
        title: 'Les bases du CSS',
        videos: [
          { title: 'Qu\'est-ce que CSS ? Comment l\'intégrer à HTML (inline, interne, externe)', url: 'URL_CSS_BASE_FR' },
          { title: 'Les sélecteurs CSS (balises, classes, ID)', url: 'URL_CSS_SELECTEURS_FR' },
          { title: 'Propriétés CSS fondamentales (couleur, texte, police)', url: 'URL_CSS_PROPRIETES_TEXTE_FR' },
        ],
      },
      {
        title: 'Le modèle de boîte (Box Model) et la mise en page',
        videos: [
          { title: 'Comprendre le modèle de boîte CSS (margin, padding, border, content)', url: 'URL_CSS_BOX_MODEL_FR' },
          { title: 'Techniques de mise en page CSS de base (display: block, inline, inline-block)', url: 'URL_CSS_MISE_EN_PAGE_BASE_FR' },
          { title: 'Introduction à Flexbox pour la mise en page responsive', url: 'URL_CSS_FLEXBOX_INTRO_FR' },
        ],
      },
    ],
  },
  {
    title: 'Introduction à JavaScript',
    sections: [
      {
        title: 'Les Fondamentaux de JavaScript',
        videos: [
          { title: 'Qu\'est-ce que JavaScript ? Comment l\'intégrer à HTML', url: 'URL_JS_BASE_FR' },
          { title: 'Variables, types de données et opérateurs en JavaScript', url: 'URL_JS_VARIABLES_TYPES_OPERATEURS_FR' },
          { title: 'Structures de contrôle (conditions if/else, boucles for/while)', url: 'URL_JS_STRUCTURES_CONTROLE_FR' },
        ],
      },
      {
        title: 'Interagir avec le DOM et les événements',
        videos: [
          { title: 'Le Document Object Model (DOM) : manipuler la structure HTML avec JS', url: 'URL_JS_DOM_INTRO_FR' },
          { title: 'Événements JavaScript : rendre votre site interactif (clic, souris, clavier)', url: 'URL_JS_EVENEMENTS_FR' },
          { title: 'Les bases de la manipulation du DOM (sélectionner, modifier des éléments)', url: 'URL_JS_DOM_MANIPULATION_BASE_FR' },
        ],
      },
    ],
  },
];

function Cybersecurite() {
  const VideoItem = ({ video }) => (
    <div style={{ marginBottom: '15px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
      <h3>{video.title}</h3>
      <iframe
        width="560"
        height="315"
        src={video.url}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );

  const Section = ({ section }) => (
    <div style={{ marginBottom: '30px', padding: '15px', border: '1px solid #eee', borderRadius: '5px' }}>
      <h2>{section.title}</h2>
      {section.videos.map((video, index) => (
        <VideoItem key={index} video={video} />
      ))}
    </div>
  );

  const Topic = ({ topic }) => (
    <div style={{ marginBottom: '50px', padding: '20px', border: '2px solid #ddd', borderRadius: '10px' }}>
      <h1>{topic.title}</h1>
      {topic.sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </div>
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Apprenez les bases du développement web (HTML, CSS, JavaScript)</h1>
      <p>Créez vos premiers sites web grâce à cette introduction complète aux technologies front-end.</p>
      {topics.map((topic, index) => (
        <Topic key={index} topic={topic} />
      ))}
    </div>
  );
}

export default Cybersecurite;