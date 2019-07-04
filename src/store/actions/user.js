import axios from "axios";

import {
  GET_USER_DATA_START,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAIL,
} from "./actionTypes";

export const getUserDataStart = () => ({
  type: GET_USER_DATA_START,
});

export const getUserDataSuccess = userData => ({
  type: GET_USER_DATA_SUCCESS,
  userData,
});

export const getUserDataFail = error => ({
  type: GET_USER_DATA_FAIL,
  error,
});

export const getUserData = (token, userId) => {
  return dispatch => {
    dispatch(getUserDataStart());
    const url = `https://nutrition-app-f282e.firebaseio.com/users/${userId}/userData.json`;
    const config = {
      params: {
        auth: token,
      },
    };
    axios
      .get(url, config)
      .then(({ data }) => {
        dispatch(getUserDataSuccess(data));
      })
      .catch(err => dispatch(getUserDataFail(err.response.data)));
  };
};
