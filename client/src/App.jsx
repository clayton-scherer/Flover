import React from "react";
import Layout from "./components/Layout/Layout";
import EntreeCard from "./components/EntreeCard/EntreeCard";
import "./stylesheets/App.css";

const App = () => {
  // const [entrees, setEntrees] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/entrees")
  //     .then(res => res.json())
  //     .then(entrees => setEntrees(entrees));
  // }, []);

  const handlePassIncriment = () => {
    console.log("passed");
  };
  const handleLikeIncriment = () => {
    console.log("liked");
  };

  return (
    <Layout>
      <EntreeCard
        handlePassIncriment={handlePassIncriment}
        handleLikeIncriment={handleLikeIncriment}
      />
    </Layout>
  );
};

export default App;
