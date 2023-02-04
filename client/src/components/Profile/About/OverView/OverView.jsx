import React from "react";
import { useState } from "react";
import AddAWorkPlace from "../components/AddAWorkPlace/AddAWorkPlace";
import AddCollege from "../components/AddCollege/AddCollege";
import AddCurrentCity from "../components/AddCurrentCity/AddCurrentCity";
import AddHighSchool from "../components/AddHighSchool/AddHighSchool";
import Addhometown from "../components/Addhometown/Addhometown";
import AddRelationship from "../components/AddRelationship/AddRelationship";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";
import "./OverView.css";

const OverView = () => {
  const [addWorkPlace, setAddWorkPlace] = useState(false);
  const [addHighSchool, setAddHighSchool] = useState(false);
  const [addCollege, setAddCollege] = useState(false);
  const [addCurrentCity, setAddCurrentCity] = useState(false);
  const [addHomeTown, setAddHomeTown] = useState(false);
  const [addRelationship, setAddRelationship] = useState(false);
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
        {!addCollege && (
          <IconTitle title={"Add college"} show={setAddCollege} />
        )}
        {addCollege && (
          <AddCollege showHide={setAddCollege} addColl={setAddCollege} />
        )}

        {!addCurrentCity && (
          <IconTitle title={"Add current ciry"} show={setAddCurrentCity} />
        )}
        {addCurrentCity && <AddCurrentCity showHide={setAddCurrentCity} />}
        {!addHomeTown && (
          <IconTitle title={"Add hometown"} show={setAddHomeTown} />
        )}
        {addHomeTown && <Addhometown showHide={setAddHomeTown} />}
        {!addRelationship && (
          <IconTitle
            title={"Add a relationship status"}
            show={setAddRelationship}
          />
        )}
        {addRelationship && <AddRelationship showHide={setAddRelationship} />}
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
