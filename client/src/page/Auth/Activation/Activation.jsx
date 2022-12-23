import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Cookie from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  activationByOtp,
  checkPasswordResendCode,
  resendLink,
} from "../../../redux/auth/authAction";
import createToast from "../../../utility/toast";
import ResetHeader from "../../../components/ResetHeader/ResetHeader";

const Activation = () => {
  const { type } = useParams();

  // dispatch
  const dispatch = useDispatch();
  // code state
  const [code, setCode] = useState("");

  //code update
  const handleChangeCode = (e) => {
    e.preventDefault();
    setCode(e.target.value);
  };

  // navigate
  const navigate = useNavigate();

  // activation email
  const activationEmail = Cookie.get("otp");

  // handle activation cancel
  const handleActivationCancel = (e) => {
    e.preventDefault();
    Cookie.remove("otp");
    navigate("/login");
  };
  // handle  code continue
  const handleCodeContinue = (e) => {
    e.preventDefault();
    if (!code) {
      createToast("OTP code required", "warn");
    } else {
      dispatch(
        activationByOtp(
          {
            code: code,
            email: Cookie.get("otp"),
          },
          navigate
        )
      );
    }
  };

  // resend activationb link
  const handleResendLink = (e) => {
    e.preventDefault();

    dispatch(resendLink(activationEmail, navigate));
  };

  /**
   * password reset
   * @param {*} e
   */
  const handlePasswordReset = (e) => {
    if (!code) {
      createToast("All frields are required", "warn");
    } else {
      dispatch(
        checkPasswordResendCode(
          {
            code: code,
            auth: Cookie.get("otp"),
          },
          navigate
        )
      );
    }
  };
  useEffect(() => {
    if (!activationEmail) {
      navigate("/login");
    }
  });

  return (
    <div>
      <ResetHeader />
      <div className="reset-area">
        <div className="reset-wraper">
          <div className="reset-box">
            <div className="reset-box-header">
              <span className="title">Enter security code</span>
            </div>
            <div className="reset-body">
              <p>
                Please check your emails for a message with your code. Your code
                is 6 numbers long.
              </p>
              <div className="code-box">
                <input type="text" value={code} onChange={handleChangeCode} />
                <div className="code-text">
                  <span>We sent your code to:</span>
                  <span>{activationEmail}</span>
                </div>
              </div>
            </div>
            <div className="reset-footer">
              <a onClick={handleResendLink} href="#">
                Didn't get a code?
              </a>
              <div className="reset-btns">
                <a onClick={handleActivationCancel} className="cancel" href="#">
                  Cancel
                </a>
                <a
                  onClick={
                    type == "account" ? handleCodeContinue : handlePasswordReset
                  }
                  className="continue"
                  href="#"
                >
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Activation;
