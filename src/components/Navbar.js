import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="navbar-logo">
            {" "}
            <h1>
              <i class="fas fa-beer"></i> DELISS BEER
            </h1>
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-links" onClick={closeMobileMenu}>
              <button>Sign in</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;