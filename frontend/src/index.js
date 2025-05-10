
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import SignupPage from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/Productpage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

const App = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8080/getcookie", { withCredentials: true })
      .then((response) => console.log("Cookies:", response.data.cookies))
      .catch((error) => console.error("Error fetching cookie:", error));
  }, []); // Dependency array ensures it runs only once on component mount

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Product" element={<ProductPage />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/Support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);







