import {
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  REAGISTER_FAILED,
  REAGISTER_REQUREST,
  REAGISTER_SUCCESS,
} from "./actionType.js";
import initialState from "./initialState.js";

/**
 * Create auth reducer
 * @param {*} state
 * @param {*} param1
 * @returns
 */
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REAGISTER_REQUREST:
      return {
        ...state,
        loading: true,
      };
    case REAGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
      };
    case REAGISTER_FAILED:
      return {
        ...state,
        loading: false,
        message: payload,
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        user: {},
        loginState: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loginState: true,
      };

    default:
      return state;
  }
};

// export default
export default authReducer;
