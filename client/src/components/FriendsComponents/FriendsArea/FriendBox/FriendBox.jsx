import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./FriendBox.scss";

const FriendBox = ({ user, buttonState }) => {
  const [addFriendF, setAddFriendF] = useState(false);
  const [addFriendT, setAddFriendT] = useState(true);
  const [addFriendC, setAddFriendC] = useState(true);
  const [addFriendAR, setAddFriendAR] = useState(true);
  const [addFriendRD, setAddFriendRD] = useState(false);

  const { user: loginUSer } = useSelector((state) => state.auth);
  const handleFriendRequestSend = (receiverId) => {
    setAddFriendF(true);
    setAddFriendT(false);
    axios.get(`/api/v1/user/add-friend/${receiverId}/${loginUSer._id}`);
  };
  const handleFriendRequestCencal = (receiverId) => {
    setAddFriendT(true);
    setAddFriendF(false);
    axios.get(`/api/v1/user/add-friend-cancel/${receiverId}/${loginUSer._id}`);
  };
  const handleConfirmRequest = (senderId) => {
    setAddFriendC(false);
    setAddFriendAR(true);
    axios.get(`/api/v1/user/add-friend-confirm/${loginUSer._id}/${senderId}`);
  };
  const handleReaquestDelete = (senderId) => {
    setAddFriendRD(true);
    setAddFriendC(false);
    axios.get(
      `/api/v1/user/add-friend-request-delete/${loginUSer._id}/${senderId}`
    );
  };
  return (
    <>
      <div className="friends-request-pro">
        <img
          src={
            user.profile_photo
              ? `/profile/${user.profile_photo}`
              : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
          }
          alt=""
        />
        <div className="req-pro-info">
          <Link to="">
            {user.first_name} {user.sur_name}
          </Link>
          <div className="pro-info">
            {addFriendF && <p>Request sent</p>}
            {addFriendT && (
              <div className="info">
                <div className="img">
                  <img
                    className="jamaela"
                    src="http://localhost:3000/profile/1677928478980_profile_photo.png"
                    alt=""
                  />
                  <img
                    src="http://localhost:3000/profile/1677928342004_profile_photo.png"
                    alt=""
                  />
                </div>
                <p>2 metual friends</p>
              </div>
            )}
          </div>
          {buttonState === "request" && (
            <>
              {addFriendC && (
                <>
                  <button
                    className="blue-btn"
                    onClick={() => handleConfirmRequest(user._id)}
                  >
                    Confirm
                  </button>
                  <button onClick={() => handleReaquestDelete(user._id)}>
                    Delete
                  </button>
                </>
              )}
              {addFriendRD && (
                <>
                  <div className="gap-PDs"></div>
                  <button className="request-accepted">Request deleted</button>
                </>
              )}
              {addFriendAR && (
                <>
                  <div className="gap-PDs"></div>
                  <button className="request-accepted">Request accepted</button>
                </>
              )}
            </>
          )}
          {buttonState === "mayfor" && (
            <>
              {addFriendT && (
                <>
                  {" "}
                  <button
                    className="add-firned-btn"
                    onClick={() => handleFriendRequestSend(user._id)}
                  >
                    Add Friend
                  </button>
                  <button>Remove</button>
                </>
              )}

              {addFriendF && (
                <>
                  <div className="gap-PDs"></div>
                  <button onClick={() => handleFriendRequestCencal(user._id)}>
                    Cancel
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FriendBox;
