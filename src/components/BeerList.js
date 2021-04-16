import CardBeer from "./CardBeer";
import "../styles/BeerList.css";

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
// If we get only 4 beers for each food, we will not have diversity. So we can get 50 beers and then slice to display only 4
// We will map each array and create a beer card for each beer
const BeerList = ({ props, user }) => {
  const shuffleBeerList = shuffleArray(props);
  const fourBeersPerFood = shuffleBeerList.slice(0, 5);
  const finalBeerList = fourBeersPerFood.map((beer) => {
    return (
      <CardBeer
        image={beer.image_url}
        name={beer.name}
        description={beer.tagline}
        // ingredients={recipe.recipe.ingredientLines}
        user={user}
      />
    );
  });
  return <div className="beerlist">{finalBeerList}</div>;
};

export default BeerList;
