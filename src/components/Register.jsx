import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './component/Register.css'; // Assurez-vous d'avoir un fichier CSS pour la mise en page

function Register() {
  const [registrationData, setRegistrationData] = useState({
    accountType: 'professeur', // Valeur par défaut
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: '',
    country: '',
    studyLevel: '',
    experiences: [{ title: '', company: '', startDate: '', endDate: '', description: '' }],
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordModalIsOpen, setPasswordModalIsOpen] = useState(false);
  const [errorType, setErrorType] = useState('');
  const navigate = useNavigate();

  const isPasswordStrong = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegistrationChange = (e) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const experiences = [...registrationData.experiences];
    experiences[index][name] = value;
    setRegistrationData({ ...registrationData, experiences });
  };

  const addExperience = () => {
    setRegistrationData({
      ...registrationData,
      experiences: [...registrationData.experiences, { title: '', company: '', startDate: '', endDate: '', description: '' }],
    });
  };

  const removeExperience = (index) => {
    const experiences = [...registrationData.experiences];
    experiences.splice(index, 1);
    setRegistrationData({ ...registrationData, experiences });
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setErrorType('');

    if (!isPasswordStrong(registrationData.password)) {
      setPasswordModalIsOpen(true);
      setErrorType('weakPassword');
      return;
    }

    try {
      await axios.post('http://localhost:5000/auth/register', registrationData);
      setErrorMessage('Compte créé avec succès ! Redirection vers la page de connexion...');
      setErrorType('success');
      setTimeout(() => {
        navigate('/login'); // Rediriger vers la page de connexion après un délai
      }, 2000);
    } catch (err) {
      console.error("Erreur lors de l'inscription:", err); // Log l'erreur complète pour le débogage

      if (err.response) {
        // L'erreur a une réponse du serveur
        console.error("Réponse du serveur:", err.response.data);
        console.error("Statut de la réponse:", err.response.status);

        if (err.response.data && err.response.data.message) {
          setErrorMessage(err.response.data.message);
          setErrorType('serverError');
        } else {
          setErrorMessage(`Erreur d'inscription du serveur (statut ${err.response.status}). Veuillez réessayer.`);
          setErrorType('serverError');
        }
      } else if (err.request) {
        // La requête a été faite mais aucune réponse n'a été reçue
        console.error("Aucune réponse reçue du serveur:", err.request);
        setErrorMessage("Erreur de réseau : Impossible de contacter le serveur. Veuillez vérifier votre connexion.");
        setErrorType('networkError');
      } else {
        // Une erreur s'est produite lors de la configuration de la requête
        console.error("Erreur lors de la configuration de la requête:", err.message);
        setErrorMessage(`Erreur inattendue : ${err.message}. Veuillez réessayer.`);
        setErrorType('unknownError');
      }
    }
  };

  const closePasswordModal = () => {
    setPasswordModalIsOpen(false);
  };

  return (
    <div className="signup-form">
      <h2>Créer un compte</h2>
      <form onSubmit={handleRegistrationSubmit}>
        <select
          name="accountType"
          value={registrationData.accountType}
          onChange={handleRegistrationChange}
          required
        >
          <option value="professeur">Professeur</option>
          <option value="eleve">elève</option>
        </select>
        <input type="text" name="username" placeholder="Nom d'utilisateur *" value={registrationData.username} onChange={handleRegistrationChange} required />
        <input type="text" name="firstName" placeholder="Prénom *" value={registrationData.firstName} onChange={handleRegistrationChange} required />
        <input type="text" name="lastName" placeholder="Nom *" value={registrationData.lastName} onChange={handleRegistrationChange} required />
        <input type="email" name="email" placeholder="Email *" value={registrationData.email} onChange={handleRegistrationChange} required />
        <input type="password" name="password" placeholder="Mot de passe *" value={registrationData.password} onChange={handleRegistrationChange} required minLength="8" />
        <input type="date" name="birthDate" placeholder="Date de naissance *" value={registrationData.birthDate} onChange={handleRegistrationChange} required />
        <input type="text" name="country" placeholder="Pays *" value={registrationData.country} onChange={handleRegistrationChange} required />
        <input type="text" name="studyLevel" placeholder="Niveau d'étude *" value={registrationData.studyLevel} onChange={handleRegistrationChange} required />

        {registrationData.experiences.map((experience, index) => (
          <div key={index}>
            <h3>Expérience {index + 1}</h3>
            <input type="text" name="title" placeholder="Titre *" value={experience.title} onChange={(e) => handleExperienceChange(e, index)} required />
            <input type="text" name="company" placeholder="Entreprise *" value={experience.company} onChange={(e) => handleExperienceChange(e, index)} required />
            <input type="date" name="startDate" placeholder="Date de début *" value={experience.startDate} onChange={(e) => handleExperienceChange(e, index)} required />
            <input type="date" name="endDate" placeholder="Date de fin" value={experience.endDate} onChange={(e) => handleExperienceChange(e, index)} />
            <textarea name="description" placeholder="Description *" value={experience.description} onChange={(e) => handleExperienceChange(e, index)} required />
            <button type="button" onClick={() => removeExperience(index)}>Supprimer</button>
          </div>
        ))}
        <button type="button" onClick={addExperience}>Ajouter une expérience</button>

        <button type="submit">Créer un compte</button>
      </form>
      {errorMessage && <div className={`error-message ${errorType}`}>{errorMessage}</div>}

      {passwordModalIsOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Mot de passe non valide</h2>
            <p>Le mot de passe doit contenir au moins 8 caractères, des lettres majuscules, minuscules, des chiffres et des caractères spéciaux.</p>
            <button onClick={closePasswordModal}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;