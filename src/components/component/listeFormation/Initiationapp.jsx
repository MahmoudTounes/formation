import React, { useState } from 'react';
import './pages.css'; // Import the CSS file

const interfaces = [
  {
    title: 'Des compétences qui vous font évoluer',
    text: 'La technologie et le monde du travail évoluent rapidement. Avec nous, vous êtes plus rapide. Obtenez les compétences pour atteindre vos objectifs et rester compétitif.',
    primaryButton: 'Abonnez-vous, particu...',
    secondaryButton: 'Abonnement entrep...',
    backgroundImageUrl: 'b3.webp', // URL for the background image
    backgroundColor: '#f7f9fa', // Light grey
    textColor: '#282c3f', // Dark grey
    buttonStyle: 'primary',
  },
  {
    title: 'Poursuivez votre ascension',
    text: 'Acquérez les compétences dont vous avez besoin pour passer à la prochaine étape et à toutes les suivantes. Les cours sont à partir de 9,99 $US jusqu\'au 27 mars inclus.',
    backgroundImageUrl: 'b1.webp', // URL for the background image
    backgroundColor: '#f2f80f', // Yellow
    textColor: '#000', // Black
    buttonStyle: 'none', // No buttons in the second interface
  },
  // Add more interface data as needed
];

function Initiationapp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentInterface = interfaces[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : interfaces.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < interfaces.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div
      className="skills-evolution-container"
      style={{
        backgroundImage: `url(${currentInterface.backgroundImageUrl})`,
        backgroundColor: currentInterface.backgroundColor,
        color: currentInterface.textColor,
        backgroundSize: 'cover', // Cover the entire container
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Do not repeat the image
      }}
    >
      <div className="slider-arrow left-arrow" onClick={goToPrevious}>
        <svg viewBox="0 0 24 24" fill={currentInterface.textColor}>
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </svg>
      </div>
      <div className="slide">
        <div
          className="text-content"
          style={{
            backgroundColor: currentInterface.buttonStyle === 'none' ? 'transparent' : '#fff',
          }}
        >
          <h2>{currentInterface.title}</h2>
          <p>{currentInterface.text}</p>
          {currentInterface.buttonStyle !== 'none' && (
            <div className="buttons">
              <button className="primary-button">{currentInterface.primaryButton}</button>
              <button className="secondary-button">{currentInterface.secondaryButton}</button>
            </div>
          )}
        </div>
      </div>
      {/* We no longer need the separate image container */}
      <div className="slider-arrow right-arrow" onClick={goToNext}>
        <svg viewBox="0 0 24 24" fill={currentInterface.textColor}>
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </div>
    </div>
  );
}

export default Initiationapp;