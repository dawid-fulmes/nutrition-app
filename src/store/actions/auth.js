import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
} from "../actions/actionTypes";
import axios from "axios";

export const authStart = () => ({
  type: AUTH_START,
});

export const authSuccess = (token, userId) => ({
  type: AUTH_SUCCESS,
  token,
  userId,
});

export const authFail = error => ({
  type: AUTH_FAIL,
  error,
});

export const authLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");
  return { type: AUTH_LOGOUT };
};

export const authSetExpirationTimeout = expirationTimeInSec => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expirationTimeInSec * 1000);
  };
};

export const authCheckLocalStorage = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(authLogout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(authLogout());
      } else {
        const userId = localStorage.getItem("userId");
        const expirationTimeInSec =
          (expirationDate.getTime() - new Date().getTime()) / 1000;
        dispatch(authSuccess(token, userId));
        dispatch(authSetExpirationTimeout(expirationTimeInSec));
      }
    }
  };
};

export const auth = (isSignup, email, password) => {
  return dispatch => {
    dispatch(authStart());
    const apiKey = "AIzaSyDB5QRa3_E669ZkSEZaoQX-VIUrgmOF2Ck";
    let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`;
    if (isSignup) {
      url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`;
    }
    const payload = {
      email,
      password,
      returnSecureToken: true,
    };
    axios
      .post(url, payload)
      .then(({ data: { idToken, localId, expiresIn } }) => {
        const expirationDate = new Date(
          new Date().getTime() + expiresIn * 1000
        );
        localStorage.setItem("token", idToken);
        localStorage.setItem("userId", localId);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(idToken, localId));
        dispatch(authSetExpirationTimeout(expiresIn));
      })
      .catch(err => dispatch(authFail(err.response.data.error)));
  };
};
