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
      <div id="home-info">
        <h2>How we complete local needs</h2>
        <div>
          <img src="./img/localneeds.svg"></img>
        </div>
        <div id="info-1" className="infos">
          <h4>Assess the Need</h4>
          <span>FIRST, we assess the 
          needs of each community in which we serve. 
          We work to understand the obstacles, hardships, 
          and challenges native to the area's particular 
          population.</span>
        </div>
        
        <div id="info-2" className="infos">
          <h4>Build the Programs</h4>
          <span>NEXT, we build local programs 
          designed to offer immediate relief, short-term 
          care, and long-term growth in the areas that will 
          best benefit the community.</span>
        </div>
        
        <div id="info-3" className="infos">
          <h4>Invest in the Community</h4>
          <span>THEN, we offer the local 
          programs to the local community, working to 
          continually optimize their efficacy via spiritual, 
          physical, and emotional service.</span>
        </div>
      </div> 
      </main>
      );
};

export default Home;
