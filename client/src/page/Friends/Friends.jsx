import React from "react";
import { Outlet } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import "./Friends.scss";

const Friends = () => {
  return (
    <>
      <HomeHeader />
      <div className="friends-sec">
        <div className="friends-sec-wraper">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Friends;
