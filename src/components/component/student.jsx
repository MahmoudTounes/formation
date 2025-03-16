import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Student() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    birthDate: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    studyLevel: '',
  });
  const [errorMessage, setErrorMessage] = useState(''); // Pour afficher les messages d'erreur
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegistrationChange = (e) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Réinitialiser le message d'erreur
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email: loginData.email,
        password: loginData.password,
      });
      localStorage.setItem('token', response.data.access_token);

      // Récupérer les informations de l'utilisateur
      const userResponse = await axios.get('http://localhost:3000/users/me', {
        headers: {
          Authorization: `Bearer ${response.data.access_token}`,
        },
      });

      if (userResponse.data) {
        navigate('/');
      } else {
        // Afficher un message d'erreur si l'utilisateur n'existe pas
        setErrorMessage("L'utilisateur n'existe pas dans MongoDB");
      }
    } catch (error) {
      // Afficher un message d'erreur générique en cas d'erreur de connexion
      setErrorMessage('Erreur de connexion. Veuillez vérifier vos identifiants.');
    }
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Réinitialiser le message d'erreur

    if (registrationData.password !== registrationData.confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas.');
      return;
    }

    const age = parseInt(registrationData.age);
    if (isNaN(age) || age > 18) {
      setErrorMessage('L\'âge doit être un nombre inférieur ou égal à 18.');
      return;
    }

    try {
      await axios.post('http://localhost:3003/auth/register', registrationData);
      // Afficher un message de succès
      setErrorMessage('Compte créé avec succès !');
      // Rediriger vers la page de connexion après l'inscription
      setIsRegistering(false);
      setLoginData({ email: registrationData.email, password: registrationData.password });
    } catch (err) {
      // Afficher un message d'erreur générique en cas d'erreur d'inscription
      if (err.response && err.response.data && err.response.data.message) {
        setErrorMessage(err.response.data.message);
      } else {
        setErrorMessage('Erreur d\'inscription.');
      }
    }
  };

  const toggleRegistering = () => {
    setIsRegistering(!isRegistering);
    setErrorMessage(''); // Réinitialiser le message d'erreur
  };

  return (
    <div className="auth-container">
      {isRegistering ? (
        <div className="signup-form">
          <h2>Créer un compte</h2>
          <form onSubmit={handleRegistrationSubmit}>
            <input type="text" id="firstName" name="firstName" placeholder="Prénom *" value={registrationData.firstName} onChange={handleRegistrationChange} required />
            <input type="text" id="lastName" name="lastName" placeholder="Nom *" value={registrationData.lastName} onChange={handleRegistrationChange} required />
            <input type="number" id="age" name="age" placeholder="Âge *" value={registrationData.age} onChange={handleRegistrationChange} required />
            <input type="date" id="birthDate" name="birthDate" placeholder="Date de naissance *" value={registrationData.birthDate} onChange={handleRegistrationChange} required />
            <input type="email" id="email" name="email" placeholder="Email *" value={registrationData.email} onChange={handleRegistrationChange} required />
            <input type="password" id="password" name="password" placeholder="Mot de passe *" value={registrationData.password} onChange={handleRegistrationChange} required minLength="8" />
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirmez le mot de passe *" value={registrationData.confirmPassword} onChange={handleRegistrationChange} required minLength="8" />
            <select id="country" name="country" value={registrationData.country} onChange={handleRegistrationChange} required>
              <option value="">Sélectionnez un pays</option>
              <option value="Tunisie">Tunisie</option>
              <option value="France">France</option>
              <option value="USA">USA</option>
            </select>
            <select id="studyLevel" name="studyLevel" value={registrationData.studyLevel} onChange={handleRegistrationChange} required>
              <option value="">Sélectionnez un niveau d'étude</option>
              <option value="Primaire">Primaire</option>
              <option value="Collège">Collège</option>
              <option value="Lycée">Lycée</option>
              <option value="Université">Université</option>
            </select>
            <button type="submit">Créer un compte</button>
          </form>
          <p>
            Déjà un compte ? <a href="#" onClick={toggleRegistering}>Se connecter</a>
          </p>
          {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Afficher le message d'erreur */}
        </div>
      ) : (
        <div className="login-form">
          <div className="avatar">
            <img src="utilisateur.png" alt="Avatar" />
          </div>
          <h2>Connexion</h2>
          <form onSubmit={handleLoginSubmit}>
            <input type="email" placeholder="Email" name="email" value={loginData.email} onChange={handleLoginChange} />
            <input type="password" placeholder="Mot de passe" name="password" value={loginData.password} onChange={handleLoginChange} />
            <button type="submit">Se connecter</button>
          </form>
          <p>
            Pas de compte? <a href="#" onClick={toggleRegistering}>S'inscrire</a>
          </p>
          {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Afficher le message d'erreur */}
        </div>
      )}
    </div>
  );
}

export default Student;