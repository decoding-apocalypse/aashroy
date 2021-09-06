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
      <br></br>
      <h1>Articles</h1>
      <div className="news-card-container">
        <div className="news-card">
          <div className="picture-div">
            <img className="article-image" src="./homeless.png"></img>
          </div>
          <div className="links">
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
              Article 1
            </a>
          </div>
        </div>

        <div className="news-card">
          <div className="picture-div">
            <img className="article-image" src="./homeless.png"></img>
          </div>
          <div className="links">
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
              Article 2
            </a>
          </div>
        </div>

        <div className="news-card">
          <div className="picture-div">
            <img className="article-image" src="client/homless.png"></img>
          </div>
          <div className="links">
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
              Article 3
            </a>
          </div>
        </div>

        <div className="news-card">
          <div className="picture-div">
            <img className="article-image" src="./homeless.png"></img>
          </div>
          <div className="links">
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
              Article 4
            </a>
          </div>
        </div>

        <div className="news-card">
          <div className="picture-div">
            <img className="article-image" src="./homeless.png"></img>
          </div>
          <div className="links">
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
              Article 5
            </a>
          </div>
        </div>
      </div>
      <div className="Fund-Raiser">
        <h1>Fund Raiser</h1>

        <div className="Fundcards-group">
          <div className="Fundcard">
            <div className="fundtools-img">
              <img src="./homless.png"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>Name of Organization</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5>$Amount</h5>
            </div>
          </div>
          <div className="Fundcard">
            <div className="fundtools-img">
              <img src="./homless.png"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>Name of Organization</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5>$Amount</h5>
            </div>
          </div>
          <div className="Fundcard">
            <div className="fundtools-img">
              <img src="./homless.png"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>Name of Organization</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5>$Amount</h5>
            </div>
          </div>
          <div className="Fundcard">
            <div className="fundtools-img">
              <img src="./homless.png"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>Name of Organization</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5>$Amount</h5>
            </div>
          </div>
          <div className="Fundcard">
            <div className="fundtools-img">
              <img src="./homless.png"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>Name of Organization</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5>$Amount</h5>
            </div>
          </div>
          <div className="Fundcard">
            <div className="fundtools-img">
              <img src="./homless.png"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>Name of Organization</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5>$Amount</h5>
            </div>
          </div>
          <div className="Fundcard">
            <div className="fundtools-img">
              <img src="./homless.png"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>Name of Organization</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5>$Amount</h5>
            </div>
          </div>
          <div className="Fundcard">
            <div className="fundtools-img">
              <img src="./homless.png"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>Name of Organization</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5>$Amount</h5>
            </div>
          </div>
          <div className="Fundcard">
            <div className="fundtools-img">
              <img src="./homless.png"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>Name of Organization</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5>$Amount</h5>
            </div>
          </div>
          <div className="Fundcard">
            <div className="fundtools-img">
              <img src="./homless.png"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>Name of Organization</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5>$Amount</h5>
            </div>
          </div>
          <div className="Fundcard">
            <div className="fundtools-img">
              <img src="./homless.png"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>Name of Organization</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5>$Amount</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="slogans">
        <h1>Slogans</h1>
      </div>
    </main>
  );
};

// <div className="break-line"></div>
export default Publicaware;
