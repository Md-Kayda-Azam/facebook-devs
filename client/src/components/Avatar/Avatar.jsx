import React from "react";
import { useSelector } from "react-redux";

const Avatar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <img
        src={
          user.profile_photo
            ? `/profile/${user.profile_photo}`
            : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
        }
        alt=""
      />
    </>
  );
};

export default Avatar;
