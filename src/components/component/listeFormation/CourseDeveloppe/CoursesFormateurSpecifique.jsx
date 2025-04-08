import React from 'react';
import './CoursesFormateur.css'; // Assuming you have a CSS file

function CoursesFormateur() {
  const formateurs = [
    {
      nom: 'John Taieb (Codeur)',
      accroche: 'Utilise ton ordi et crée ta vie sur mesure !',
      note: 4.5,
      avis: 37684,
      participants: 130482,
      cours: 17,
      imageSrc: 't4.webp', // Replace with actual image path
      descriptionCourte: 'Un Grand Merci aux 100 000+ étudiants qui suivent mes cours.\n\nHello, moi c\'est John Taieb, 36 ans, marié et papa d\'un petit garçon et d\'une petite fille :)\n\nJe ressens le besoin de démocratiser le monde du code. De l\'extérieur ça fait peur et ça parait compliqué. Mais je sais que c\'est accessible à tout le monde. Pas besoin de faire de longues études pour y arriver.\n\nMais surtout, coder c\'est une révolution en marche.\n\nCe métier qui n\'existait presque pas il y a 50 ans va devenir à terme quasiment le métier unique. Le monde a besoin de développeurs et il y en aura de plus en plus besoin.\n\nAlors si tu souhaites toi aussi prendre le train en marche, n\'hésite plus !',
    },
    {
      nom: 'Apprendre à Coder',
      accroche: 'Apprendre à coder en ligne devient facile et fun !',
      note: 4.5,
      avis: 37631,
      participants: 129535,
      imageSrc: 't6.webp', // Replace with actual image path
      descriptionCourte: 'Bienvenue sur la page Apprendre à Coder ! Notre mission est de rendre la programmation accessible à tous, quel que soit votre niveau de départ.\n\nNous croyons que l\'apprentissage du code peut être une expérience enrichissante et amusante. Nos cours sont conçus pour être clairs, interactifs et progressifs, vous permettant d\'acquérir des compétences solides à votre propre rythme.\n\nQue vous souhaitiez créer votre propre site web, développer des applications mobiles ou simplement comprendre le monde numérique qui nous entoure, vous trouverez les ressources nécessaires ici.\n\nRejoignez notre communauté d\'apprenants passionnés et découvrez le pouvoir de la programmation !',
    },
    // Ajoutez d'autres formateurs ici si nécessaire
  ];

  const [showMoreJohn, setShowMoreJohn] = React.useState(false);

  const formateurJohn = formateurs.find(f => f.nom.startsWith('John Taieb'));

  return (
    <div className="formatteurs-containerqqq">
      <h2>Formateurs</h2>
      {formateurJohn && (
        <div className="formateur-cardqq">
          <h3 className="formateur-nomqq">{formateurJohn.nom}</h3>
          <p className="formateur-accrocheqq">{formateurJohn.accroche}</p>
          <div className="formateur-infoqqq">
            <div className="formateur-image-containerqqq">
              <img src={formateurJohn.imageSrc} alt={formateurJohn.nom} className="formateur-image" />
            </div>
            <div className="formateur-statsqqq">
              <p><span className="icon">⭐</span> {formateurJohn.note} Note du formateur</p>
              <p><span className="icon">💬</span> {formateurJohn.avis.toLocaleString()} avis participants</p>
              <p><span className="icon">🧑‍🎓</span> {formateurJohn.participants.toLocaleString()} participants</p>
              <p><span className="icon">📚</span> {formateurJohn.cours} cours</p>
            </div>
          </div>
          <div className="formateur-descriptionqqq">
            <h4>Un Grand Merci aux 100 000+ étudiants qui suivent mes cours.</h4>
            <p className="description-shorqqqt">
              {formateurJohn.descriptionCourte.split('\n\n')[0]}
              {formateurJohn.descriptionCourte.split('\n\n')[1] && (
                <>
                  {showMoreJohn ? (
                    <>
                      <br />
                      {formateurJohn.descriptionCourte.split('\n\n').slice(1).join('\n\n')}
                    </>
                  ) : (
                    <>
                      ... <button className="show-more-button" onClick={() => setShowMoreJohn(true)}>Afficher plus <span className="arrow-down">▼</span></button>
                    </>
                  )}
                </>
              )}
            </p>
          </div>
        </div>
      )}

      {formateurs.slice(1).map(formateur => (
        <div key={formateur.nom} className="formateur-card">
          <h3 className="formateur-nomqq">{formateur.nom}</h3>
          <p className="formateur-accrocheqq">{formateur.accroche}</p>
          <div className="formateur-infoqq">
            <div className="formateur-image-containerqqq">
              <img src={formateur.imageSrc} alt={formateur.nom} className="formateur-image small" />
            </div>
            <div className="formateur-stats smallqqq">
              <p><span className="icon">⭐</span> {formateur.note} Note du formateur</p>
              <p><span className="icon">💬</span> {formateur.avis.toLocaleString()} avis</p>
              <p><span className="icon">🧑‍🎓</span> {formateur.participants.toLocaleString()} participants</p>
            </div>
          </div>
          {formateur.descriptionCourte && (
            <div className="formateur-descriptionqqq">
              <p className="description-shortqqq">{formateur.descriptionCourte.split('\n\n')[0]}...</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CoursesFormateur;