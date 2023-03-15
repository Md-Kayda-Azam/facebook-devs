import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./ProfileMenu.css";

const ProfileMenu = () => {
  return (
    <>
      <div className="fb-profile-menu">
        <div className="profile-menu-fb">
          <NavLink to="">
            Posts <span></span>
          </NavLink>
          <NavLink to="about_">
            About <span></span>
          </NavLink>

          <NavLink to="followers">
            Followers <span></span>
          </NavLink>

          <NavLink to="photos">Photos</NavLink>

          <NavLink to="videos">Videos</NavLink>

          <NavLink to="groups">Groups</NavLink>

          <NavLink to="more">More</NavLink>
        </div>
      </div>
      <div className="profile-show">
        <Outlet />
      </div>
    </>
  );
};

export default ProfileMenu;
