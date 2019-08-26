import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import EntreeCard from "./components/EntreeCard/EntreeCard";
import "./stylesheets/App.css";

const App = () => {
  const [entrees, setEntrees] = useState([]);
  const [initialEntree, setInitialEntree] = useState({
    name: "PB&J",
    ingredients: ["Bread", "Peanut Butter", "Jelly"],
    cookTime: "1 minute",
    pictureURL: `https://static.smuckersrms.com/PhotoImage.ashx?recipeid=8492&w=600&h=600`
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/entrees")
      .then(res => res.json())
      .then(entrees => setEntrees(entrees));
  }, []);

  const handlePassIncrement = () => {
    console.log("passed");
    setInitialEntree(entrees[0]);
  };
  const handleLikeIncrement = () => {
    console.log("liked");
    setInitialEntree(entrees[1]);
  };

  return (
    <Layout>
      <EntreeCard
        initialEntree={initialEntree}
        handlePassIncrement={handlePassIncrement}
        handleLikeIncrement={handleLikeIncrement}
      />
    </Layout>
  );
};

export default App;
