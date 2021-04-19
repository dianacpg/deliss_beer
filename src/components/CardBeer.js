import "../styles/CardBeer.css";

const CardBeer = ({ image, name, description, user }) => {
  const onSaveRecipe = () => {
    fetch("https://guarded-peak-18752.herokuapp.com/favorites", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: user,
        beer_name: name,
        beer_description: description,
        beer_image: image,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="card">
      <div className="content">
        <img src={image} alt="no_beer_image" />
        <h3>{name} </h3>
        <p>{description}</p>
        <button id="btn_small" type="button">
          <i className="fas fa-heart" onClick={() => onSaveRecipe()}></i>
        </button>
      </div>
    </div>
  );
};

export default CardBeer;
