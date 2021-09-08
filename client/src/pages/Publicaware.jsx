import React, { useEffect } from "react";

import "./css/Publicaware.css";

const Publicaware = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="Publicaware">
      <div className="publicaware-carousel">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src="img/about-4.jpg"
                class="d-block w-100 about-img"
                alt="nothing"
              />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src="img/about-5.jpg"
                class="d-block w-100 about-img"
                alt="nothing"
              />
            </div>
            <div class="carousel-item">
              <img
                src="img/about-6.jpg"
                class="d-block w-100 about-img"
                alt="nothing"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br></br>
      <div className="article-box">
        <h1>Articles</h1>
        <div className="news-card-container">
          <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
            <div className="news-card">
              <div className="picture-div">
                <img className="article-image" src="img/homelesspic.jpg"></img>
              </div>
              <div className="links">
                <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
                  Article 1
                </a>
              </div>
            </div>
          </a>

          <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
            <div className="news-card">
              <div className="picture-div">
                <img
                  className="article-image"
                  src="img/homelesspic-1.jpg"
                ></img>
              </div>
              <div className="links">
                <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
                  Article 2
                </a>
              </div>
            </div>
          </a>

          <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
            <div className="news-card">
              <div className="picture-div">
                <img
                  className="article-image"
                  src="img/homelesspic-2.png"
                ></img>
              </div>
              <div className="links">
                <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
                  Article 3
                </a>
              </div>
            </div>
          </a>

          <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
            <div className="news-card">
              <div className="picture-div">
                <img
                  className="article-image"
                  src="img/homelesspic-3.jpg"
                ></img>
              </div>
              <div className="links">
                <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
                  Article 4
                </a>
              </div>
            </div>
          </a>

          <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
            <div className="news-card">
              <div className="picture-div">
                <img
                  className="article-image"
                  src="img/homelesspic-4.jpg"
                ></img>
              </div>
              <div className="links">
                <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
                  Article 5
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="Fund-Raiser">
        <h1>Fund Raiser</h1>

        <div className="Fundcards-group">
          <div className="Fundcard">
            <div className="fundtools-img">
              <img className="fundimage" src="img/fundraiser-1.jpeg"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>Help India Breathe</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5> $ 1,408,612</h5>
            </div>
          </div>
          <div className="Fundcard">
            <div className="fundtools-img">
              <img className="fundimage" src="img/fundraiser-2.jpg"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>KhaanaChahiye</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5>$ 876,585 </h5>
            </div>
          </div>
          <div className="Fundcard">
            <div className="fundtools-img">
              <img className="fundimage" src="img/fundraiser-3.jpg"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>Feed the Hungry</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5>$9,870</h5>
            </div>
          </div>
          <div className="Fundcard">
            <div className="fundtools-img">
              <img className="fundimage" src="img/fundraiser-4.png"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>Help India Breathe</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5>$Amount</h5>
            </div>
          </div>
          <div className="Fundcard">
            <div className="fundtools-img">
              <img className="fundimage" src="img/fundraiser-5.jpg"></img>
            </div>
            <div className="fundtools">
              <h4>Fund Raiser</h4>
              <p>KhaanaChahiye</p>
              <div className="progress">
                <div className="bar"></div>
              </div>
              <h5>$Amount</h5>
            </div>
          </div>
          <div className="Fundcard">
            <div className="fundtools-img">
              <img className="fundimage" src="img/fundraiser-6.jpg"></img>
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
              <img className="fundimage" src="img/fundraiser-7.jpg"></img>
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
              <img className="fundimage" src="img/fundraiser-5.jpg"></img>
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
              <img className="fundimage" src="img/fundraiser-4.png"></img>
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
              <img className="fundimage" src="img/fundraiser-1.jpeg"></img>
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
              <img className="fundimage" src="img/fundraiser-5.jpg"></img>
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

      <br></br>
      <div className="slogans">
        <h1 style={{ "text-align": "center" }}>Slogans</h1>
        <br></br>
        <br></br>
        <div className="slogan-text">
          <br></br>
          <h2>''You Don't Need A Reason To Help People.''</h2>
          <br></br>
          <br></br>
          <br></br>
          <h2 style={{ "text-align": "right" }}>
            ''If You Can't Feed a Hundred People, then Feed Just One.
          </h2>
          <br></br>
          <br></br>
          <br></br>
          <h2 style={{ "text-align": "left" }}>
            ''We Can't Help Everyone But Everyone Can Help Someone.
          </h2>
        </div>
      </div>
    </main>
  );
};

// <div className="break-line"></div>
export default Publicaware;
