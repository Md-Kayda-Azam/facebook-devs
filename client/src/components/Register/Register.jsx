import React from "react";
import { useState } from "react";
import crossBtn from "../../_assets/icons/cross.png";
import ReactTooltip from "react-tooltip";
import createToast from "../../utility/toast";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/auth/authAction";
import { useNavigate } from "react-router-dom";

/// form day get
const day = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// form month get
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// form year get
const year = Array.from(
  { length: 115 },
  (_, i) => new Date().getFullYear() - i
);

const Register = ({ setRegister }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const date = new Date();
  // input get useState
  const [input, setInput] = useState({
    fname: "",
    sname: "",
    emailormobile: "",
    password: "",
    day: date.getDate(),
    month: month[date.getMonth()],
    year: date.getFullYear(),
    gender: "",
  });

  // form validate
  const [validate, setValidate] = useState({
    fname: false,
    sname: false,
    emailormobile: false,
    password: false,
  });
  // form validate
  const [validateFocus, setValidateFocus] = useState({
    fname: false,
    sname: false,
    emailormobile: false,
    password: false,
  });

  /**
   * handle state update
   * @param {*} e
   */
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  /**
   * handle input validate
   * @param {*} e
   */
  const handleInputValidate = (e) => {
    const fieldName = e.target.name;

    if (!input[fieldName]) {
      setValidate((prevState) => ({
        ...prevState,
        [fieldName]: true,
      }));
    } else {
      setValidate((prevState) => ({
        ...prevState,
        [fieldName]: false,
      }));
    }
    setValidateFocus((prevState) => ({
      ...prevState,
      [fieldName]: false,
    }));
  };

  /**
   * handle input validate
   * @param {*} e
   */
  const handleInputFocus = (e) => {
    const fieldName = e.target.name;

    if (!input[fieldName]) {
      setValidate((prevState) => ({
        ...prevState,
        [fieldName]: false,
      }));
      setValidateFocus((prevState) => ({
        ...prevState,
        [fieldName]: true,
      }));
    } else {
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      !input.fname ||
      !input.sname ||
      !input.password ||
      !input.gender ||
      !input.emailormobile
    ) {
      createToast("All fields arre required", "error");
    } else {
      dispatch(
        userRegister(
          {
            first_name: input.fname,
            sur_name: input.sname,
            auth: input.emailormobile,
            password: input.password,
            birth_day: input.day,
            birth_month: input.month,
            birth_year: input.year,
            gender: input.gender,
          },
          e,
          setInput,
          setRegister,
          navigate
        )
      );
    }
  };

  return (
    <div>
      <ReactTooltip />
      <div className="blur-box tooltip">
        <div className="sign-up-card">
          <div className="sign-up-header">
            <div className="sign-up-content">
              <span>Sign Up</span>
              <span>It's quick and easy.</span>
            </div>
            <button onClick={() => setRegister(false)}>
              <img src={crossBtn} alt="" />
            </button>
          </div>
          <div className="sign-up-body">
            <form onSubmit={handleFormSubmit} action="">
              <div className="reg-form reg-form-inline">
                <input
                  id="azam"
                  type="text"
                  className={validate.fname && "error-border"}
                  name="fname"
                  value={input.fname}
                  placeholder="First Name"
                  onChange={handleInputChange}
                  onBlur={handleInputValidate}
                  onFocus={handleInputFocus}
                />
                {validate.fname && (
                  <i
                    id="fname"
                    style={{ display: "block" }}
                    className="fa-solid fa-circle-exclamation"
                  ></i>
                )}
                {validateFocus.fname && (
                  <div className="ntp">
                    <span>What's is your name?</span>
                    <div className="triangle"></div>
                  </div>
                )}
                <input
                  type="text"
                  className={validate.sname && "error-border"}
                  name="sname"
                  value={input.sname}
                  placeholder="surname"
                  onChange={handleInputChange}
                  onBlur={handleInputValidate}
                  onFocus={handleInputFocus}
                />
                {validateFocus.sname && (
                  <div className="stp">
                    <span>What's is your name?</span>
                    <div className="striangle"></div>
                  </div>
                )}
                {validate.sname && (
                  <i
                    id="sname"
                    style={{ display: "block" }}
                    className="fa-solid fa-circle-exclamation"
                  ></i>
                )}
              </div>
              <div className="reg-form">
                <input
                  type="text"
                  name="emailormobile"
                  value={input.emailormobile}
                  placeholder="Mobile number or email address"
                  onChange={handleInputChange}
                  onBlur={handleInputValidate}
                  className={validate.emailormobile && "error-border"}
                  onFocus={handleInputFocus}
                />
                {validateFocus.emailormobile && (
                  <div className="emtp">
                    <span className="eptp">
                      You'll use this when you log in and if you ever need to
                      reset your password.
                    </span>
                    <div className="eptriangle"></div>
                  </div>
                )}
                {validate.emailormobile && (
                  <i
                    id="emailormobile"
                    style={{ display: "block" }}
                    className="fa-solid fa-circle-exclamation"
                  ></i>
                )}
              </div>
              <div className="reg-form">
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  placeholder="New password"
                  onChange={handleInputChange}
                  onBlur={handleInputValidate}
                  className={validate.password && "error-border"}
                  onFocus={handleInputFocus}
                />
                {validateFocus.password && (
                  <div className="ptp">
                    <span className="prtp">
                      Enter a combination of at least six numbers. letters and
                      punctuation marks (such as ! and &).
                    </span>
                    <div className="ptriangle"></div>
                  </div>
                )}
                {validate.password && (
                  <i
                    id="password"
                    style={{ display: "block" }}
                    className="fa-solid fa-circle-exclamation"
                  ></i>
                )}
              </div>
              <div className="reg-form">
                <span>Date of birth</span>
                <i id="fname" className="fa-solid fa-circle-exclamation"></i>
                <div className="reg-form-select">
                  <select name="day" id="" onChange={handleInputChange}>
                    {day.map((item, index) => (
                      <option
                        selected={item === input.day ? true : false}
                        value={item}
                        key={index}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                  <select name="month" id="" onChange={handleInputChange}>
                    {month.map((item, index) => (
                      <option
                        selected={item === input.month ? true : false}
                        value={item}
                        key={index}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                  <select name="year" id="" onChange={handleInputChange}>
                    {year.map((item, index) => (
                      <option
                        selected={item === input.year ? true : false}
                        value={item}
                        key={index}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="btp">
                  <span className="bdtp">
                    It looks like you've entered the wrong ifo. Please make sure
                    that you use your real date of birth.
                  </span>
                </div>
              </div>

              <div className="reg-form">
                <span>Gender</span>
                <div className="reg-form-select">
                  <label>
                    Female
                    <input
                      value="Female"
                      type="radio"
                      onChange={handleInputChange}
                      name="gender"
                    />
                  </label>
                  <label>
                    Male
                    <input
                      value="Male"
                      type="radio"
                      onChange={handleInputChange}
                      name="gender"
                    />
                  </label>
                  <label>
                    Custom
                    <input
                      value="Custom"
                      type="radio"
                      onChange={handleInputChange}
                      name="gender"
                    />
                  </label>
                </div>
              </div>

              <div className="reg-form">
                <p>
                  People who use our service may have uploaded your contact
                  information to Facebook. <a href="#">Learn more.</a>
                </p>
              </div>
              <div className="reg-form">
                <p>
                  By clicking Sign Up, you agree to our <a href="#">Terms</a>,{" "}
                  <a href="#">Privacy Policy</a> and{" "}
                  <a href="#">Cookies Policy</a>. You may receive SMS
                  notifications from us and can opt out at any time.
                </p>
              </div>

              <div className="reg-form">
                <button type="Submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
