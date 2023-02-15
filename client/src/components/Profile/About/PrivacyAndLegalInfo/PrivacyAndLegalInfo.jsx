import React from "react";
import { useState } from "react";
import AddImpressum from "../components/AddImpressum/AddImpressum";
import AddPrivacyPolicyLink from "../components/AddPrivacyPolicyLink/AddPrivacyPolicyLink";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";

const PrivacyAndLegalInfo = () => {
  const [addPrivacyPolicyLink, setAddPrivacyPolicyLink] = useState(false);
  const [addImpressum, setAddImpressum] = useState(false);

  // all data show hide all state
  const [privacyAndLegalInfoShowHide, setPrivacyAndLegalInfoShowHide] =
    useState(false);
  const [socialLinkShowHide, setSocialLinkShowHide] = useState(false);
  return (
    <>
      <Wraper>
        <div className="title">
          <span className="bold-text">Privacy and Legal Info</span>
        </div>
        {!privacyAndLegalInfoShowHide && (
          <ContactInfo
            icon={
              "https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/UJcPvV6ruF9.png"
            }
            name={"https://quran.com/"}
            nameInfo={"Privacy Policy"}
            friendsPublic={
              "https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
            }
            editPhoto={
              "https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/SfKut6zKB3a.png"
            }
          />
        )}
        {!addPrivacyPolicyLink && (
          <IconTitle
            title={"Privacy and Legal Info"}
            show={setAddPrivacyPolicyLink}
          />
        )}
        {addPrivacyPolicyLink && (
          <AddPrivacyPolicyLink showHide={setAddPrivacyPolicyLink} />
        )}
        {!privacyAndLegalInfoShowHide && (
          <ContactInfo
            icon={
              "https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/p_6H9qgmpZh.png"
            }
            name={
              "This is an optional field. In certain countries, such as Austria, Germany and Switzerland, businesses may be required by law to include a statement of ownership on their web presence. The limit is 2,000 characters"
            }
            nameInfo={"Impressum"}
            friendsPublic={
              "https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
            }
            editPhoto={
              "https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/SfKut6zKB3a.png"
            }
          />
        )}
        {!addImpressum && (
          <IconTitle title={"Add Impressum"} show={setAddImpressum} />
        )}
        {addImpressum && <AddImpressum showHide={setAddImpressum} />}
      </Wraper>
    </>
  );
};

export default PrivacyAndLegalInfo;
