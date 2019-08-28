import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import EntreeCard from "./components/EntreeCard/EntreeCard";
import TutorialCard from "./components/TutorialCard/TutorialCard";
import NoMatches from "./components/NoMatches/NoMatches";
import "./stylesheets/App.css";

const App = () => {
  const [entrees, setEntrees] = useState([]);
  const [entree, setEntree] = useState({});
  const [tutorial, setTutorial] = useState(true);
  const [noMatches, setNoMatches] = useState(false);
  let [index, setIndex] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/api/entrees")
      .then(res => res.json())
      .then(entrees => setEntrees(entrees));
  }, []);

  useEffect(() => {
    setEntree(entrees[index]);
  }, [entrees, index]);

  const handleIncrement = () => {
    setEntree(entrees[index]);
    setIndex((index += 1));
    if (index === entrees.length) {
      setNoMatches(true);
    }
  };

  const handleTutorial = () => {
    setTutorial(false);
  };

  return (
    <Layout>
      {tutorial ? (
        <TutorialCard handleTutorial={handleTutorial} />
      ) : noMatches ? (
        <NoMatches />
      ) : (
        <EntreeCard handleIncrement={handleIncrement} entree={entree} />
      )}
    </Layout>
  );
};

export default App;
