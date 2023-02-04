import React from "react";
import { useState } from "react";
import AddAWorkPlace from "../components/AddAWorkPlace/AddAWorkPlace";
import AddCollege from "../components/AddCollege/AddCollege";
import AddHighSchool from "../components/AddHighSchool/AddHighSchool";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";
import "./WorkAndEducation.css";

const WorkAndEducation = () => {
  const [workAndEducation, setWorkAndEducation] = useState(false);
  const [highSchool, sethighSchool] = useState(false);
  const [addCollege, setAddCollege] = useState(false);

  return (
    <>
      <Wraper>
        <div className="title-work">
          <h4>Work</h4>
        </div>
        {!workAndEducation && (
          <IconTitle title={"Add a workplace"} show={setWorkAndEducation} />
        )}
        {workAndEducation && (
          <AddAWorkPlace
            showHide={setWorkAndEducation}
            ymd={workAndEducation}
          />
        )}
        <div className="title-college">
          <h4>College</h4>
        </div>
        {!addCollege && (
          <IconTitle title={"Add college"} show={setAddCollege} />
        )}
        {addCollege && (
          <AddCollege showHide={setAddCollege} addCollege={addCollege} />
        )}
        <div className="title-high">
          <h4>High school</h4>
        </div>
        {!highSchool && (
          <IconTitle title={"Add high school"} show={sethighSchool} />
        )}
        {highSchool && (
          <AddHighSchool
            showHide={sethighSchool}
            highSc={highSchool}
            ymd={workAndEducation}
          />
        )}
      </Wraper>
    </>
  );
};

export default WorkAndEducation;
