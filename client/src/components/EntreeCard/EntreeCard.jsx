import React from "react";
import "../../stylesheets/EntreeCard.css";


const EntreeCard = ({entree}) => {
  return (
    <div className="entree-card">
      <h2 className="entree__name">{entree.name}</h2>
      <img className="entree__picture" src={entree.pictureURL} alt={entree.name}></img>
      <h3 className="entree__cookTime">Cook Time: {entree.cookTime}</h3>
      <h3 className="entree__ingredients">Ingredients: {entree.ingredients.length}</h3>
    </div>
  );
};
export default EntreeCard;
