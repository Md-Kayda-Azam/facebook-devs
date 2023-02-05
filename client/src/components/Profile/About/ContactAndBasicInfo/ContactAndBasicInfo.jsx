import React from "react";
import { useState } from "react";
import AddLanguage from "../components/AddLanguage/AddLanguage";
import AddSocialLink from "../components/AddSocialLink/AddSocialLink";
import AddWebSite from "../components/AddWebSite/AddWebSite";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";

const ContactAndBasicInfo = () => {
  const [addWebSite, setAddWebSite] = useState(false);
  const [addSocialLink, setAddocialLink] = useState(false);
  const [addLanguages, setAddLanguages] = useState(false);
  return (
    <>
      <Wraper>
        <div className="title">
          <span className="bold-text">Contact info</span>
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
          <span className="bold-text">Websites and social links</span>
        </div>
        {!addWebSite && (
          <IconTitle title={"Add a website"} show={setAddWebSite} />
        )}
        {addWebSite && <AddWebSite showHide={setAddWebSite} />}
        {!addSocialLink && (
          <IconTitle title={"Add a social link"} show={setAddocialLink} />
        )}
        {addSocialLink && <AddSocialLink showHide={setAddocialLink} />}
        <div className="title">
          <span className="bold-text">Basic info</span>
        </div>
        {!addLanguages && (
          <IconTitle title={"Add a language"} show={setAddLanguages} />
        )}
        {addLanguages && <AddLanguage showHide={setAddLanguages} />}

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
          <span className="bold-text">Category</span>
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
