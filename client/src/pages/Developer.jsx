import React, { useEffect } from "react";

// Component import
import Card from "../components/Card";

import "./css/Developer.css";

const Developer = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, []);
  return (
    <div>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Developer;
