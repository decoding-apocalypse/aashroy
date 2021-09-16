import React, { useContext, useEffect } from "react";
import UserContext from "../context/user-context";

import styles from "./css/Logout.module.css";

const Logout = (props) => {
  const userCtx = useContext(UserContext);
  useEffect(() => {
    setTimeout(() => {
      props.history.push("/");
    }, 2000);
  }, [props.history]);

  return (
    <main className={styles.logout}>
      <h1>
        {userCtx.successfull ? "Logging you out" : "You are already logged out"}
      </h1>
      {userCtx.successfull ? (
        <>
          <p>Please visit out website again</p>
          <div>
            <svg
              version="1.1"
              id="loader-1"
              x="0px"
              y="0px"
              width="40px"
              height="40px"
              viewBox="0 0 50 50"
              style={{ enableBackground: "new 0 0 50 50", width: "5rem" }}
            >
              <path
                fill="var(--theme1-100)"
                d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
              >
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 25 25"
                  to="360 25 25"
                  dur="0.6s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </>
      ) : (
        ""
      )}
    </main>
  );
};

export default Logout;
