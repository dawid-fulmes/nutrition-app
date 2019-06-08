import {
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
} from "../actions/actionTypes";

const initialState = {
  results: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.results,
      };
    case SEARCH_FAIL:
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
