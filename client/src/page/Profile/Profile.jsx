import React from "react";
import CreatePost from "../../components/CreatePost/CreatePost";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import ProfileFriends from "../../components/Profile/ProfileFriends/ProfileFriends";
import ProfileGallery from "../../components/Profile/ProfileGallery/ProfileGallery";
import ProfileHeader from "../../components/Profile/ProfileHeader/ProfileHeader";
import ProfileIntro from "../../components/Profile/ProfileIntro/ProfileIntro";
import UserPost from "../../components/UserPost/UserPost";

const Profile = () => {
  return (
    <>
      <HomeHeader />
      <ProfileHeader />
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
    </>
  );
};

export default Profile;
