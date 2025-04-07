import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrawerContent from './components/component/DrawerContent';
import Connecter from './components/component/connecter';
import Monpanier from './components/component/monpanier';
import Search from './components/component/search';
import Professeur from './components/component/professeur';
import Student from './components/component/student';
import Menu from './components/component/menu';
import Cours from './components/component/cours';
import Formations from './components/component/formations';
import Interformation from './components/component/Interformation';
import HtmlFormation from './components/component/HtmlFormation';
import CssFormation from './components/component/CssFormation';
import JavascriptFormation from './components/component/JavascriptFormation';
import SqlFormation from './components/component/SqlFormation';
import PythonFormation from './components/component/PythonFormation';
import PhpFormation from './components/component/PhpFormation';
import NodejsFormation from './components/component/NodejsFormation';
import ReactFormation from './components/component/ReactFormation';
import GitLivres from './components/component/GitLivres';
import FigmaFormation from './components/component/FigmaFormation';
import ArtDesign from './components/component/Categories/ArtDesign';
import UiUxDesign from './components/component/Categories/UiUxDesign';
import ComputerScience from './components/component/Categories/ComputerScience';
import WebManagement1 from './components/component/Categories/WebManagement1';
import WebManagement2 from './components/component/Categories/WebManagement2';
import WebManagement3 from './components/component/Categories/WebManagement3';
import WebManagement4 from './components/component/Categories/WebManagement4';
import WebManagement from './components/component/Categories/WebManagement';
import WebManagemt from './components/component/Categories/WebManagemt';
import WebManagements from './components/component/Categories/WebManagements';
import CourseWeb from './components/CoursDetailles/CourseWeb';
import CourseProgra from './components/CoursDetailles/CourseProgra';
import Webdevelopment from './components/CoursDetailles/Webdevelopment';
import Developments from './components/CoursDetailles/Developments';
import Progrmation from './components/CoursDetailles/CoursesHref/Progrmation';
import Cart from './components/liste/Cart';
import Wishlistapps from './components/liste/Wishlistapps';
import Initiationapp from './components/component/listeFormation/Initiationapp';
import Bureautiqueapps from './components/component/listeFormation/Bureautiqueapps'
import  Programmationapps from'./components/component/listeFormation/Programmationapps';
import Cybersecurite from './components/component/listeFormation/Cybersecurite';
import Coursesapps from './components/component/listeFormation/Coursesapps';
import FormationDetaill from './components/component/listeFormation/FormationDetaill';
import PgeFormateurapps from './components/component/listeFormation/PageFormateurapps';
import CoursesFormateur from './components/component/listeFormation/CoursesFormateur';
import Payer from './components/component/Categories/Payer';
import CoursesDta from './components/component/listeFormation/Courses/CoursesDta'
import Register from './components/Register';
import Login from './components/login';
import Header from './components/Header';
// Assuming 'api', 'isAuthenticated', and 'removeToken' are defined elsewhere
 import api from './api/api'; 
 import { isAuthenticated, removeToken } from './components/authService'; 
