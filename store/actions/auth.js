import * as actionTypes from "./actionType";
import axios from "axios";
export const logOut = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
export const checkAuthTimeOut = (expirestime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logOut());
    }, expirestime * 1000);
  };
};
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
export const authSucces = (token, userId) => {
  return {
    type: actionTypes.AUTH_STUCCESS,
    idToken: token,
    userId: userId,
  };
};
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};
export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC0Optdwz_B3eg7jKpiTFX97-C2N2UjYS8";
    if (!isSignUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0Optdwz_B3eg7jKpiTFX97-C2N2UjYS8";
    }
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        dispatch(authSucces(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeOut(response.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};
