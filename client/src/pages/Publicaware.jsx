import React, { useEffect } from "react";

import "./css/Publicaware.css";

// components import
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Publicaware = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="Publicaware">
      <Navbar />
      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="first d-block w-100"
                src="..."
                alt="First slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="second d-block w-100"
                src="..."
                alt="Second slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="third d-block w-100"
                src="..."
                alt="Third slide"
              ></img>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="news-card-container">
        <div className="news-card"></div>
        <div className="news-card"></div>
        <div className="news-card"></div>
        <div className="news-card"></div>
        <div className="news-card"></div>
      </div>
      <Footer />
    </main>
  );
};

// <div className="break-line"></div>
export default Publicaware;
