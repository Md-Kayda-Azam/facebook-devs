import React from "react";
import Fbcard from "../../../Fbcard/Fbcard";
import "./ProfileIntro.css";
import "react-alice-carousel/lib/alice-carousel.css";
import ProfileIntroC from "./ProfileIntroC/ProfileIntroC";
import Hobbies from "./Hobbies/Hobbies";
import ProfileFeatured from "./ProfileFeatured/ProfileFeatured";
import AddBio from "./AddBio/AddBio";

const ProfileIntro = () => {
  return (
    <>
      <Fbcard>
        <div className="user-paersonal-info">
          <h3>Into</h3>
          <AddBio />
          <ProfileIntroC />
          <Hobbies />
          <ProfileFeatured />
        </div>
      </Fbcard>
    </>
  );
};

export default ProfileIntro;
