import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/FavoriteRecipes.css";

const UserFavorites = () => {
  const { id } = useParams();
  const [favbeers, setFavBeers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://guarded-peak-18752.herokuapp.com/favorites/${id}`)
      .then((res) => {
        setFavBeers(res.data);
        console.log(favbeers);
      });
  }, []);

  const deleteBeer = (beer_id) => {
    axios
      .delete(`https://guarded-peak-18752.herokuapp.com/favorites/${beer_id}`)
      .then((res) => {
        const removedArr = [...favbeers].filter(
          (beer) => beer.beer_id !== beer_id
        );
        setFavBeers(removedArr);
      });
  };

  const FavBeerList = favbeers.map((beer) => {
    return (
      <div id="favcard">
        {" "}
        {/* pass the id param to the delete recipe by recipe_id*/}
        <div className="card">
          {" "}
          <button
            id="btn_small"
            onClick={() => {
              deleteBeer(beer.beer_id);
            }}
          >
            X
          </button>{" "}
          <div className="content">
            <img src={beer.beer_image} alt="recipe_image" />
            <h3>{beer.beer_name} </h3>
            <p>{beer.beer_description}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="favorites">
      <div className="favoritelist">{FavBeerList}</div>;
    </div>
  );
};

export default UserFavorites;
