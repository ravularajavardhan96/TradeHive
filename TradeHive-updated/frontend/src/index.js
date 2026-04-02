import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import AboutPage from './landingPage/about/AboutPage';
import PricingPage from './landingPage/pricing/PricingPage';
import ProductsPage from './landingPage/products/ProductsPage';
import SupportPage from './landingPage/support/SupportPage';
import Signup from './landingPage/signUp/SignUp';
import Footer from './landingPage/Footer';
import Navbar from './landingPage/Navbar';
import NotFound from './landingPage/NotFound';
import App from './App';
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <CookiesProvider>
        <App/>
    </CookiesProvider>
 
  </BrowserRouter>
  
);