import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAIL } from "./actionTypes";
import axios from "axios";

export const searchStart = () => ({
  type: SEARCH_START,
});

export const searchSuccess = results => ({
  type: SEARCH_SUCCESS,
  results,
});

export const searchFail = error => ({
  type: SEARCH_FAIL,
  error,
});

export const search = query => {
  return dispatch => {
    dispatch(searchStart());
    axios
      .get("https://api.nal.usda.gov/ndb/search/", {
        params: {
          api_key: "fTsTQzW1ahUyoatxH8fof1ECRiURwTqhvCN9BruK",
          q: query,
          max: 50,
          ds: "Standard Reference",
          sort: "r",
        },
      })
      .then(({ data }) => {
        const results = data.list.item.map(({ ndbno, name, group }) => ({
          id: ndbno,
          name,
          group,
        }));
        dispatch(searchSuccess(results));
      })
      .catch(err => dispatch(searchSuccess(err)));
  };
};
