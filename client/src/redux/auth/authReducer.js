import {
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

    default:
      return state;
  }
};

// export default
export default authReducer;
