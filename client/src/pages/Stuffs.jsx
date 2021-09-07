import React from "react";

import styles from "./css/Stuffs.module.css";

const Stuffs = (props) => {
  return (
    <main className={styles.stuffs}>
      <div className={styles.navigation}>
        {/* eslint-disable-next-line */}
        <div className={`${styles.tab} ${styles.current}`}>
          <a href="#dropLocation">Drop your location</a>
        </div>
        <div className={styles.tab}>
          <a href="#dropLocation">Donation Details</a>
        </div>
        <div className={styles.tab}>
          <a href="#dropLocation">Schedule Pickup</a>
        </div>
        <div className={styles.tab}>
          <a href="#dropLocation">Donor Details</a>
        </div>
        <div className={styles.tab}>
          <a href="#dropLocation">Place Order</a>
        </div>
      </div>
    </main>
  );
};

export default Stuffs;
