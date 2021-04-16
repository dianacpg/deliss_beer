import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "../styles/Home.css";
import "aos/dist/aos.css";
import person from "../img/person.jpg";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div id="home_container">
      <div className="text_container">
        <div className="text">
          <ul>
            <li>
              {" "}
              <h2>
                {" "}
                Choose the best beer <br />
                for your meals
              </h2>
            </li>
            <li>
              {" "}
              <a href="#about_container">
                <button id="btn_home">Learn More</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div data-aos="fade-right" id="about_container">
        <div className="about_card">
          <img src={person} alt="about_image" />
        </div>
        <div className="about_card">
          <div className="about_text">
            <h2> What is Deliss Beer?</h2>

            <p>
              What is the best beer for you meal? <br />
              Deliss Beer is an Automatic Beer and Food Match Generator that
              gives you the most suitable craft beer for your meal. You will
              find options for meat, fish and veggie plates! Discover craft
              beers from all around the world! You can also save your favorite
              beers in your acount. Try it!
            </p>
            <h2> How it works?</h2>

            <ol>
              <li>Register or Sign In;</li>
              <li>Access the Beer and Food Match Generator;</li>
              <li>Save your favorite beers!</li>
            </ol>
            <Link to="/signin">
              <button id="btn_home" type="button">
                {" "}
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
