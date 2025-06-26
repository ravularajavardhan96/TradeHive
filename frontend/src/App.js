import { Route, Routes, useLocation } from "react-router-dom";
import { Login, Signup as AuthSignup, Home } from './pages';
import HomePage from './landingPage/home/HomePage';
import AboutPage from './landingPage/about/AboutPage';
import PricingPage from './landingPage/pricing/PricingPage';
import ProductsPage from './landingPage/products/ProductsPage';
import SupportPage from './landingPage/support/SupportPage';
import Footer from './landingPage/Footer';
import Navbar from './landingPage/Navbar';
import NotFound from './landingPage/NotFound';
// import ProtectedRoute from './pages/ProtectedRoute';
// import DashboardHome from './pages/dashboard/DashboardHome';
import './App.css';

function App() {
  const location = useLocation();

  const hideLayoutRoutes = ['/login', '/signup', '/dashboard'];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<AuthSignup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/support" element={<SupportPage />} />
     
        
       

        <Route path="*" element={<NotFound />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </div>
  );
}

export default App;
