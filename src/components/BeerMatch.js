import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import BeerList from "./BeerList";
import "../styles/BeerMatch.css";

//Function the shuffle arrays
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

//We got the beer arrays for each compatible food, but we need to shuffle the array in order to not to show the same beer order.
// If we get only 4 beers for each food, we will not have diversity. So we can get 50 beers and then slice to display only 5
// We will map each array and create a beer card for each beer

function Managingarray(array) {
  const shuffleBeerList = shuffleArray(array);
  const finalBeersList = shuffleBeerList.slice(0, 5);
  return finalBeersList;
}

// We will display 5 beer suggestions for mealtypes(meeat, fish and veggies)
const BeerMatch = () => {
  const [meat, setMeat] = useState(null);
  const [fish, setFish] = useState(null);
  const [veggies, setVeggies] = useState(null);
  const [alcohol, setAlcohol] = useState("");

  const URL = `https://api.punkapi.com/v2/beers?&per_page=50&${alcohol}&`;

  useEffect(() => {
    axios
      .get(URL + `food=chicken`)
      .then((res) => {
        setMeat(Managingarray(res.data));
      })
      .catch(console.log);
  }, [alcohol, URL]);

  useEffect(() => {
    axios
      .get(URL + `food=fish`)
      .then((res) => {
        setFish(Managingarray(res.data));
      })
      .catch(console.log);
  }, [alcohol, URL]);

  useEffect(() => {
    axios
      .get(URL + `food=vegetables`)
      .then((res) => {
        setVeggies(Managingarray(res.data));
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
        {meat && <BeerList beerlist={meat} />}{" "}
        {/* Conditional Rendering.Only output MealList when we have a value for breakfast. */}
      </div>
      <div id="fish">
        <div className="underline">
          <h2>Fish</h2>
        </div>
        {fish && <BeerList beerlist={fish} />}
      </div>
      <div id="veggie">
        <div className="underline">
          <h2>Veggies</h2>
        </div>
        {veggies && <BeerList beerlist={veggies} />}
      </div>
      <p id="caution"> * Be responsible. Drink carefully.</p>
    </div>
  );
};

export default BeerMatch;

//