function App() {
  const [cartItems, setCartItems] = useState([]); // État pour les articles du panier
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    // Assuming isAuthenticated is a function you've defined to check login status
   setIsLoggedIn(isAuthenticated());
    // Replace the line above with your actual authentication check
    // For now, let's just set it to false or true for testing
    setIsLoggedIn(false);
  }, []);
  useEffect(() => {
    if (isLoggedIn && /* api */ true) { // Make sure 'api' is available
    api.get('/api/protected')
      .then(response => setData(response.data))
     .catch(error => console.error("Error fetching data:", error));
      console.log("Fetching protected data (replace with your actual API call)");
    }
  }, [isLoggedIn]);

  const handleLogin = async () => {
    try {
     const response = await api.post('/api/auth/login', {
   email: 'testuser@example.com', // Remplacez par l'email de l'utilisateur
  password: 'password123',      // Remplacez par le mot de passe de l'utilisateur
  accountType: 'professeur',    // Remplacez par le type de compte de l'utilisateur (professeur ou eleve)
 });

      // Traitez la réponse ici (par exemple, stockez le token, redirigez l'utilisateur)
   console.log('Login successful:', response.data);
      console.log('Login function called (replace with your actual login logic)');
      // Assuming login is successful, update isLoggedIn
      setIsLoggedIn(true);

    } catch (error) {
      // Gérez les erreurs ici
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
  };
  const handleLogout = () => {
    // Assuming removeToken is a function you've defined to clear the token
     removeToken();
    setIsLoggedIn(false);
    setData(null);
    console.log('Logout function called (replace with your actual logout logic)');
  };

  const handleAddToCart = (product) => {
    // Logique pour ajouter un produit au panier
    setCartItems([...cartItems, product]);
  };
  return (
    <BrowserRouter>
      <Header cartItemCount={cartItems.length} /> {/* Passez le nombre d'articles au Header */}
      <Routes>
        <Route path="/" element={<DrawerContent />} />
        <Route path="/connecter" element={<Connecter />} />
        <Route path="/monpanier" element={<Monpanier />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/Formations" element={<Formations />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Interformation" element={<Interformation />} />
        <Route path="/formation/html" element={<HtmlFormation />} />
        <Route path="/formation/css" element={<CssFormation />} />
        <Route path="/formation/javascript" element={<JavascriptFormation />} />
        <Route path="/formation/sql" element={<SqlFormation />} />
        <Route path="/formation/python" element={<PythonFormation />} />
        <Route path="/formation/php" element={<PhpFormation />} />
        <Route path="/formation/nodejs" element={<NodejsFormation />} />
        <Route path="/formation/react" element={<ReactFormation />} />
        <Route path="/formation/git" element={<GitLivres />} />
        <Route path="/formation/figma" element={<FigmaFormation />} />
        <Route path="/ArtDesgin" element={<ArtDesign />} />
        <Route path="/UiUxDesign" element={<UiUxDesign />} />
        <Route path="/computerScience" element={<ComputerScience />} />
        <Route path="/WebManagement1" element={<WebManagement1 />} />
        <Route path="/WebManagement2" element={<WebManagement2 />} />
        <Route path="/WebManagement3" element={<WebManagement3 />} />
        <Route path="/WebManagement4" element={<WebManagement4 />} />
        <Route path="/WebManagement" element={<WebManagement />} />
        <Route path="/WebManagemt" element={<WebManagemt />} />
        <Route path="/WebManagements" element={<WebManagements />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} /> {/* Passez cartItems au composant Cart */}
        <Route path="/Wishlistapps" element={<Wishlistapps/>}/>
        <Route path="/Register" element={<Register />} />
        <Route path="/CourseWeb" element={<CourseWeb />} />
        <Route path="/CourseProgra" element={<CourseProgra />} />
        <Route path="/Webdevelopment" element={<Webdevelopment />} />
        <Route path="/Developments" element={<Developments />} />
        <Route path="/Progrmation" element={<Progrmation />} />
        <Route path="/Initiationapp" element={<Initiationapp/>}/>
        <Route path="/Bureautiqueapps"element={<Bureautiqueapps/>}/>
        <Route path="/Programmationapps" element={<Programmationapps/>}/>
        <Route path="/Cybersecurite" element={<Cybersecurite/>}/>
        <Route path ="/Coursesapps"elemnt ={<Coursesapps/>}/>
        <Route path ="/FormationDetaill" element={<FormationDetaill/>}/>
        <Route path ="/PgeFormateurapps" element={<PgeFormateurapps/>}/>
        <Route path ="/CoursesFormateur" element={<CoursesFormateur/>}/>
        <Route path = "/Payer" element={<Payer/>}/>
        <Route path ="/CoursesDta" element= {<CoursesDta/>}/>
      
       
      </Routes>
    </BrowserRouter>
  );
}
export default App;