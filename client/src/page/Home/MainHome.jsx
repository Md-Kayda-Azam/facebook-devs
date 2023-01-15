import React from "react";
import { useSelector } from "react-redux";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import Timeline from "../../components/Timeline/Timeline";
import Auth from "../Auth/Auth";
import Home from "./Home";

const MainHome = () => {
  const { loginState } = useSelector((state) => state.auth);
  return (
    <>
      {loginState ? (
        <>
          <Home/>
        </>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default MainHome;
