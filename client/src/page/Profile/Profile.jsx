import React from "react";
import { useState } from "react";
import CreatePost from "../../components/CreatePost/CreatePost";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import About from "../../components/Profile/About/About";
import Followers from "../../components/Profile/Follwers/Followers";
import Groups from "../../components/Profile/Groups/Groups";
import More from "../../components/Profile/More/More";
import Photos from "../../components/Profile/Photos/Photos";
import ProfileFriends from "../../components/Profile/ProfilePost/ProfileFriends/ProfileFriends";
import ProfileGallery from "../../components/Profile/ProfilePost/ProfileGallery/ProfileGallery";
import ProfileHeader from "../../components/Profile/ProfilePost/ProfileHeader/ProfileHeader";
import ProfileIntro from "../../components/Profile/ProfilePost/ProfileIntro/ProfileIntro";
import Videos from "../../components/Profile/Videos/Videos";
import UserPost from "../../components/UserPost/UserPost";

const Profile = () => {
  const [postShow, setPostShow] = useState(true);
  const [aboutShow, setAboutShow] = useState(false);
  const [followersShow, setFolllowersShow] = useState(false);
  const [photosShow, setPhotosShow] = useState(false);
  const [videosShow, setVideostShow] = useState(false);
  const [groupsShow, setGroupsShow] = useState(false);
  const [moreShow, setMoreShow] = useState(false);

  return (
    <>
      <HomeHeader />
      <ProfileHeader
        postShow={setPostShow}
        aboutShow={setAboutShow}
        followersShow={setFolllowersShow}
        photosShow={setPhotosShow}
        videosShow={setVideostShow}
        groupsShow={setGroupsShow}
        moreShow={setMoreShow}
      />
      {postShow && (
        <div class="fb-profile-body">
          <div className="fb-body-wraper">
            <div className="user-profile-personal-info">
              <ProfileIntro />
              <ProfileGallery />
              <ProfileFriends />
            </div>
            <div className="user-profile-posts">
              <CreatePost />
              <UserPost />
            </div>
          </div>
        </div>
      )}

      {aboutShow && <About></About>}
      {followersShow && <Followers></Followers>}
      {photosShow && <Photos></Photos>}
      {groupsShow && <Groups></Groups>}
      {videosShow && <Videos></Videos>}
      {moreShow && <More></More>}
    </>
  );
};

export default Profile;
