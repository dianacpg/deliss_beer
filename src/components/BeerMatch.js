import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import BeerList from "./BeerList";
import "../styles/BeerMatch.css";

// We will display 5 beer suggestions for mealtypes(meeat, fish and veggies)
const BeerMatch = ({ user }) => {
  const [meat, setMeat] = useState(null);
  const [fish, setFish] = useState(null);
  const [veggies, setVeggies] = useState(null);
  const [alcohol, setAlcohol] = useState("");

  const URL = `https://api.punkapi.com/v2/beers?&per_page=50&${alcohol}&`;

  useEffect(() => {
    axios
      .get(URL + `food=chicken`)
      .then((res) => {
        setMeat(res.data);
      })
      .catch(console.log);
  }, [alcohol, URL]);

  useEffect(() => {
    axios
      .get(URL + `food=fish`)
      .then((res) => {
        setFish(res.data);
      })
      .catch(console.log);
  }, [alcohol, URL]);

  useEffect(() => {
    axios
      .get(URL + `food=vegetables`)
      .then((res) => {
        setVeggies(res.data);
      })
      .catch(console.log);
  }, [alcohol, URL]); //it will only render if the user filters the alcohol

  const onFilterChange = (e) => {
    setAlcohol(e.target.value);
  };

  return (
    <div className="plan_container">
      <Filter onFilterChange={onFilterChange} />

      {/* Beers will be displayed by the BeerList component, passing meat,fish and veggie arrays as props */}

      <div id="meat">
        <div className="underline">
          <h2>Meat</h2>
        </div>
        {meat && <BeerList props={meat} user={user} />}{" "}
        {/* Conditional Rendering.Only output MealList when we have a value for breakfast. */}
      </div>
      <div id="fish">
        <div className="underline">
          <h2>Fish</h2>
        </div>
        {fish && <BeerList props={fish} user={user} />}
      </div>
      <div id="veggie">
        <div className="underline">
          <h2>Veggies</h2>
        </div>
        {veggies && <BeerList props={veggies} user={user} />}
      </div>
      <p id="caution"> * Be responsible. Drink carefully.</p>
    </div>
  );
};

export default BeerMatch;

//
