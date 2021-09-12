import React, { useEffect } from "react";

import "./css/Publicaware.css";

const Publicaware = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div className="Publicaware">
      <div className="jumbotron">
        <div className="sos">Save</div>
        <div className="sos">Our</div>
        <div className="sos">Society</div>
      </div>
      <div className="logo-container">
        <div className="logo"></div>
      </div>

      <div className="aware-content">
        <div className="article-box">
          <br></br>
          <br></br>
          <h2>ARTICLES</h2>
          <br></br>
          <div className="news-card-container">
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
              <div className="news-card">
                <img className="article-image" src="img/homelesspic.jpg"></img>
                <div className="article-text">Article 1</div>
              </div>
            </a>

            <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
              <div className="news-card">
                <img
                  className="article-image"
                  src="img/homelesspicssize1.jpg"
                ></img>
                <div className="article-text">Article 2</div>
              </div>
            </a>

            <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
              <div className="news-card">
                <img
                  className="article-image"
                  src="img/homelesspicssize3.jpg"
                ></img>
                <div className="article-text">Article 3</div>
              </div>
            </a>

            <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
              <div className="news-card">
                <img
                  className="article-image"
                  src="img/homelesspicssize2.jpg"
                ></img>
                <div className="article-text">Article 4</div>
              </div>
            </a>

            <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
              <div className="news-card">
                <img
                  className="article-image"
                  src="img/homelesspicssize4.jpg"
                ></img>
                <div className="article-text">Article 5</div>
              </div>
            </a>

            <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
              <div className="news-card">
                <img
                  className="article-image"
                  src="img/homelesspicssize5.jpg"
                ></img>
                <div className="article-text">Article 6</div>
              </div>
            </a>

            <a href="https://www.ncbi.nlm.nih.gov/books/NBK218239/">
              <div className="news-card">
                <img
                  className="article-image"
                  src="img/homelesspicssize6.jpg"
                ></img>
                <div className="article-text">Article 7</div>
              </div>
            </a>
          </div>
        </div>

        <div className="Fund-Raiser">
          <h2>Fund Raiser</h2>

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
                <h5>$89,870</h5>
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
                <h5>$34,560</h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img className="fundimage" src="img/fundraiser-5.jpg"></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>A Better life</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$ 69,585 </h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img className="fundimage" src="img/fundraiser-6.jpg"></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>Charitable Change</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$ 76,585 </h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img className="fundimage" src="img/fundraiser-7.jpg"></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>Charity Cause</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$ 16,585</h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img className="fundimage" src="img/homelesspic-9.jpg"></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>Thirst</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$ 6,585</h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img className="fundimage" src="img/homelesspic-8.jpg"></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>Place for all</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$ 46,585</h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img className="fundimage" src="img/homelesspic-4.jpg"></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>Hungry for Food</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$ 76,585</h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img className="fundimage" src="img/homelesspic-2.png"></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>Asha</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$ 33,585</h5>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <div className="slogans">
          <h2 style={{ "text-align": "center" }}>Slogans</h2>
          <br></br>
          <br></br>
          <div className="slogan-text">
            <br></br>
            <div className="slogan-text-each">
              <h3>''You Don't Need A Reason To Help People.''</h3>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <div className="slogan-text-each">
              <h3 style={{ "text-align": "right" }}>
                ''If You Can't Feed a Hundred People, then Feed Just One.''
              </h3>
            </div>

            <br></br>
            <br></br>
            <br></br>

            <div className="slogan-text-each">
              <h3 style={{ "text-align": "left" }}>
                ''We Can't Help Everyone But Everyone Can Help Someone.''
              </h3>
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

// <div className="break-line"></div>
export default Publicaware;
