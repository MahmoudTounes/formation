import React from 'react';
import Interformation from '../Interformation';
import CoursesFormateur from './CoursesFormateur';
import Footerapp from '../Footerapp';
import './PageFormateurapps.css'; // Import the CSS file

const InstructorProfile = () => {
  const instructorName = 'Sébastien Daviot';
  const instructorProfession = 'Analytics consultant';
  const totalParticipants = '';
  const ratingCount = '';
  const personalInfo = `Consultant Senior dans le domaine de la data, à Paris, je partage avec plaisir mes connaissances et compétences sur le sujet auprès de mes clients ou de toute personne curieuse d'apprendre ! N'hésitez pas à me partager des sujets que vous voudriez voir apparaître dans un de mes cours ! À bientôt !`;
  const profilePicture = '/t8.webp'; // Path to the image in the public directory
  const profileLink = '#'; // Replace with the actual profile link
  const linkedinLink = 'https://www.linkedin.com/in/sebastiendaviot/'; // Replace with the actual LinkedIn link

  return (
    <div className="drawer-contentappd">
      <Interformation />
      <div className="instructorProfilePage">
        <div className="instructorProfileContainer">
          <div className="instructorHeader">
            <div className="instructorInfo">
              <p className="instructorLabel">FORMATEUR</p>
              <h1 className="instructorName">{instructorName}</h1>
              <p className="instructorProfession">{instructorProfession}</p>
            </div>
            <div className="instructorStats">
              <div className="statItem">
                <span className="statNumber">{totalParticipants}</span>
                <span className="statText">Total de participants</span>
              </div>
              <div className="statItem">
                <span className="statNumber">{ratingCount}</span>
                <span className="statText">Avis</span>
              </div>
            </div>
          </div>

          <div className="profileCard">
            <img src={profilePicture} alt={instructorName} className="profileImage" />
            <div className="socialLinks">
              <a href={profileLink} className="socialIcon link">🔗</a>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="socialIcon linkedin">in</a>
            </div>
          </div>

          <div className="personalInformationSection">
            <h2>Informations personnelles</h2>
            <p className="personalInfoText">{personalInfo}</p>
          </div>
        </div>
      </div>
      <CoursesFormateur />
      <Footerapp/>
      
    </div>
  );
};

export default InstructorProfile;