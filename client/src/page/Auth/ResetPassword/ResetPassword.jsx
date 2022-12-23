import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import ResetHeader from "../../../components/ResetHeader/ResetHeader";
import { hideEmailOrMobile } from "../../../utility/helper";
import createToast from "../../../utility/toast";

const ResetPassword = () => {
  const navigate = useNavigate();
  // find user data state
  const [findUser, setFindUser] = useState({
    name: "",
    mobile: "",
    email: "",
    photo: "",
  });

  // not you
  const handleNotYou = (e) => {
    e.preventDefault(e);
    Cookies.remove("findUser");
    navigate("/forgot-password");
  };

  useEffect(() => {
    // get all cookies data
    const userData = JSON.parse(Cookies.get("findUser")) ?? null;
    if (userData) {
      setFindUser({
        name: userData.name,
        mobile: userData.mobile ?? null,
        email: userData.email ?? null,
        photo: userData.photo,
      });
    }
  }, []);

  const handlePasswordResetLink = async (e) => {
    e.preventDefault();

    await axios
      .post("/api/v1/user/send-password-reset-otp", {
        auth: findUser.email ?? findUser.mobile,
      })
      .then((res) => {
        createToast(res.data.message, "success");
        navigate("/activation/reset-pass");
      })
      .catch((error) => {
        createToast(error.response.data.message);
      });
  };
  return (
    <>
      <ResetHeader />
      <div className="reset-area">
        <div className="reset-wraper">
          <div className="reset-box">
            <div className="reset-box-header">
              <span className="title">Reset your password</span>
            </div>
            <div className="reset-body">
              <div className="find-user-account">
                <img
                  src={
                    findUser.photo
                      ? findUser.photo
                      : "https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg"
                  }
                  alt=""
                />
                <span>{findUser.name}</span>
                {findUser.mobile && (
                  <p>Mobile : {hideEmailOrMobile(findUser.mobile)}</p>
                )}
                {findUser.email && (
                  <p>Mobile : {hideEmailOrMobile(findUser.email)}</p>
                )}
                <p>To reset your account password, please continue</p>
              </div>
            </div>
            <div className="reset-footer">
              <a href="#"></a>
              <div className="reset-btns">
                <a onClick={handleNotYou} className="cancel" href="#">
                  Not you ?
                </a>
                <a
                  onClick={handlePasswordResetLink}
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
    </>
  );
};

export default ResetPassword;
