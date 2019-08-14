import React from "react";
import EntreeCard from "../EntreeCard/EntreeCard";
import "../../stylesheets/EntreeCardList.css";


const EntreeCardList = ({ entrees }) => {
  return (
    <ul className="entree-card-list">
      {entrees.map(entree => (
        <li className="entree-card__list-item">
          <EntreeCard entree={entree} />
        </li>
      ))}
    </ul>
  );
};

export default EntreeCardList;
