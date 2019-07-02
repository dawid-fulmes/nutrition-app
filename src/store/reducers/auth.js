import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
} from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        token: action.token,
        userId: action.userId,
      };
    case AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
      };
    default:
      return state;
  }
};

export default reducer;
