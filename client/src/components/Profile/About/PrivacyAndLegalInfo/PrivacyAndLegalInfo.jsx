import React from "react";
import { useState } from "react";
import AddImpressum from "../components/AddImpressum/AddImpressum";
import AddPrivacyPolicyLink from "../components/AddPrivacyPolicyLink/AddPrivacyPolicyLink";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";

const PrivacyAndLegalInfo = () => {
  const [addPrivacyPolicyLink, setAddPrivacyPolicyLink] = useState(false);
  const [addImpressum, setAddImpressum] = useState(false);
  return (
    <>
      <Wraper>
        <div className="title">
          <h3>Privacy and Legal Info</h3>
        </div>
        {!addPrivacyPolicyLink && (
          <IconTitle
            title={"Privacy and Legal Info"}
            show={setAddPrivacyPolicyLink}
          />
        )}
        {addPrivacyPolicyLink && (
          <AddPrivacyPolicyLink showHide={setAddPrivacyPolicyLink} />
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
