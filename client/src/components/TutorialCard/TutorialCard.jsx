import React from "react";
import Background from "../TutorialCard/Flover.png";
import "../../stylesheets/EntreeCard.css";
const TutorialCard = ({ handleTutorial }) => {
  const styles = {
    backgroundImage: `url(${Background})`,
    backgroundColor: "#f2f2"
  };
  return (
    <div className="entree-card__wrapper">
      <article className="entree-card">
        <h2 className="entree__name">Food Lovers Unite</h2>
        <span className="entree__picture" style={styles} />
        <h3 className="entree__cookTime">Code Time: Over 9,000</h3>
        <h3 className="entree__ingredients">Ingredients: React</h3>
        <div className="button-group">
          <button className="pass-button entreeButton" onClick={handleTutorial}>
            &#10005;
          </button>
          <button className="like-button entreeButton" onClick={handleTutorial}>
            &#10004;
          </button>
        </div>
      </article>
    </div>
  );
};
export default TutorialCard;
