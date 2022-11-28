import React from "react";
import { Link } from "react-router-dom";

const Login = ({ setRegister }) => {
  return (
    <>
      <div className="auth-box">
        <form action="">
          <div className="auth-form">
            <input type="text" placeholder="Email address or phone number" />
          </div>
          <div className="auth-form">
            <input type="password" placeholder="Password" />
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
