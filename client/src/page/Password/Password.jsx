import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import ResetHeader from "../../components/ResetHeader/ResetHeader";

const Password = () => {
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
                <input class="w-100" type="text" placeholder="New password" />
              </div>
            </div>
            <div class="reset-footer">
              <a href="#"></a>
              <div class="reset-btns">
                <Link class="cancel" to="/login">
                  Skip
                </Link>
                <a class="continue" href="#">
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
