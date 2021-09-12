import React from "react";

import "./css/Footer.css";

const Footer = (props) => {
  return (
    <footer>
      <p id="contact-us">Contact Us</p>
      <div id="github-link">
        <a href="https://github.com/decoding-apocalypse/aashroy">
          <img src="./img/GitHub-Mark-Light-32px.png" alt="Github"></img>
          <span>Github</span>
        </a>
      </div>
      <div id="copyright-info">
        <span> Copyright © 2018 </span> |<span> Terms Of Use </span> |
        <span> Privacy Policy </span>
      </div>
    </footer>
  );
};

export default Footer;
