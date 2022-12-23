import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthRedject = ({ children }) => {
  const { loginState } = useSelector((state) => state.auth);

  return loginState ? <Navigate to="/" /> : children;
};

export default AuthRedject;
