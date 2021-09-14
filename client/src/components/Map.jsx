import React from "react";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const Map = (props) => {
  const libraries = ["places"];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDtie1SmbFIOXlKF7zu1o9ZSPaBA4-JzwM",
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      zoom={8}
      center={{
        lat: 27.395089,
        lng: 95.614441,
      }}
    ></GoogleMap>
  );
};

export default Map;
