import createToast from "../../utility/toast";
import axios from "axios";
import { REAGISTER_FAILED, REAGISTER_SUCCESS } from "./actionType";
import Cookie from "js-cookie";

/**
 * user register
 * @param {*} data
 * @param {*} e
 * @param {*} setInput
 * @param {*} setRegister
 * @param {*} navigate
 * @returns
 */
export const userRegister =
  (data, e, setInput, setRegister, navigate) => async (dispatch) => {
    try {
      dispatch({ type: REAGISTER_SUCCESS });
      await axios
        .post("/api/v1/user/register", data)
        .then((res) => {
          createToast("User registation successful", "success");
          setInput({
            fname: "",
            sname: "",
            emailormobile: "",
            password: "",
            day: "",
            month: "",
            year: "",
            gender: "",
          });
          e.target.reset();
          setRegister(false);
          navigate("/activation");
        })
        .catch((error) => {
          createToast(error.response.data.message, "error");
          dispatch({
            type: REAGISTER_FAILED,
            payload: error.response.data.message,
          });
        });
    } catch (error) {
      createToast(error.response.data.message, "error");
      dispatch({
        type: REAGISTER_FAILED,
        payload: error.response.data.message,
      });
    }
  };

/**
 * user activation by otp
 * @param {*} param0
 * @param {*} navigate
 * @returns
 */
export const activationByOtp =
  ({ code, email }, navigate) =>
  async (dispatch) => {
    try {
      const activate = await axios
        .post("/api/v1/user/code-activate", {
          code: code,
          email: email,
        })
        .then(() => {
          createToast("Account activate successful", "success");
          Cookie.remove("otp");
          navigate("/login");
        })
        .catch((error) => {
          createToast(error.response.data.message);
        });
    } catch (error) {
      createToast(error.response.data.message);
    }
  };

export const resendLink = (email, navigate) => async (dispatch) => {
  try {
    const activate = await axios
      .post("/api/v1/user/resend-activate", { email: email })
      .then((res) => {
        createToast(res.data.message, "success");
        navigate("/activation");
      })
      .catch((error) => {
        createToast(error.response.data.message);
      });
  } catch (error) {
    createToast(error.response.data.message);
  }
};
