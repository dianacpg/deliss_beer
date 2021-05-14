import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav id="navbar">
        <div className="logo">
          <Link to="/" className="navbar-logo">
            {" "}
            <h2>DELISS BEER</h2>
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
              <button>Check your beers!</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
