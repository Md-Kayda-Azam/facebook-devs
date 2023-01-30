import React from "react";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import Wraper from "../components/Wraper/Wraper";
import "./ProfileTransparency.css";

const ProfileTransparency = () => {
  return (
    <>
      <Wraper>
        <div className="title">
          <h3>Profile transparency</h3>
          <p style={{ color: "#65676B" }}>
            Facebook is showing information to help people understand the
            purpose of your profile. You won't be able to edit what is shown
            here.
          </p>
        </div>
        <ContactInfo
          icon={"https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/p7Pf4gSWotr.png"}
          name={"August 22, 2020"}
          nameInfo={"Creation date"}
        />
        <ContactInfo
          icon={"https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/Ix9L9CJxYBf.png"}
          name={"This Profile is not currently running ads."}
        />
        <button>See All</button>
      </Wraper>
    </>
  );
};

export default ProfileTransparency;
