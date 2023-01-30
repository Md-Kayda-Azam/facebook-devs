import React from "react";
import { useState } from "react";
import AddAWorkPlace from "../components/AddAWorkPlace/AddAWorkPlace";
import AddCollege from "../components/AddCollege/AddCollege";
import AddHighSchool from "../components/AddHighSchool/AddHighSchool";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";
import "./OverView.css";

const OverView = () => {
  const [addWorkPlace, setAddWorkPlace] = useState(false);
  const [addHighSchool, setAddHighSchool] = useState(false);
  const [addCollege, setddCollege] = useState(false);
  return (
    <>
      <Wraper>
        {!addWorkPlace && (
          <IconTitle title={"Add a workplace"} show={setAddWorkPlace} />
        )}
        {addWorkPlace && <AddAWorkPlace showHide={setAddWorkPlace} />}

        {!addHighSchool && (
          <IconTitle title={"Add a high school"} show={setAddHighSchool} />
        )}
        {addHighSchool && <AddHighSchool showHide={setAddHighSchool} />}
        {!addCollege && <IconTitle title={"Add college"} show={setddCollege} />}
        {addCollege && (
          <AddCollege showHide={setddCollege} addColl={setddCollege} />
        )}
        <IconTitle title={"Add current ciry"} />
        <IconTitle title={"Add hometown"} />
        <IconTitle title={"Add a relationship status"} />
        <ContactInfo
          icon={"https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/mxbGn5aKz1f.png"}
          name={"01750-910188"}
          nameInfo={"Mobile"}
          editPhoto={
            "https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/SfKut6zKB3a.png"
          }
        />
      </Wraper>
    </>
  );
};

export default OverView;
