import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './component/Register.css';

function Register() {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: '',
    country: '',
    studyLevel: '',
    experiences: [{ title: '', company: '', startDate: '', endDate: '', description: '' }],
    accountType: 'professeur',
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
      await axios.post('http://localhost:3007/auth/register', registrationData);
      setErrorMessage('Compte créé avec succès !');
      setErrorType('success');
      navigate('/login');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setErrorMessage(err.response.data.message);
        setErrorType('serverError');
      } else {
        setErrorMessage("Erreur d'inscription.");
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
        <input type="text" name="username" placeholder="Nom d'utilisateur *" value={registrationData.username} onChange={handleRegistrationChange} required />
        <input type="text" name="firstName" placeholder="Prénom *" value={registrationData.firstName} onChange={handleRegistrationChange} required />
        <input type="text" name="lastName" placeholder="Nom *" value={registrationData.lastName} onChange={handleRegistrationChange} required />
        <input type="email" name="email" placeholder="Email *" value={registrationData.email} onChange={handleRegistrationChange} required />
        <input type="password" name="password" placeholder="Mot de passe *" value={registrationData.password} onChange={handleRegistrationChange} required minLength="8" />
        <input type="date" name="birthDate" placeholder="Date de naissance *" value={registrationData.birthDate} onChange={handleRegistrationChange} required />
        <input type="text" name="country" placeholder="Pays *" value={registrationData.country} onChange={handleRegistrationChange} required />
        <input type="text" name="studyLevel" placeholder="Niveau d'étude *" value={registrationData.studyLevel} onChange={handleRegistrationChange} required />

        <select
          name="accountType"
          value={registrationData.accountType}
          onChange={handleRegistrationChange}
          required
        >
          <option value="professeur">Professeur</option>
          <option value="eleve">Élève</option>
        </select>

        {registrationData.experiences.map((experience, index) => (
          <div key={index}>
            <h3>Expérience {index + 1}</h3>
            <input type="text" name="title" placeholder="Titre" value={experience.title} onChange={(e) => handleExperienceChange(e, index)} required />
            <input type="text" name="company" placeholder="Entreprise" value={experience.company} onChange={(e) => handleExperienceChange(e, index)} required />
            <input type="date" name="startDate" placeholder="Date de début" value={experience.startDate} onChange={(e) => handleExperienceChange(e, index)} required />
            <input type="date" name="endDate" placeholder="Date de fin" value={experience.endDate} onChange={(e) => handleExperienceChange(e, index)} />
            <textarea name="description" placeholder="Description" value={experience.description} onChange={(e) => handleExperienceChange(e, index)} required />
            <button type="button" onClick={() => removeExperience(index)}>Supprimer</button>
          </div>
        ))}
        <button type="button" onClick={addExperience}>Ajouter une expérience</button>

        <button type="submit">Créer un compte</button>
      </form>
      {errorMessage && <div className={`error-message ${errorType}`}>{errorMessage}</div>}

      {passwordModalIsOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              width: '400px',
              textAlign: 'center',
            }}
          >
            <h2>mot de passe non validé</h2>
            <p>
              Le mot de passe doit contenir au moins 8 caractères, des lettres majuscules, minuscules, des chiffres et des caractères spéciaux.
            </p>
            <button
              onClick={closePasswordModal}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;