import React from "react";
import "../../stylesheets/EntreeCard.css";

const EntreeCard = ({ handleIncrement, entree }) => {
  const styles = {
    backgroundImage: `url(${entree.pictureURL})`
  };
  return (
    <div className="entree-card__wrapper">
      <article className="entree-card">
        <h2 className="entree__name">{entree.name}</h2>
        <span style={styles} className="entree__picture" />
        <h3 className="entree__cookTime">Cook Time: {entree.cookTime}</h3>
        <h3 className="entree__ingredients">
          Ingredients: {entree.ingredients.length}
        </h3>
        <div className="button-group">
          <button
            className="pass-button entreeButton"
            onClick={handleIncrement}
          >
            &#10005;
          </button>
          <button
            className="like-button entreeButton"
            onClick={handleIncrement}
          >
            &#10004;
          </button>
        </div>
      </article>
    </div>
  );
};
export default EntreeCard;
