import {
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  GET_DETAILS_START,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAIL,
} from "../actions/actionTypes";

const initialState = {
  results: [],
  loading: false,
  error: null,
  lastQuery: "",
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
        lastQuery: action.query,
      };
    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        lastQuery: action.query,
      };
    case GET_DETAILS_START:
      return {
        ...state,
        results: state.results.map(result =>
          result.id === action.id ? { ...result, loading: true } : result
        ),
      };
    case GET_DETAILS_SUCCESS:
      return {
        ...state,
        results: state.results.map(result =>
          result.id === action.id
            ? { ...result, loading: false, details: action.details }
            : result
        ),
      };
    case GET_DETAILS_FAIL:
      return {
        ...state,
        results: state.results.map(result =>
          result.id === action.id
            ? { ...result, loading: false, error: action.error }
            : result
        ),
      };
    default:
      return state;
  }
};

export default reducer;
