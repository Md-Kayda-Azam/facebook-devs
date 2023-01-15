import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import ResetHeader from "../../../components/ResetHeader/ResetHeader";
import createToast from "../../../utility/toast";

const FindUserAccount = () => {
  const [auth, setAuth] = useState("");
  const [show, setShow] = useState({
    type: "",
  });
  // const ref = useRef(null);

  const navigate = useNavigate();
  // handle input change
  const handleInputChange = (e) => {
    setAuth(e.target.value);
  };
  const handleFindUser = (e) => {
    e.preventDefault();
    if (!auth) {
      createToast("Input fields is reqired");
      setShow({ type: "authempty" });
      // ref.current.style.display = "block";
    } else {
      axios
        .post("/api/v1/user/find-user-account", {
          auth,
        })
        .then((res) => {
          navigate("/find-account");
        })
        .catch((error) => {
          createToast(error.response.data.message);
          setShow({ type: "existsNot" });
        });
    }
  };

  return (
    <>
      <ResetHeader />
      <div className="reset-area">
        <div className="reset-wraper">
          <div className="reset-box">
            <div className="reset-box-header">
              <span className="title">Find Your Account</span>
            </div>
            <div className="reset-body">
              {show.type === "authempty" && (
                <div id="feilds" className="feilds">
                  <div className="text">
                    <h4>Please fill in at least one filed </h4>
                    <p>
                      Fill in at least in one field to search for your account
                    </p>
                  </div>
                </div>
              )}
              {show.type === "existsNot" && (
                <div id="feilds" className="feilds">
                  <div className="text">
                    <h4>No search results</h4>
                    <p>
                      Your search did not return any results. please try again
                      with other information
                    </p>
                  </div>
                </div>
              )}

              <p>
                Please enter your email address or mobile number to search for
                your account.
              </p>
              <div className="code-box">
                <input
                  name="auth"
                  value={auth}
                  onChange={handleInputChange}
                  className="w-100"
                  type="text"
                  placeholder="Email address or mobile number"
                />
              </div>
            </div>
            <div className="reset-footer">
              <a href="#"></a>
              <div className="reset-btns">
                <Link className="cancel" to="/">
                  Cancel
                </Link>
                <a
                  type="submit"
                  onClick={handleFindUser}
                  href="#"
                  className="continue"
                  to="/find-account"
                >
                  Search
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

export default FindUserAccount;

/**
 * <h4>No search results</h4>
 * <p> Your search did not return any results. please try again
                      with other information</p>
 */
