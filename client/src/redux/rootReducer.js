import { combineReducers } from "redux";
import authReducer from "./auth/authReducer.js";
import toastReducer from "./toast/toastReducer.js";

// create root reducer
export const rootReducer = combineReducers({
  auth: authReducer,
  toast: toastReducer,
  chat: "",
});
