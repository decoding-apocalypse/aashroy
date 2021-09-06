import React, { useEffect } from "react";

import "./css/Home.css";

const Home = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="Home">
      <h2 id="carousel">carousel</h2>
      <h2 id="home-map">Map</h2>
      <div id="upload-img">
        <img src="img/photo.png" id="upload-png" alt="Upload"></img>
        <h2>Upload Here</h2>
      </div>
    </main>
  );
};

export default Home;
