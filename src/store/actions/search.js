import {
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  GET_DETAILS_START,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAIL,
} from "./actionTypes";
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
        if (data.errors) {
          dispatch(searchSuccess([]));
        } else {
          const results = data.list.item.map(({ ndbno, name, group }) => ({
            id: ndbno,
            name,
            group,
            loading: false,
            details: {},
            error: null,
          }));
          dispatch(searchSuccess(results));
        }
      })
      .catch(err => dispatch(searchSuccess(err)));
  };
};

export const getDetailsStart = id => ({
  type: GET_DETAILS_START,
  id,
});

export const getDetailsSuccess = (id, details) => ({
  type: GET_DETAILS_SUCCESS,
  id,
  details,
});

export const getDetailsFail = (id, error) => ({
  type: GET_DETAILS_FAIL,
  id,
  error,
});

export const getDetails = id => {
  return dispatch => {
    dispatch(getDetailsStart(id));
    axios
      .get(" https://api.nal.usda.gov/ndb/V2/reports", {
        params: {
          api_key: "fTsTQzW1ahUyoatxH8fof1ECRiURwTqhvCN9BruK",
          ndbno: id,
          type: "b",
        },
      })
      .then(({ data }) => {
        const labels = ["energy", "protein", "fat", "carbohydrate"];
        const details = {};
        for (let i = 1; i < 5; i++) {
          details[labels[i - 1]] = {
            name: [labels[i - 1]],
            value: data.foods[0].food.nutrients[i].value,
            unit: data.foods[0].food.nutrients[i].unit,
          };
        }
        // console.log(JSON.stringify(data.foods[0].food.nutrients, null, 2));
        dispatch(getDetailsSuccess(id, details));
      })
      .catch(err => dispatch(getDetailsSuccess(id, err)));
  };
};
