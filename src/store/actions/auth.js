import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from "../actions/actionTypes";
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
      .then(({ data: { idToken, localId } }) => {
        dispatch(authSuccess(idToken, localId));
      })
      .catch(err => dispatch(authFail(err.response.data.error)));
  };
};
