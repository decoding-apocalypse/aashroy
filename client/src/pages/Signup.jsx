import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./css/Signup.module.css";

const Signup = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.signup}>
      <div className={styles.signupContainer}>
        <div className={styles.left}>
          <img src="/img/signup.svg" alt="Login" />
        </div>
        <div className={styles.right}>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className={styles.name}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter E-mail"
              className={styles.email}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className={styles.password}
              required
            />
            <input
              type="password"
              name="passwordConf"
              placeholder="Confirm password"
              className={styles.password}
              required
            />
            <button className={styles.loginBtn}>Signup</button>
          </form>
          <p>
            Already signup? <Link to="/login">Login</Link>
          </p>
          <div className={styles.externalLinks}>
            <span className={styles.text}>or signup using</span>
            <span className={styles.icons}>
              <Link to="/signup">
                <img src="/img/icons/google.png" alt="Google" />
              </Link>
            </span>
            <span className={styles.icons}>
              <Link to="/signup">
                <img src="/img/icons/facebook.png" alt="Facebook" />
              </Link>
            </span>
            <span className={styles.icons}>
              <Link to="/signup">
                <img src="/img/icons/linkedin.png" alt="LinkedIn" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
