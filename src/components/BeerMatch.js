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
        console.log(res.data);
      })
      .catch(console.log);
  }, [alcohol]);

  useEffect(() => {
    axios
      .get(URL + `food=fish`)
      .then((res) => {
        setFish(res.data);
        console.log(res.data);
      })
      .catch(console.log);
  }, [alcohol]);

  useEffect(() => {
    axios
      .get(URL + `food=vegetables`)
      .then((res) => {
        setVeggies(res.data);
        console.log(res.data);
      })
      .catch(console.log);
  }, [alcohol]); //it will only render if the user filters the alcohol

  const onFilterChange = (e) => {
    setAlcohol(e.target.value);
  };

  return (
    <div className="plan_container">
      <Filter onFilterChange={onFilterChange} />

      {/* Beers will be displayed by the BeerList component, passing meat,fish and veggie arrays as props */}

      <div id="meat">
        <h2>Meat</h2>
        {meat && <BeerList props={meat} user={user} />}{" "}
        {/* Conditional Rendering.Only output MealList when we have a value for breakfast. */}
      </div>
      <div id="fish">
        <h2>Fish</h2>
        {fish && <BeerList props={fish} user={user} />}
      </div>
      <div id="veggie">
        <h2>Veggies</h2>
        {veggies && <BeerList props={veggies} user={user} />}
      </div>
    </div>
  );
};

export default BeerMatch;

//
