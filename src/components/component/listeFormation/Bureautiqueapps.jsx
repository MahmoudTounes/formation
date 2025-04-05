
import React from 'react';

const courses = [
  {
    title: 'Microsoft Word : Maîtriser le traitement de texte',
    sections: [
      {
        title: 'Les bases de Word',
        videos: [
          { title: 'Découverte de l\'interface Word', url: 'URL_WORD_BASE_INTERFACE_FR' },
          { title: 'Créer, ouvrir et enregistrer des documents', url: 'URL_WORD_BASE_FICHIERS_FR' },
          { title: 'Saisie et mise en forme de texte (police, taille, couleur)', url: 'URL_WORD_BASE_FORMATAGE_TEXTE_FR' },
        ],
      },
      {
        title: 'Mise en page et organisation',
        videos: [
          { title: 'Gestion des marges, de l\'orientation et de la taille du papier', url: 'URL_WORD_MISE_EN_PAGE_FR' },
          { title: 'Insertion et gestion des sauts de page et de section', url: 'URL_WORD_SAUTS_FR' },
          { title: 'Utilisation des en-têtes et pieds de page', url: 'URL_WORD_EN_TETES_PIEDS_FR' },
        ],
      },
      {
        title: 'Objets et fonctionnalités avancées',
        videos: [
          { title: 'Insertion et manipulation d\'images et de formes', url: 'URL_WORD_OBJETS_FR' },
          { title: 'Création et gestion de tableaux', url: 'URL_WORD_TABLEAUX_FR' },
          { title: 'Introduction au publipostage', url: 'URL_WORD_PUBLIPOSTAGE_INTRO_FR' },
        ],
      },
    ],
  },
  {
    title: 'Microsoft Excel : Exploiter la puissance du tableur',
    sections: [
      {
        title: 'Premiers pas avec Excel',
        videos: [
          { title: 'Présentation de l\'interface Excel (ruban, cellules, feuilles)', url: 'URL_EXCEL_BASE_INTERFACE_FR' },
          { title: 'Saisie et modification des données', url: 'URL_EXCEL_SAISIE_DONNEES_FR' },
          { title: 'Mise en forme des cellules (nombres, texte, alignement)', url: 'URL_EXCEL_FORMATAGE_CELLULES_FR' },
        ],
      },
      {
        title: 'Formules et fonctions essentielles',
        videos: [
          { title: 'Introduction aux formules de calcul (somme, moyenne, etc.)', url: 'URL_EXCEL_FORMULES_BASE_FR' },
          { title: 'Utilisation des fonctions courantes (SI, RECHERCHEV, NB.SI)', url: 'URL_EXCEL_FONCTIONS_COURANTES_FR' },
          { title: 'Gestion des références de cellules (relatives, absolues, mixtes)', url: 'URL_EXCEL_REFERENCES_FR' },
        ],
      },
      {
        title: 'Graphiques et analyse de données',
        videos: [
          { title: 'Création et personnalisation de graphiques (histogrammes, courbes, etc.)', url: 'URL_EXCEL_GRAPHIOUES_FR' },
          { title: 'Tri et filtrage des données', url: 'URL_EXCEL_TRI_FILTRE_FR' },
          { title: 'Introduction aux tableaux croisés dynamiques', url: 'URL_EXCEL_TCD_INTRO_FR' },
        ],
      },
    ],
  },
  {
    title: 'Microsoft PowerPoint : Des présentations percutantes',
    sections: [
      {
        title: 'Démarrer avec PowerPoint',
        videos: [
          { title: 'Découverte de l\'interface PowerPoint', url: 'URL_POWERPOINT_BASE_INTERFACE_FR' },
          { title: 'Création et gestion des diapositives', url: 'URL_POWERPOINT_DIAPOSITIVES_FR' },
          { title: 'Ajout et mise en forme de texte dans les diapositives', url: 'URL_POWERPOINT_TEXTE_FR' },
        ],
      },
      {
        title: 'Éléments visuels et multimédia',
        videos: [
          { title: 'Insertion et manipulation d\'images et de formes', url: 'URL_POWERPOINT_IMAGES_FORMES_FR' },
          { title: 'Ajout et configuration de vidéos et d\'audio', url: 'URL_POWERPOINT_MULTIMEDIA_FR' },
          { title: 'Utilisation des SmartArt et des graphiques', url: 'URL_POWERPOINT_SMARTART_GRAPHIOUES_FR' },
        ],
      },
      {
        title: 'Transitions et animations',
        videos: [
          { title: 'Application et personnalisation des transitions entre les diapositives', url: 'URL_POWERPOINT_TRANSITIONS_FR' },
          { title: 'Ajout et configuration des animations sur les éléments', url: 'URL_POWERPOINT_ANIMATIONS_FR' },
          { title: 'Conseils pour des présentations dynamiques et efficaces', url: 'URL_POWERPOINT_CONSEILS_FR' },
        ],
      },
    ],
  },
];

function Bureautiqueapps() {
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

  const Course = ({ course }) => (
    <div style={{ marginBottom: '50px', padding: '20px', border: '2px solid #ddd', borderRadius: '10px' }}>
      <h1>{course.title}</h1>
      {course.sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </div>
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Maîtrisez Word, Excel et PowerPoint</h1>
      <p>Améliorez votre productivité grâce à cette formation complète sur les outils bureautiques essentiels.</p>
      {courses.map((course, index) => (
        <Course key={index} course={course} />
      ))}
    </div>
  );
}

export default Bureautiqueapps;