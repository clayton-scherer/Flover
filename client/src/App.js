import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import EntreeCardList from "./components/EntreeCardList/EntreeCardList";
import "./stylesheets/App.css";

const App = () => {
  const [entrees, setEntrees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/entrees")
      .then(res => res.json())
      .then(entrees => setEntrees(entrees));
  }, []);

  return (
    <div className="wrapper">
      <Layout>
        <EntreeCardList entrees={entrees} />
      </Layout>
    </div>
  );
};

export default App;
