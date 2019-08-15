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

  return (
    <Layout>
      <div className="entree-card__wrapper">
        <EntreeCard />
      </div>
    </Layout>
  );
};

export default App;
