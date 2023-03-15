import React, { useEffect } from "react";
import "./FriendsArea.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FriendBox from "./FriendBox/FriendBox";
import { getAllUsers } from "../../../redux/auth/authAction";

const FriendsArea = () => {
  const dispatch = useDispatch();

  const { users, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllUsers(user._id));
  }, [dispatch]);

  return (
    <>
      <div className="sec-area-wraper">
        <div className="header-friends-requests">
          <span>Friend Requests</span>
          <button>See All</button>
        </div>
        <div className="friends-requests-sec">
          {users.map((item, index) => {
            if (user.request.includes(item._id)) {
              return (
                <Link to="" key={index}>
                  <FriendBox user={item} buttonState="request" />
                </Link>
              );
            }
          })}
          <div className="header-friends-requests second-header">
            <span>People You May Know</span>
            <button>See All</button>
          </div>
          <div className="friends-requests-sec">
            {users.map((item, index) => {
              if (
                !user.friends.includes(item._id) &&
                !user.request.includes(item._id)
              ) {
                return (
                  <Link to="" key={index}>
                    <FriendBox user={item} buttonState="mayfor" />
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsArea;
