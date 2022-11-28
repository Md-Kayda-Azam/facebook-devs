// initial state
const initialState = {
  msg: "",
  error: "error",
};

/**
 * Create toast
 * @param {*} state
 * @param {*} param1
 */
const toastReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "":
      break;

    default:
      return state;
  }
};

// export default
export default toastReducer;
