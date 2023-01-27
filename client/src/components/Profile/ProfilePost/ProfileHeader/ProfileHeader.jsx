import React from "react";
import { useSelector } from "react-redux";
import Avatar from "../../../Avatar/Avatar";

const ProfileHeader = ({
  postShow,
  aboutShow,
  followersShow,
  photosShow,
  groupsShow,
  videosShow,
  moreShow,
}) => {
  const { user } = useSelector((state) => state.auth);

  /// handle abiut show
  const handlePostShow = (e) => {
    e.preventDefault();
    postShow(true);
    followersShow(false);
    photosShow(false);
    groupsShow(false);
    videosShow(false);
    moreShow(false);
    aboutShow(false);
  };
  /// handle about show
  const handleAboutShow = (e) => {
    e.preventDefault();
    aboutShow(true);
    followersShow(false);
    photosShow(false);
    groupsShow(false);
    videosShow(false);
    moreShow(false);
    postShow(false);
  };
  /// handle followers show
  const handleAFollowersShow = (e) => {
    e.preventDefault();
    followersShow(true);
    photosShow(false);
    groupsShow(false);
    videosShow(false);
    moreShow(false);
    aboutShow(false);
    postShow(false);
  };
  /// handle followers show
  const handleAPhotosShow = (e) => {
    e.preventDefault();
    photosShow(true);
    groupsShow(false);
    videosShow(false);
    moreShow(false);
    followersShow(false);
    aboutShow(false);
    postShow(false);
  };
  /// handle followers show
  const handleGroupShow = (e) => {
    e.preventDefault();
    groupsShow(true);
    videosShow(false);
    moreShow(false);
    photosShow(false);
    followersShow(false);
    aboutShow(false);
    postShow(false);
  };
  /// handle followers show
  const handleVideoShow = (e) => {
    e.preventDefault();
    videosShow(true);
    moreShow(false);
    groupsShow(false);
    photosShow(false);
    followersShow(false);
    aboutShow(false);
    postShow(false);
  };
  /// handle followers show
  const handleMoreShow = (e) => {
    e.preventDefault();
    moreShow(true);
    videosShow(false);
    groupsShow(false);
    photosShow(false);
    followersShow(false);
    aboutShow(false);
    postShow(false);
  };
  return (
    <>
      <div className="fb-profile-header">
        <div className="fb-header-shad"></div>
        <div className="fb-cover-photo">
          <img
            src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?cs=srgb&dl=pexels-mixu-1323206.jpg&fm=jpg"
            alt=""
          />
          <button>
            <span className="camera-icon"></span> Edit cover photo
          </button>
        </div>
        <div className="fb-profile-details">
          <div className="profile-info">
            <div className="profile-photo">
              <Avatar />
            </div>
            <div className="profile-desc">
              <h1>
                {user.first_name} {user.sur_name} <span>( neo inc )</span>
              </h1>
              <div className="profile-follow-details">
                <span className="profile-followers">15k follower</span>
                <span className="profile-following">1k following</span>
              </div>
              <div className="profile-friends-list">
                <ul>
                  <li>
                    <img
                      src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="profile-action">
            <button>
              <span className="follow-icon"></span> <span>Follow</span>
            </button>
            <button>
              <span className="message-icon"></span> <span>Message</span>
            </button>
            <button className="blue">
              <span className="add-friend-icon"></span> <span>Add friend</span>
            </button>
          </div>
        </div>
        <div className="fb-profile-menu">
          <ul>
            <li>
              <a onClick={handlePostShow} href="#">
                Posts
              </a>
            </li>
            <li>
              <a onClick={handleAboutShow} href="#">
                About
              </a>
            </li>
            <li>
              <a onClick={handleAFollowersShow} href="#">
                Followers
              </a>
            </li>
            <li>
              <a onClick={handleAPhotosShow} href="#">
                Photos
              </a>
            </li>
            <li>
              <a onClick={handleVideoShow} href="#">
                Videos
              </a>
            </li>
            <li>
              <a onClick={handleGroupShow} href="#">
                Groups
              </a>
            </li>
            <li>
              <a onClick={handleMoreShow} href="#">
                More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
