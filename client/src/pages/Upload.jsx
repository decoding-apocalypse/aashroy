import React, { useEffect, useState } from "react";

import Map from "../components/Map";

import "./css/Upload.css";

const Upload = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const [location, setLocation] = useState({
    latitude: 28.70406,
    longitude: 77.102493,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  return (
    <main>
      <h2>Please Select Location</h2>
      <div id="location-map">{location && <Map location={location} />}</div>
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
