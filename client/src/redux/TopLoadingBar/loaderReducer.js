import { initialState } from "./initialState";
import { LOADER_END, LOADER_START } from "./loaderType";

/**
 * loader top bar
 * @param {*} state
 * @param {*} param1
 * @returns
 */
const loaderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADER_START:
      return 100;

    case LOADER_END:
      return 0;

    default:
      return state;
  }
};

export default loaderReducer;
