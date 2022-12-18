import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import ResetHeader from "../../components/ResetHeader/ResetHeader";
import { useDispatch } from "react-redux";
import createToast from "../../utility/toast";
import { changePassowrd } from "../../redux/auth/authAction";
import Cookies from "js-cookie";

const Password = () => {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (!password) {
      createToast("Password is required");
    } else {
      dispatch(
        changePassowrd(
          {
            id: Cookies.get("cpid"),
            code: Cookies.get("cpcode"),
            password,
          },
          navigate
        )
      );
    }
  };

  return (
    <>
      <ResetHeader />
      <div class="reset-area">
        <div class="reset-wraper">
          <div class="reset-box">
            <div class="reset-box-header">
              <span class="title">Choose a new password</span>
            </div>
            <div class="reset-body">
              <p>
                Create a new password that is at least 6 characters long. A
                strong password has a combination of letters, digits and
                punctuation marks.
              </p>
              <div class="code-box">
                <input
                  class="w-100"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  placeholder="New password"
                />
              </div>
            </div>
            <div class="reset-footer">
              <a href="#"></a>
              <div class="reset-btns">
                <Link class="cancel" to="/login">
                  Skip
                </Link>
                <a class="continue" onClick={handlePasswordChange} href="#">
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

export default Password;
