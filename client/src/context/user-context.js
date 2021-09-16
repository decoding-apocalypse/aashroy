import React from "react";

const UserContext = React.createContext({
  name: "",
  email: "",
  successfull: false,
  message: "",
  signInUser: (name, email, password) => {},
  logInUser: (email, password) => {},
  logOutUser: (email = "", password = "") => {},
});

export default UserContext;
