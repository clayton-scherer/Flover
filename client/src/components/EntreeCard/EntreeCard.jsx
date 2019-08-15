import React from "react";
import "../../stylesheets/EntreeCard.css";

const EntreeCard = () => {
  const style = {
    backgroundImage: `url(https://assets.kraftfoods.com/recipe_images/opendeploy/52089_640x428.jpg)`
  };
  return (
    <article className="entree-card">
      <h2 className="entree__name">entree name</h2>
      <span className="entree__picture" style={style} />
      <h3 className="entree__cookTime">Cook Time: 20 min</h3>
      <h3 className="entree__ingredients">Ingredients: number of items</h3>
      <div className="button-group">
        <button className="pass-button entreeButton">&#10005;</button>
        <button className="like-button entreeButton">&#10004;</button>
      </div>
    </article>
  );
};
export default EntreeCard;
