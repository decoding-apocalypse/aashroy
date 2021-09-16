import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/user-context";

import styles from "./css/Signup.module.css";

const Signup = (props) => {
  const userCtx = useContext(UserContext);

  const isSignedIn = userCtx.successfull;

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  useEffect(() => {
    userCtx.logOutUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isSignedIn) {
      setTimeout(() => {
        props.history.push("/");
      }, 3000);
    }
  }, [isSignedIn, props.history]);

  const handleUserData = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, passwordConf } = userData;
    userCtx.signInUser(name, email, password, passwordConf);
  };

  return (
    <main className={styles.signup}>
      {!isSignedIn ? (
        <div className={styles.signupContainer}>
          <div className={styles.left}>
            <img src="/img/signup.svg" alt="Login" />
          </div>
          <div className={styles.right}>
            <h2>Sign In</h2>
            {userCtx.successfull ? (
              ""
            ) : (
              <p className={styles.errorMsg}>{userCtx.message}</p>
            )}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleUserData}
                placeholder="Enter Name"
                className={styles.name}
                required
              />
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleUserData}
                placeholder="Enter E-mail"
                className={styles.email}
                required
              />
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleUserData}
                placeholder="Enter password"
                className={styles.password}
                required
              />
              <input
                type="password"
                name="passwordConf"
                value={userData.passwordConf}
                onChange={handleUserData}
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
      ) : (
        <div className={styles.signedIn}>
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

export default Signup;
