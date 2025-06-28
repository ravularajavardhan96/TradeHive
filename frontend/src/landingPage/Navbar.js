import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogged(!!token);
  }, [location]); 

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setIsLogged(false);              
    navigate("/");              
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
      <div className="container px-5 py-2 border-bottom">
        <Link className="navbar-brand" to={"/"}>
          <img
            src="assets/images-20250426T135433Z-001/images/logo.svg"
            style={{ width: "20%" }}
            className="ms-5"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/support">Support</Link>
            </li>
            {!isLogged ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-muted" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-muted" to="/login">Login</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link text-muted"
                    href="http://localhost:3000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn text-muted" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
