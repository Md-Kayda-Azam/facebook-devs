import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const LogOutRoute = ({ children }) => {
  const { loginState } = useSelector((state) => state.auth);

  if (Cookies.get("authToken")) {
    return loginState ? <Navigate to={"/"} /> : <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default LogOutRoute;
