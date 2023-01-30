import React from "react";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";

const ContactAndBasicInfo = () => {
  return (
    <>
      <Wraper>
        <div className="title">
          <h3>Contact info</h3>
        </div>
        <ContactInfo
          icon={"https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/mxbGn5aKz1f.png"}
          name={"01750-910188"}
          nameInfo={"Mobile"}
          editPhoto={
            "https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/SfKut6zKB3a.png"
          }
        />
        <ContactInfo
          emty={"ddddddd"}
          name={"01750-910188"}
          nameInfo={"Mobile"}
        />
        <div className="title">
          <h3>Websites and social links</h3>
        </div>
        <IconTitle title={"Add a website"} />
        <IconTitle title={"Add a social link"} />
        <div className="title">
          <h3>Basic info</h3>
        </div>

        <IconTitle title={"Add a language"} />
        <ContactInfo
          icon={"https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/rodGQv9jZg5.png"}
          name={"Male"}
          nameInfo={"Gender"}
          friendsPublic={
            "https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
          }
          editPhoto={
            "https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/SfKut6zKB3a.png"
          }
        />
        <ContactInfo
          icon={"https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/8h5bbU4i43W.png"}
          name={"August 22"}
          nameInfo={"Birth date"}
          friendsPublic={
            "https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/cobdPEFBCpu.png"
          }
          editPhoto={
            "https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/SfKut6zKB3a.png"
          }
        />
        <ContactInfo
          emty={"ddddddd"}
          name={"2002"}
          nameInfo={"Birth date"}
          friendsPublic={
            "https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/cobdPEFBCpu.png"
          }
          editEmty={"dddddddd"}
        />
        <div className="title">
          <h3>Category</h3>
        </div>
        <ContactInfo
          icon={"https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/lhdCVH10kLz.png"}
          name={"Digital creator"}
          friendsPublic={
            "https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
          }
          editPhoto={
            "https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/SfKut6zKB3a.png"
          }
        />
      </Wraper>
    </>
  );
};

export default ContactAndBasicInfo;