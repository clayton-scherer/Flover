import React from "react";
import "../../stylesheets/EntreeCard.css";

const EntreeCard = ({ handlePassIncriment, handleLikeIncriment }) => {
  const style = {
    backgroundImage: `url(https://assets.kraftfoods.com/recipe_images/opendeploy/52089_640x428.jpg)`
  };
  return (
    <div className="entree-card__wrapper">
      <article className="entree-card">
        <h2 className="entree__name">entree name</h2>
        <span className="entree__picture" style={style} />
        <h3 className="entree__cookTime">Cook Time: 20 min</h3>
        <h3 className="entree__ingredients">Ingredients: number of items</h3>
        <div className="button-group">
          <button
            className="pass-button entreeButton"
            onClick={handlePassIncriment}
          >
            &#10005;
          </button>
          <button
            className="like-button entreeButton"
            onClick={handleLikeIncriment}
          >
            &#10004;
          </button>
        </div>
      </article>
    </div>
  );
};
export default EntreeCard;
