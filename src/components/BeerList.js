import React, { useContext } from "react";
import CardBeer from "./CardBeer";
import "../styles/BeerList.css";
import { UserContext } from "../components/UserContext";
//Function the shuffle arrays

//We got the beer arrays for each compatible food, but we need to shuffle the array in order to not to show the same beer order.
// If we get only 4 beers for each food, we will not have diversity. So we can get 50 beers and then slice to display only 4
// We will map each array and create a beer card for each beer
const BeerList = ({ beerlist }) => {
  const user = useContext(UserContext);
  const finalBeerList = beerlist.map((beer) => {
    return (
      <div key={beer.name}>
        <CardBeer
          image={beer.image_url}
          name={beer.name}
          description={beer.tagline}
          user={user.id}
        />
      </div>
    );
  });
  return <div className="beerlist">{finalBeerList}</div>;
};

export default BeerList;
