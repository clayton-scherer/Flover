import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import EntreeCard from "./components/EntreeCard/EntreeCard";
import defaultEntree from "./components/defaultEntree";
import "./stylesheets/App.css";

const App = () => {
  const [entrees, setEntrees] = useState([]);
  const [entree, setEntree] = useState(defaultEntree);
  let [index, setIndex] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/api/entrees")
      .then(res => res.json())
      .then(entrees => setEntrees(entrees));
  }, []);

  // iterate through entrees array to present the next entree in the 'queue'
  const handleIncrement = () => {
    setEntree(entrees[index]);
    setIndex((index += 1));
  };

  return (
    <Layout>
      <EntreeCard handleIncrement={handleIncrement} entree={entree} />
    </Layout>
  );
};

export default App;
