// Initiationapp.js
import React from 'react';

const topics = [
  {
    title: 'Introduction à l\'Informatique',
    sections: [
      {
        title: 'Qu\'est-ce que l\'Informatique ?',
        videos: [
          { title: 'L\'Informatique pour les Débutants', url: 'https://www.youtube.com/embed/3QhU99L0f3E' }, // Exemple d'URL
          { title: 'Données et Informations : Concepts Clés', url: 'https://www.youtube.com/embed/aCa5n24FQwI' }, // Exemple d'URL
        ],
      },
      {
        title: 'Le Matériel Informatique (Hardware)',
        videos: [
          { title: 'Les Composants Essentiels d\'un Ordinateur', url: 'https://www.youtube.com/embed/AAZ4n6_i7mE' }, // Exemple d'URL
          { title: 'Fonctionnement du CPU et de la RAM', url: 'https://www.youtube.com/embed/Itz8e1F4Y8Q' }, // Exemple d'URL
          { title: 'Stockage : HDD vs SSD', url: 'https://www.youtube.com/embed/YQROOXCj_yw' }, // Exemple d'URL
        ],
      },
      {
        title: 'Le Logiciel Informatique (Software)',
        videos: [
          { title: 'Logiciel Système vs Logiciel d\'Application', url: 'https://www.youtube.com/embed/jV8P24LAmkY' }, // Exemple d'URL
          { title: 'Introduction aux Algorithmes', url: 'https://www.youtube.com/embed/c9Pq-I7nNtY' }, // Exemple d'URL
          { title: 'Aperçu des Langages de Programmation', url: 'https://www.youtube.com/embed/yy-f4HY4b-4' }, // Exemple d'URL
        ],
      },
    ],
  },
  {
    title: 'Introduction aux Systèmes d\'Exploitation',
    sections: [
      {
        title: 'Rôle et Fonctions d\'un OS',
        videos: [
          { title: 'Qu\'est-ce qu\'un Système d\'Exploitation ?', url: 'https://www.youtube.com/embed/gJ-WWI-a_pg' }, // Exemple d'URL
          { title: 'Gestion des Processus et de la Mémoire', url: 'https://www.youtube.com/embed/4W-r1a_Y6vY' }, // Exemple d'URL
          { title: 'Gestion des Périphériques et du Système de Fichiers', url: 'https://www.youtube.com/embed/9Tnq149h09w' }, // Exemple d'URL
        ],
      },
      {
        title: 'Types de Systèmes d\'Exploitation',
        videos: [
          { title: 'Windows, macOS et Linux : Présentation', url: 'https://www.youtube.com/embed/jGXTKGe-QAY' }, // Exemple d'URL
          { title: 'Android et iOS : Les OS Mobiles', url: 'https://www.youtube.com/embed/6kYik-14Y1s' }, // Exemple d'URL
          { title: 'Les Systèmes d\'Exploitation Serveur', url: 'https://www.youtube.com/embed/VavDGu7pkiE' }, // Exemple d'URL
        ],
      },
      {
        title: 'Interaction avec le Système d\'Exploitation',
        videos: [
          { title: 'Interface Graphique (GUI) vs Ligne de Commande (CLI)', url: 'https://www.youtube.com/embed/j_f-1azhR7c' }, // Exemple d'URL
          { title: 'Commandes de Base du Terminal (Linux/macOS)', url: 'https://www.youtube.com/embed/ZSF-9G1Ftdo' }, // Exemple d'URL
          { title: 'Exploration de l\'Interface Windows', url: 'https://www.youtube.com/embed/sOE5n610W-8' }, // Exemple d'URL
        ],
      },
    ],
  },
];

function InitiationApp() {
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
      <h1>Bases de l'Informatique et des Systèmes d'Exploitation</h1>
      {topics.map((topic, index) => (
        <Topic key={index} topic={topic} />
      ))}
    </div>
  );
}

export default InitiationApp;