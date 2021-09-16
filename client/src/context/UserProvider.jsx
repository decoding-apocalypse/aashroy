import React, { useReducer } from "react";
import UserContext from "./user-context";

const users = [];

const defaultUserState = {
  name: "",
  email: "",
  message: "",
  successfull: false,
};

const userReducer = (state, action) => {
  if (action.type === "LOGIN") {
    const filteredUser = users.find((u) => u.email === action.creds.email);
    if (filteredUser && filteredUser.password === action.creds.password) {
      return {
        name: filteredUser.name,
        email: filteredUser.email,
        message: "Congratulations, You are logged in.",
        successfull: true,
      };
    } else if (
      filteredUser &&
      filteredUser.password !== action.creds.password
    ) {
      return {
        ...state,
        message: "Wrong Password",
        successfull: false,
      };
    } else {
      return {
        ...state,
        message: "E-mail id not in our records. Please Sign Up.",
        successfull: false,
      };
    }
  }

  if (action.type === "SIGNUP") {
    const { name, email, password, passwordConf } = action.creds;
    const filteredUser = users.find((u) => u.email === email);
    if (filteredUser) {
      return {
        ...state,
        successfull: false,
        message: "This email id is already registered. Please login",
      };
    }
    if (password !== passwordConf) {
      return {
        ...state,
        successfull: false,
        message: "Password and Confirm Password doesn't match",
      };
    }
    const newUser = {
      name,
      email,
      password,
    };
    users.push(newUser);
    return {
      name,
      email,
      successfull: true,
      message: "You are successfully signed in",
    };
  }

  if (action.type === "LOGOUT") {
    return defaultUserState;
  }

  return defaultUserState;
};

const UserProvider = (props) => {
  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultUserState
  );

  const handleSignInUser = (name, email, password, passwordConf) => {
    dispatchUserAction({
      type: "SIGNUP",
      creds: { name, email, password, passwordConf },
    });
  };

  const handleLogInUser = (email, password) => {
    dispatchUserAction({ type: "LOGIN", creds: { email, password } });
  };

  const handleLogOutUser = (email = "", password = "") => {
    dispatchUserAction({ type: "LOGOUT", creds: { email, password } });
  };

  const userContext = {
    name: userState.name,
    email: userState.email,
    message: userState.message,
    successfull: userState.successfull,
    signInUser: handleSignInUser,
    logInUser: handleLogInUser,
    logOutUser: handleLogOutUser,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
