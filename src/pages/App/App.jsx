import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service' 
import './App.css';
import ProductListingPage from '../ProductListingPage/ProductListingPage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import AboutUsPage from "../AboutUsPage/AboutUsPage";
import FAQPage from "../FAQPage/FAQPage"
import HomePage from '../HomePage/HomePage';

function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/collections" element={<ProductListingPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/questions" element={<FAQPage />} />
            <Route path="/*" element={<Navigate to="/collections" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
