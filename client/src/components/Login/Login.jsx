import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import createToast from "../../utility/toast";
import { userLogin } from "../../redux/auth/authAction";
import { useDispatch } from "react-redux";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const Login = ({ setRegister }) => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    auth: "",
    password: "",
  });

  // handle input chnage
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  /// hide show password
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;

  // handle user login
  const handleUserLogin = (e) => {
    e.preventDefault();

    if (!input.auth || !input.password) {
      createToast("All fields are required");
    } else {
      dispatch(
        userLogin({ auth: input.auth, password: input.password }, naviagte)
      );
    }
  };
  return (
    <>
      <div className="auth-box">
        <form action="" onSubmit={handleUserLogin}>
          <div className="auth-form">
            <input
              name="auth"
              value={input.auth}
              onChange={handleInputChange}
              type="text"
              placeholder="Email address or phone number"
            />
          </div>
          <div className="auth-form">
            <input
              name="password"
              value={input.password}
              onChange={handleInputChange}
              type={changePassword ? "password" : "text"}
              placeholder="Password"
              id="input-show-hide"
            />
            <span
              className="icon"
              onClick={() => {
                setChangePassword(changeIcon);
              }}
            >
              {changeIcon ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <div className="auth-form">
            <button type="submit">Log In</button>
          </div>
        </form>

        <Link to="/forgot-password">Forgotten password?</Link>

        <div className="divider"></div>

        <button onClick={() => setRegister(true)}>Create New Account</button>
      </div>
    </>
  );
};

export default Login;
