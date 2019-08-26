import React from "react";
import "../../stylesheets/EntreeCard.css";

const EntreeCard = ({
  handlePassIncrement,
  handleLikeIncrement,
  initialEntree
}) => {
  const style = {
    backgroundImage: initialEntree.pictureURL
  };
  return (
    <div className="entree-card__wrapper">
      <article className="entree-card">
        <h2 className="entree__name">{initialEntree.name}</h2>
        <span className="entree__picture" style={style} />
        <h3 className="entree__cookTime">
          Cook Time: {initialEntree.cookTime}
        </h3>
        <h3 className="entree__ingredients">
          Ingredients: {initialEntree.ingredients.length}
        </h3>
        <div className="button-group">
          <button
            className="pass-button entreeButton"
            onClick={handlePassIncrement}
          >
            &#10005;
          </button>
          <button
            className="like-button entreeButton"
            onClick={handleLikeIncrement}
          >
            &#10004;
          </button>
        </div>
      </article>
    </div>
  );
};
export default EntreeCard;
