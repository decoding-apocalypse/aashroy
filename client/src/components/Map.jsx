import React from "react";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];

const Map = (props) => {
  const { latitude, longitude } = props.location;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDtie1SmbFIOXlKF7zu1o9ZSPaBA4-JzwM",
    libraries: libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      zoom={8}
      center={{
        lat: latitude,
        lng: longitude,
      }}
    ></GoogleMap>
  );
};

export default Map;
