import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./css/Login.module.css";

const Login = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.login}>
      <div className={styles.loginContainer}>
        <div className={styles.left}>
          <img src="/img/login.svg" alt="Login" />
          <Link to="/signup" className="msg">
            Create an account
          </Link>
        </div>
        <div className={styles.right}>
          <h2>Welcome Back</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your e-mail"
              className={styles.email}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className={styles.password}
              required
            />
            <button className={styles.loginBtn}>Login</button>
          </form>
          <Link
            style={{ marginTop: "-2rem", marginBottom: "2rem" }}
            to="/forgotpassword"
          >
            Forgot password?
          </Link>
          <div className={styles.create}>
            <Link to="/signup" className="msg">
              Create an account
            </Link>
          </div>
          <div className={styles.externalLinks}>
            <span className={styles.text}>or login using</span>
            <span className={styles.icons}>
              <Link to="/login">
                <img src="/img/icons/google.png" alt="Google" />
              </Link>
            </span>
            <span className={styles.icons}>
              <Link to="/login">
                <img src="/img/icons/facebook.png" alt="Facebook" />
              </Link>
            </span>
            <span className={styles.icons}>
              <Link to="/login">
                <img src="/img/icons/linkedin.png" alt="LinkedIn" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
