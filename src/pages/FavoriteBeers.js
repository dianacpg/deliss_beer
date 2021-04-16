import UserFavorites from "../components/UserFavorites";

const FavoriteBeers = () => {
  return (
    <div className="favorites">
      <h2>These are your saved recipes:</h2>
      <UserFavorites />
    </div>
  );
};

export default FavoriteBeers;
