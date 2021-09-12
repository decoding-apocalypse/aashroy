import React, { useEffect } from "react";

import "./css/AboutUs.css";

const AboutUs = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="AboutUs">
      <div className="about-carousel">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active about-img" data-bs-interval="10000">
              <img
                src="img/about-4.jpg"
                class="d-block w-100 "
                alt="nothing"
              />
            </div>
            <div class="carousel-item about-img" data-bs-interval="2000">
              <img
                src="img/about-5.jpg"
                class="d-block w-100 "
                alt="nothing"
              />
            </div>
            <div class="carousel-item about-img">
              <img
                src="img/about-6.jpg"
                class="d-block w-100 "
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
      <div className="AboutUs-box">
        <h1>About Aashroy</h1>
        <div className="about-content">
          <p>
            We exist to defend the right to a safe home and to provide care and
            support to the homeless. Join us in ending the devastating impact to
            the homeless has on community and to Human Rights preservation and
            protection.With your help we plan to remove homelessness in our
            society and remove the crimes against them and make our society a
            better place.
          </p>
        </div>
      </div>
      <div className="about-part">
        <div class="about-card about-card-all">
          <img src="img/about-card-1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Donation</h5>
            <p class="card-text">
              Donate today for a better cause and for serving humanity.
            </p>
            <div
              class="card-btn btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" class="btn btn-outline-warning">
                <a href="/donate">Donate Now</a>
              </button>
            </div>
          </div>
        </div>
        <div class="about-card-2 ">
          <img src="img/about-card-2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <br />
              Public Awareness{" "}
            </h5>
            <p class="card-text">
              Understand about basic the Human Rights and the need of basic
              housing.
            </p>
            <div
              class="card-btn btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" class="btn btn-outline-warning">
                <a href="public-awareness">Public Awareness</a>
              </button>
            </div>
          </div>
        </div>
        <div class="about-card-3 ">
          <img src="img/about-card-3.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Report any illegal activity</h5>
            <p class="card-text">
              Report any illegal and suspicious activity in your neighborhood.
            </p>
            <div
              class="card-btn btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" class="btn btn-outline-warning">
                <a href="/report"> Report Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="takeAction">
        <h1>Change comes from within</h1>
        <hr />
        <div className="takeAction-content">
          Change only happens when you get involved.
        </div>
      </div>
      <div className="about-partners">
        <div className="partners-content">
          <h2>Join us in our fight now!</h2>
          <div className=".">
            <table className="about-ngoList">
              <thead>
                <tr className="table-heading">
                  <th>Sl.No</th>
                  <th>Name of the NGO</th>
                  <th>Address</th>
                  <th>Contact No.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    BRIGHT FUTURE FOR PEOPLES AND RURAL AREA DEVELOPMENT OF
                    ASSAM
                  </td>
                  <td>
                    Old UBI Bank Building, 2nd floor, Bhuragaon Natun Bazar,
                    P.O. Bhuragaon, P.S. Bhuragaon, MARIGAON, 782121
                  </td>
                  <td> 9435117309</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>A CHIK BAPTIST CONVENTION</td>
                  <td>BAGPARA, P.O KHAGARPUR, DIST: BONGAIGAON</td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>A RAY OF HOPE SOCIETY</td>
                  <td>C/O:Madhu Sudhan Sarkar,Haflong Bazar PO/PS:HAFLONG</td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    A SOCIAL FOR HUMAN RESOURCE ORGANISATION AND IMPROVEMENTS
                  </td>
                  <td>Rup Nagar, Nalbari Gaon, PO- Gopalbazar,</td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>AADHAAR SHIKSHA TRUST</td>
                  <td>
                    C/o MINI BORO, HOUSE NO 21, ULUBARI, KACHARI BASTI, GUWAHATI
                    781007{" "}
                  </td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>AADYA SRISHTI KALA MANDIR CULTURAL SOCIETY</td>
                  <td>S. DAHUTIA ROAD , BORPATHAR , TINSUKIA , TINSUKIA</td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>AAGAN</td>
                  <td>
                    Hathimata Road, Ward No: 8, Opposite Surat Press, Kokrajhar,
                    Assam.
                  </td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>AANRKAPOR</td>
                  <td>
                    AANRKAPOR C/O: Dhiraj Kumar S/O ; Arjun Ch. Kumar P.OVill:
                    Gotanagar PNGB Road House No: 4 Near Gotanagar Nursery
                    Guwahati-781011
                  </td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Aasha (A Hope) Foundation and Social Welfare Society</td>
                  <td>
                    c/o Benzir Arfan, House no. 98, 2nd floor, Panbazar, Danish
                    Road, Lakhtokia, Districtkamrup (M), Guwahati. Assam.
                    Pincode781001. India
                  </td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>AASTHA FOUNDATION</td>
                  <td>
                    AASTHA FOUNDATION,CHOW CHAKRA BUILDING,N.N.DUTTA ROAD
                    ,SILCHAR-788001
                  </td>
                  <td>XXX</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
