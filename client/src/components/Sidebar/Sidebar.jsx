import React from "react";
import { useSelector } from "react-redux";
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="fb-home-body-sidebar">
        <ul>
          <li>
            <Link to={`/${user.username}`}>
              <div className="body-icon">
                <Avatar />
              </div>
              <span>{`${user.first_name} ${user.sur_name}`}</span>
            </Link>
          </li>

          <li>
            <Link to="/friends">
              <div className="body-icon"></div>
              <span>Friends</span>
            </Link>
          </li>

          <li>
            <a href="#">
              <div className="body-icon"></div>
              <span>Groups</span>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="body-icon"></div>
              <span>Marketplace</span>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="body-icon"></div>
              <span>Watch</span>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="body-icon"></div>
              <span>Watch</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
