import React from "react";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";
import "./OverView.css";

const OverView = () => {
  return (
    <>
      <Wraper>
        <IconTitle title={"Add a workplace"} />
        <IconTitle title={"Add a high school"} />
        <IconTitle title={"Add college"} />
        <IconTitle title={"Add current ciry"} />
        <IconTitle title={"Add hometown"} />
        <IconTitle title={"Add a relationship status"} />
        <ContactInfo
          icon={"https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/mxbGn5aKz1f.png"}
          name={"01750-910188"}
          nameInfo={"Mobile"}
        />
      </Wraper>
    </>
  );
};

export default OverView;
