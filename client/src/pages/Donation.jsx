import React, { useEffect } from "react";

import styles from "./css/Donation.module.css";

const Donation = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className={styles.Donation}>
      <h1 className="heading">Donation</h1>
      <div className={styles.card}>
        <div className={styles.money}>
          <img src="/img/icons/money.png" alt="money" />
          <p>Donate money</p>
          <a href="/donation/money">Donate</a>
        </div>
        <div className={styles.stuffs}>
          <img src="/img/icons/stuffs.png" alt="stuffs" />
          <p>Donate food, clothes or medicines</p>
          <a href="/donation/stuffs">Donate</a>
        </div>
      </div>
    </main>
  );
};

export default Donation;
