import React from "react";

import "./css/Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        AASHROY
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <span className="hover-anim">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              <span className="hover-anim">About Us</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/donation">
              <span className="hover-anim">Donation</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/public-awareness">
              <span className="hover-anim">Public Awareness</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/developers">
              <span className="hover-anim">Developers</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
