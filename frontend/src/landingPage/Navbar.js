import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [isLogged, setIsLogged] = useState(!!cookies.token);
  const navigate = useNavigate();

  useEffect(() => {
    // Debug: check current cookies
    console.log("Cookies:", cookies);
    setIsLogged(!!cookies.token);
  }, [cookies]);

  const handleLogout = () => {
    removeCookie("token", { path: "/" }); // important: match path used during set
    setIsLogged(false);
    navigate("/login");
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
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-muted" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-muted" to={"/product"}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-muted" to={"/pricing"}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-muted" to={"/support"}>
                  Support
                </Link>
              </li>

              {!isLogged ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active text-muted" to={"/signup"}>
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active text-muted" to={"/login"}>
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button
                    className="nav-link active text-muted btn"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
