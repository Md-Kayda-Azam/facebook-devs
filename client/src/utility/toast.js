import { toast } from "react-toastify";

/**
 * create toast
 * @param {*} message
 * @param {*} type
 */
const createToast = (message, type = "error") => {
  switch (type) {
    case "error":
      toast.error(message);
      break;

    case "success":
      toast.success(message);
      break;

    case "warn":
      toast.warn(message);
      break;

    case "info":
      toast.info(message);
      break;

    default:
      break;
  }
};

// export default
export default createToast;
