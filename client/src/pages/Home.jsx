import React, { useEffect } from "react";

import "./css/Home.css";

const Home = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="Home">
      <div id="carousel">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="img/carousal-1-(1).jpg"
                class="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div class="carousel-item">
              <img
                src="img/carousal-2-(1).jpg"
                class="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div class="carousel-item">
              <img
                src="img/carousal-3-(1).jpg"
                class="d-block w-100"
                alt="..."
              ></img>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div id="home-map">
        <img src="img/assam.png"></img>
      </div>
      <div id="upload-img">
        <a class="donate-button" href="#">
          Upload Now
        </a>
      </div>
      <div id="home-info">
        <h2>How we complete local needs</h2>
        <div>
          <img src="./img/localneeds.svg" alt="local needs"></img>
        </div>
        <div id="info-1" className="infos">
          <h4>Assess the Need</h4>
          <span>
            FIRST, we assess the needs of each community in which we serve. We
            work to understand the obstacles, hardships, and challenges native
            to the area's particular population.
          </span>
        </div>

        <div id="info-2" className="infos">
          <h4>Build the Programs</h4>
          <span>
            NEXT, we build local programs designed to offer immediate relief,
            short-term care, and long-term growth in the areas that will best
            benefit the community.
          </span>
        </div>

        <div id="info-3" className="infos">
          <h4>Invest in the Community</h4>
          <span>
            THEN, we offer the local programs to the local community, working to
            continually optimize their efficacy via spiritual, physical, and
            emotional service.
          </span>
        </div>
      </div>
    </main>
  );
};

export default Home;
