import React from "react";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <h1 className="main-header">Welcome to Flover</h1>
      <RecipeCard />
    </div>
  );
};

export default App;
