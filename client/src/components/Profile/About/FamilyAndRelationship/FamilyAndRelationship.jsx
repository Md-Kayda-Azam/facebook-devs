import React from "react";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";

const FamilyAndRelationship = () => {
  return (
    <>
      <Wraper>
        <div className="title">
          <h3>Relationship</h3>
        </div>
        <IconTitle title={"Relationship"} />
        <div className="title">
          <h3>Family members</h3>
        </div>
        <IconTitle title={"Family members"} />
      </Wraper>
    </>
  );
};

export default FamilyAndRelationship;
