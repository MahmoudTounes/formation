import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
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
import Cart from './components/liste/Cart';
import Register from './components/Register';
import Login from './components/login';
import Header from './components/Header';
import { isAuthenticated, getToken, setToken, removeToken } from './components/authService';
import api from './api/api';
function ProtectedRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());
  const [data, setData] = useState(null);
  const [cartItems, setCartItems] = useState([]); // État pour les articles du panier

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      api.get('/api/protected')
        .then(response => setData(response.data))
        .catch(error => console.error("Error fetching data:", error));
    }
  }, [isLoggedIn]);

  const handleLogin = async () => {
    try {
      const response = await api.post('/api/auth/login', {
        username: 'testuser',
        password: 'password123',
      });
      setToken(response.data.access_token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
    setData(null);
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
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

