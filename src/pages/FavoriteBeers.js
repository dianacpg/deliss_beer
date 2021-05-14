import UserFavorites from "../components/UserFavorites/UserFavorites";

const FavoriteBeers = () => {
  return (
    <div className="favorites">
      <h2>These are your saved beers:</h2>
      <UserFavorites />
    </div>
  );
};

export default FavoriteBeers;
