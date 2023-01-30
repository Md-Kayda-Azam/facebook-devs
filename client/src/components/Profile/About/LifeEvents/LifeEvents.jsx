import React from "react";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";

const LifeEvents = () => {
  return (
    <>
      <Wraper>
        <div className="title">
          <h3>Learn about blood donations</h3>
        </div>
        <IconTitle title={"Add a life event"} />
        <ContactInfo
          icon={"https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/zOIOutVoB2A.png"}
          name={"No life events to show"}
        />
      </Wraper>
    </>
  );
};

export default LifeEvents;
