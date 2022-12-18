import { combineReducers } from "redux";
import authReducer from "./auth/authReducer.js";
import loaderReducer from "./TopLoadingBar/loaderReducer.js";
import toastReducer from "./toast/toastReducer.js";

// create root reducer
export const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  toast: toastReducer,
  chat: "",
});
