import React, { useEffect } from "react";

import Map from "../components/Map";

import "./css/Upload.css";

const Upload = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main>
      <h2>Please Select Location</h2>
      <div id="location-map">
        <Map />
      </div>
      <div id="upload-img">
        <div id="upload-btn">
          <button>
            <img src="img/photo.png" alt="Upload"></img> Upload
          </button>
        </div>
      </div>
    </main>
  );
};

export default Upload;
