import {
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  PROFILE_FEATURED_SAUCCESS,
  PROFILE_PHOTO_SAUCCESS,
  PROFILE_UPDATE_SAUCCESS,
  REAGISTER_FAILED,
  REAGISTER_REQUREST,
  REAGISTER_SUCCESS,
  TOKEN_USER_FAILED,
  TOKEN_USER_SUCCESS,
  USER_LOGOUT,
  COVER_PHOTO_SAUCCESS,
  GET_ALL_USERS,
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
        user: null,
        loginState: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loginState: true,
      };
    case TOKEN_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loginState: true,
      };
    case TOKEN_USER_FAILED:
      return {
        ...state,
        user: null,
        loginState: false,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        loginState: false,
      };
    case PROFILE_UPDATE_SAUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...payload,
        },
      };
    case PROFILE_FEATURED_SAUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...payload,
        },
      };
    case COVER_PHOTO_SAUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...payload,
        },
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload,
      };

    default:
      return state;
  }
};

// export default
export default authReducer;
