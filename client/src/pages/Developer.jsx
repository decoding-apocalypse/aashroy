import React, { useEffect } from "react";

// Component import
import Card from "../components/Card";

// Style imports
import styles from "./css/Developer.module.css";

const Developer = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div>
      <h1 className={styles.maintext}>Aashroy</h1>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Developer;
