import React from "react";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";
import "./WorkAndEducation.css";

const WorkAndEducation = () => {
  return (
    <>
      <Wraper>
        <div className="title">
          <h4>Work</h4>
        </div>
        <IconTitle title={"Add a workplace"} />
        <div className="title">
          <h4>College</h4>
        </div>
        <IconTitle title={"Add college"} />
        <div className="title">
          <h4>High school</h4>
        </div>
        <IconTitle title={"Add high school"} />
      </Wraper>
    </>
  );
};

export default WorkAndEducation;
