import React, { useRef, useState } from "react";
import usePopupClose from "../../../../hooks/usePopupClose";
import Cover from "./Cover/Cover";
import Info from "./Info/Info";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

const ProfileHeader = () => {
  const [coverPhoto, setCoverPhoto] = useState(false);

  const close = useRef(null);

  usePopupClose(close, setCoverPhoto);

  return (
    <>
      <div className="fb-profile-header">
        <div className="fb-header-shad"></div>

        <Cover showHide={setCoverPhoto} />
        <Info />
        <ProfileMenu />
      </div>
    </>
  );
};

export default ProfileHeader;
