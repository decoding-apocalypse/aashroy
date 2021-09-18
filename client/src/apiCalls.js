import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/users/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const signupCall = async (userCredential, dispatch) => {
  dispatch({ type: "SIGNUP_START" });
  const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRe = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const { name, password, passwordConf, email } = userCredential;
  if (!emailRe.test(String(email).toLowerCase())) {
    dispatch({
      type: "SIGNUP_FAILURE",
      payload: {
        message: "Please Enter Valid Email",
      },
    });
    return;
  }
  if (password !== passwordConf) {
    dispatch({
      type: "SIGNUP_FAILURE",
      payload: {
        message: "Password and Confirm Password Doesn't Match",
      },
    });
    return;
  }
  if (!passwordRe.test(password)) {
    dispatch({
      type: "SIGNUP_FAILURE",
      payload: {
        message:
          "Password must contain a symbol, upper and lower case letters and a number",
      },
    });
    return;
  }
  try {
    const res = await axios.post("/users/register", {
      name,
      password,
      email,
    });
    dispatch({ type: "SIGNUP_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "SIGNUP_FAILURE", payload: err });
  }
};

export const logoutCall = (userCredential, dispatch) => {
  dispatch({ type: "LOGOUT_START" });
  setTimeout(() => {
    dispatch({ type: "LOGOUT_SUCCESS" });
  }, 1000);
};
