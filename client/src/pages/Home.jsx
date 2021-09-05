import React, { useEffect } from "react";

import "./css/Home.css";

const Home = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="Home">
      <h1 className="maintext">Landing Page of Aashroy</h1>
    </main>
  );
};

export default Home;
