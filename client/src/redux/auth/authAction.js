import createToast from "../../utility/toast";
import axios from "axios";
import {
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUREST,
  LOGIN_USER_SUCCESS,
  REAGISTER_FAILED,
  REAGISTER_SUCCESS,
} from "./actionType";
import Cookie from "js-cookie";
import { LOADER_START } from "../TopLoadingBar/loaderType";

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
          navigate("/activation/account");
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
      await axios
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

/**
 * reset link
 * @param {*} email
 * @param {*} navigate
 * @returns
 */
export const resendLink = (email, navigate) => async (dispatch) => {
  try {
    await axios
      .post("/api/v1/user/resend-activate", { auth: email })
      .then((res) => {
        createToast(res.data.message, "success");
        navigate("/activation/account");
      })
      .catch((error) => {
        createToast(error.response.data.message);
      });
  } catch (error) {
    createToast(error.response.data.message);
  }
};

/**
 * check password
 * @param {*} data
 * @param {*} navigate
 * @returns
 */
export const checkPasswordResendCode = (data, navigate) => async (dispatch) => {
  try {
    await axios
      .post("/api/v1/user/check-password-reset-otp", {
        auth: data.auth,
        code: data.code,
      })
      .then((res) => {
        createToast(res.data.message, "success");
        navigate("/change-password");
      })
      .catch((error) => {
        createToast(error.response.data.message);
      });
  } catch (error) {
    createToast(error.response.data.message);
  }
};

/**
 * change pasword
 * @param {*} data
 * @param {*} navigate
 * @returns
 */
export const changePassowrd = (data, navigate) => async (dispatch) => {
  try {
    await axios
      .post("/api/v1/user/user-password-reset", {
        id: data.id,
        code: data.code,
        password: data.password,
      })
      .then((res) => {
        createToast(res.data.message, "success");
        navigate("/login");
      })
      .catch((error) => {
        createToast(error.response.data.message);
      });
  } catch (error) {
    createToast(error.respone.data.message);
  }
};

/**
 * user login
 * @param {*} data
 * @param {*} navigate
 * @returns
 */
export const userLogin = (data, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_USER_REQUREST,
    });
    await axios
      .post("/api/v1/user/login", {
        auth: data.auth,
        password: data.password,
      })
      .then((res) => {
        createToast(res.data.message, "success");
        navigate("/");
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: res.data.user,
        });
        dispatch({
          type: LOADER_START,
        });
      })
      .catch((error) => {
        createToast(error.response.data.message);
        dispatch({
          type: LOGIN_USER_FAILED,
        });
      });
  } catch (error) {
    createToast(error.respone.data.message);
  }
};
