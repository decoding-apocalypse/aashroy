import React from "react";

import styles from "./css/Stuffs.module.css";

const Stuffs = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector("#paymentCard").childNodes.forEach((card) => {
      card.classList.add("hide");
    });
    document.querySelector(`${e.target.hash}`).classList.add("show");
    document.querySelector(`${e.target.hash}`).classList.remove("hide");
  };
  return (
    <main className={styles.stuffs}>
      <div className={styles.navigation}>
        {/* eslint-disable-next-line */}
        <div className={`${styles.tab} ${styles.current}`}>
          <a href="#dropLocation" onClick={handleClick}>
            Drop your location
          </a>
        </div>
        <div className={styles.tab}>
          <a href="#donationDetails" onClick={handleClick}>
            Donation Details
          </a>
        </div>
        <div className={styles.tab}>
          <a href="#schedulePickup" onClick={handleClick}>
            Schedule Pickup
          </a>
        </div>
        <div className={styles.tab}>
          <a href="#donorDetails" onClick={handleClick}>
            Donor Details
          </a>
        </div>
        <div className={styles.tab}>
          <a href="#placeOrder" onClick={handleClick}>
            Place Order
          </a>
        </div>
      </div>
      <div className={styles.paymentCard} id="paymentCard">
        <div className={`${styles.card} show`} id="dropLocation">
          <h2>Help us with your exact location</h2>
          <input type="text" placeholder="Type your location" />
          <button>Search</button>
        </div>
        <div className={styles.card} id="donationDetails">
          <h2>Pick your donation items</h2>
        </div>
        <div className={styles.card} id="schedulePickup">
          <h2>Schedule your pickup</h2>
        </div>
        <div className={styles.card} id="donorDetails">
          <h2>Please enter your details</h2>
        </div>
        <div className={styles.card} id="placeOrder">
          <h2>Place your order, our team will arrive shortly</h2>
        </div>
      </div>
    </main>
  );
};

export default Stuffs;
