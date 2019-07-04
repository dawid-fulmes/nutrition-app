import {
  GET_USER_DATA_START,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAIL,
} from "../actions/actionTypes";

const initialState = {
  userData: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.userData,
      };
    case GET_USER_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
