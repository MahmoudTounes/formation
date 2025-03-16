import React, { useState, useEffect } from 'react';
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
    age: '',
    birthDate: '',
    country: '',
    studyLevel: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordModalIsOpen, setPasswordModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const isPasswordStrong = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const calculateAge = (birthDate) => {
    if (!birthDate) return '';
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    setRegistrationData({ ...registrationData, age: calculateAge(registrationData.birthDate) });
  }, [registrationData.birthDate]);

  const handleRegistrationChange = (e) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (registrationData.password !== registrationData.confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas.');
      return;
    }

    if (!isPasswordStrong(registrationData.password)) {
      setPasswordModalIsOpen(true);
      return;
    }

    if (registrationData.age > 20) {
      setErrorMessage("L'âge ne doit pas dépasser 20 ans.");
      return;
    }

    try {
      await axios.post('http://localhost:3006/auth/register', registrationData);
      setErrorMessage('Compte créé avec succès !');
      // Suppression de navigate('/');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setErrorMessage(err.response.data.message);
      } else {
        setErrorMessage("Erreur d'inscription.");
      }
    }
  };

  const closePasswordModal = () => {
    setPasswordModalIsOpen(false);
  };

  return (
    <div className="signup-form">
      <h2>Créer un compte Professeur</h2>
      <form onSubmit={handleRegistrationSubmit}>
        <input type="text" name="username" placeholder="Nom d'utilisateur *" value={registrationData.username} onChange={handleRegistrationChange} required />
        <input type="text" name="firstName" placeholder="Prénom *" value={registrationData.firstName} onChange={handleRegistrationChange} required />
        <input type="text" name="lastName" placeholder="Nom *" value={registrationData.lastName} onChange={handleRegistrationChange} required />
        <input type="email" name="email" placeholder="Email *" value={registrationData.email} onChange={handleRegistrationChange} required />
        <input type="password" name="password" placeholder="Mot de passe *" value={registrationData.password} onChange={handleRegistrationChange} required minLength="8" />
        <input type="password" name="confirmPassword" placeholder="Confirmez le mot de passe *" value={registrationData.confirmPassword} onChange={handleRegistrationChange} required minLength="8" />
        <input type="date" name="birthDate" placeholder="Date de naissance *" value={registrationData.birthDate} onChange={handleRegistrationChange} required />
        <input type="number" name="age" placeholder="Age *" value={registrationData.age} readOnly />
        <input type="text" name="country" placeholder="Pays *" value={registrationData.country} onChange={handleRegistrationChange} required />
        <input type="text" name="studyLevel" placeholder="Niveau d'étude *" value={registrationData.studyLevel} onChange={handleRegistrationChange} required />
        <button type="submit">Créer un compte</button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}

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
            <h2> mot de passe non validé</h2>
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