import React from "react";
import "../../stylesheets/EntreeCard.css";
const NoMatches = () => {
  return (
    <div className="entree-card__wrapper">
      <article className="entree-card">
        <h2 className="entree__name">Check back later for more matches!</h2>
      </article>
    </div>
  );
};
export default NoMatches;
