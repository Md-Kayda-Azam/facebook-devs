import React from "react";
import { useState } from "react";
import AddFamilyMember from "../components/AddFamilyMember/AddFamilyMember";
import AddRelationship from "../components/AddRelationship/AddRelationship";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";

const FamilyAndRelationship = () => {
  const [relationship, setRelationship] = useState(false);
  const [addfamilyMember, setAddfamilyMember] = useState(false);
  return (
    <>
      <Wraper>
        <div className="title">
          <span className="bold-text">Relationship</span>
        </div>
        {!relationship && (
          <IconTitle title={"Relationship"} show={setRelationship} />
        )}
        {relationship && (
          <AddRelationship
            showHidep={setRelationship}
            showHide={setRelationship}
          />
        )}
        <div className="title">
          <span className="bold-text">Family members</span>
        </div>
        {!addfamilyMember && (
          <IconTitle title={"Family members"} show={setAddfamilyMember} />
        )}
        {addfamilyMember && <AddFamilyMember showHide={setAddfamilyMember} />}
      </Wraper>
    </>
  );
};

export default FamilyAndRelationship;
