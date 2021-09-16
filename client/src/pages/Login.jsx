import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/user-context";

import styles from "./css/Login.module.css";

const Login = (props) => {
  const userCtx = useContext(UserContext);

  const isLoggedIn = userCtx.successfull;

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  useEffect(() => {
    userCtx.logOutUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        props.history.push("/");
      }, 3000);
    }
  }, [isLoggedIn, props.history]);

  const handleUserInput = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userData;
    userCtx.logInUser(email, password);
  };

  return (
    <main className={styles.login}>
      {!isLoggedIn ? (
        <div className={styles.loginContainer}>
          <div className={styles.left}>
            <img src="/img/login.svg" alt="Login" />
            <Link to="/signup" className="msg">
              Create an account
            </Link>
          </div>
          <div className={styles.right}>
            <h2>Welcome Back</h2>
            {userCtx.successfull ? (
              ""
            ) : (
              <p className={styles.errorMsg}>{userCtx.message}</p>
            )}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleUserInput}
                placeholder="Your e-mail"
                className={styles.email}
                required
              />
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleUserInput}
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
      ) : (
        <div className={styles.loggedIn}>
          <h2>You are logged in</h2>
          <Link className={styles.homeBtn} to="/">
            Visit Homepage
          </Link>
          <br />
          <p>Or you will be redirected in 3 secs</p>
        </div>
      )}
    </main>
  );
};

export default Login;
