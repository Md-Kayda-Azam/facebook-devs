import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import HomeHeader from "../../HomeHeader/HomeHeader";
import SelectSection from "../SelectSection/SelectSection";
import "./AllFriends.scss";

const AllFriends = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <HomeHeader />
      <div className="friends-sec">
        <div className="friends-sec-wraper">
          <div className="firends-sec-menu">
            <div className="friends-requests-sec">
              <div className="friends-requests-header">
                <div className="title-sec-friends">
                  <NavLink to="/friends">
                    <div className="icon"></div>
                  </NavLink>
                  <div className="title">
                    <a href="#">Friends</a>
                    <span>All friends</span>
                  </div>
                </div>
              </div>
              <div className="divider-friend"></div>
              <div className="friends-list">
                <div className="input-sec">
                  <div className="search-icon-f"></div>
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Search Friends"
                  />
                </div>
                <div className="divider-friend"></div>

                <div className="title-list">
                  <span>329 friends</span>
                </div>
                {user.friends.map((item, index) => {
                  return (
                    <div className="friend-list-item">
                      <img
                        src={
                          user.profile_photo
                            ? `/profile/${user.profile_photo}`
                            : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                        }
                        alt=""
                      />
                      <div className="all-friends-id">
                        <div className="n-sec">
                          <span>Md Kayda Azam</span>
                          <p>22 mutual friends</p>
                        </div>
                        <button>
                          <div className="icon-all-fd"></div>
                        </button>
                      </div>
                      {/* <div className="friends-info">
                      <div className="item-f-info">
                        <div className="mess"></div>
                        <span>Message Azam</span>
                      </div>
                      <div className="item-f-info">
                        <div className="foll"></div>
                        <div>
                          <span>Follow Azam</span> <p>See posts from Azam.</p>
                        </div>
                      </div>
                      <div className="item-f-info">
                        <div className="bloc"></div>
                        <div>
                          <span>Block Azam's profile</span>{" "}
                          <p>
                            Azam won't be able to see you or contact you on
                            Facebook.
                          </p>
                        </div>
                      </div>
                      <div className="item-f-info">
                        <div className="unf"></div>
                        <div>
                          <span>Unfriend Azam</span>{" "}
                          <p>Remove Azam as a friend</p>
                        </div>
                      </div>
                    </div> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <SelectSection />
        </div>
      </div>
    </>
  );
};

export default AllFriends;
