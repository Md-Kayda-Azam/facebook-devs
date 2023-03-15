import React from "react";
import CreatePost from "../../CreatePost/CreatePost";
import UserPost from "../../UserPost/UserPost";
import ProfileFriends from "../ProfilePost/ProfileFriends/ProfileFriends";
import ProfileGallery from "../ProfilePost/ProfileGallery/ProfileGallery";
import ProfileIntro from "../ProfilePost/ProfileIntro/ProfileIntro";

const Posts = () => {
  return (
    <>
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

export default Posts;
