import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <p>
        This app was made with <i class="fas fa-heart"></i> by{" "}
        <a href="https://github.com/dianacpg" target="_blank" rel="noreferrer">
          Dianacpg <i id="heart" class="fab fa-github"></i>
        </a>
      </p>
    </div>
  );
};

export default Footer;
