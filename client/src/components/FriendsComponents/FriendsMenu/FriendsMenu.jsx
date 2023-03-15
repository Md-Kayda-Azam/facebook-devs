import React from "react";
import { NavLink } from "react-router-dom";
import FriendsArea from "../FriendsArea/FriendsArea";
import "./FriendsMenu.scss";

const FriendsMenu = () => {
  return (
    <>
      <div className="friends-sec">
        <div className="friends-sec-wraper">
          <div className="firends-sec-menu fri">
            <div className="friends-sec-menu-wraper">
              <div className="menu-header">
                <h2>Friends</h2>
                <button>
                  <span className="set-cion"></span>
                </button>
              </div>
              <div className="menu-list">
                <NavLink to="" className="item-menu">
                  <div className="item">
                    <button>
                      <span className="icon-menu-friend-home"></span>
                    </button>
                    <span>Home</span>
                  </div>
                </NavLink>
                <NavLink to="requests" className="item-menu">
                  <div className="item">
                    <button>
                      <span className="icon-menu-friend-request"></span>
                    </button>
                    <span>Friend Requests</span>
                  </div>

                  <div className="arrow-icon"></div>
                </NavLink>
                <NavLink to="suggections" className="item-menu">
                  <div className="item">
                    <button>
                      <span className="icon-menu-friend-sugg"></span>
                    </button>
                    <span>Suggestions</span>
                  </div>

                  <div className="arrow-icon"></div>
                </NavLink>
                <NavLink to="list" className="item-menu">
                  <div className="item">
                    <button>
                      <span className="icon-menu-friend-all"></span>
                    </button>
                    <span>All friends</span>
                  </div>

                  <div className="arrow-icon"></div>
                </NavLink>
                <NavLink className="item-menu">
                  <div className="item">
                    <button>
                      <span className="icon-menu-friend-birthdays"></span>
                    </button>
                    <span>Birthdays</span>
                  </div>
                </NavLink>
                <NavLink className="item-menu">
                  <div className="item">
                    <button>
                      <span className="icon-menu-friend-custom-list"></span>
                    </button>
                    <span>Custom Lists</span>
                  </div>
                  <div className="arrow-icon"></div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="firends-sec-area">
            <FriendsArea />
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsMenu;
