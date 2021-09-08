import React, { useEffect } from "react";

import styles from "./css/Error404.module.css";

const Error404 = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className={styles.root}>
      <h1>Error404</h1>
    </main>
  );
};

export default Error404;
