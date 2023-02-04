import React, { useState } from "react";
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

  const [postTrue, setPostTrue] = useState(true);
  const [aboutTrue, setAboutTrue] = useState(false);
  const [followTrue, setFollowTrue] = useState(false);
  const [photosTrue, setPhotosTrue] = useState(false);
  const [groupsTrue, setGroupsTrue] = useState(false);
  const [videosTrue, setVideosTrue] = useState(false);
  const [moreTrue, setMoreTrue] = useState(false);

  /// handle abiut show
  const handlePostShow = (e) => {
    e.preventDefault();
    setPostTrue(true);
    setAboutTrue(false);
    setFollowTrue(false);
    setPhotosTrue(false);
    setGroupsTrue(false);
    setVideosTrue(false);
    setMoreTrue(false);

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
    setAboutTrue(true);
    setFollowTrue(false);
    setPostTrue(false);
    setPhotosTrue(false);
    setGroupsTrue(false);
    setVideosTrue(false);
    setMoreTrue(false);

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
    setFollowTrue(true);
    setPostTrue(false);
    setAboutTrue(false);
    setPhotosTrue(false);
    setGroupsTrue(false);
    setVideosTrue(false);
    setMoreTrue(false);

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
    setPhotosTrue(true);
    setFollowTrue(false);
    setPostTrue(false);
    setAboutTrue(false);
    setGroupsTrue(false);
    setVideosTrue(false);
    setMoreTrue(false);

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
    setGroupsTrue(true);
    setPhotosTrue(false);
    setFollowTrue(false);
    setPostTrue(false);
    setAboutTrue(false);
    setVideosTrue(false);
    setMoreTrue(false);

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
    setVideosTrue(true);
    setGroupsTrue(false);
    setPhotosTrue(false);
    setFollowTrue(false);
    setPostTrue(false);
    setAboutTrue(false);
    setMoreTrue(false);

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
    setMoreTrue(true);
    setGroupsTrue(false);
    setPhotosTrue(false);
    setFollowTrue(false);
    setPostTrue(false);
    setAboutTrue(false);
    setVideosTrue(false);

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
            <li className={postTrue ? "api" : ""}>
              <a onClick={handlePostShow} href="#">
                Posts
              </a>
              <span className="bp"></span>
            </li>
            <li className={aboutTrue ? "api" : ""}>
              <a onClick={handleAboutShow} href="#">
                About
              </a>
              <span className="bp"></span>
            </li>
            <li className={followTrue ? "api" : ""}>
              <a onClick={handleAFollowersShow} href="#">
                Followers
              </a>
              <span className="bp"></span>
            </li>
            <li className={photosTrue ? "api" : ""}>
              <a onClick={handleAPhotosShow} href="#">
                Photos
              </a>
              <span className="bp"></span>
            </li>
            <li className={videosTrue ? "api" : ""}>
              <a onClick={handleVideoShow} href="#">
                Videos
              </a>
              <span className="bp"></span>
            </li>
            <li className={groupsTrue ? "api" : ""}>
              <a onClick={handleGroupShow} href="#">
                Groups
              </a>
              <span className="bp"></span>
            </li>
            <li className={moreTrue ? "api" : ""}>
              <a onClick={handleMoreShow} href="#">
                More
              </a>
              <span className="bp"></span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
