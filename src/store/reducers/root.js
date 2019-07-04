import { combineReducers } from "redux";

import authReducer from "./auth";
import searchReducer from "./search";
import userReducer from "./user";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  user: userReducer,
});

export default rootReducer;
