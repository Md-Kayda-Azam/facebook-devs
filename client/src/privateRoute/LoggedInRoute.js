import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const LoggedInRoute = ({ children }) => {
  const { loginState } = useSelector((state) => state.auth);

  if (Cookies.get("authToken")) {
    return loginState ? <Outlet /> : children;
  } else {
    <Navigate to={"/"} />;
  }
};

export default LoggedInRoute;

/**
 * if (Cookies.get("authToken")) {
    return loginState ? <Outlet /> : <Navigate to={"/"} />;
  } else {
    <Navigate to={"/"} />;
  }
 */
