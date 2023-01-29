import React from "react";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";

const PlacesLived = () => {
  return (
    <>
      <Wraper>
        <div className="title">
          <h3>Places lived</h3>
        </div>
        <IconTitle title={"Add current city"} />
        <IconTitle title={"Add hometown"} />
        <IconTitle title={"Add city"} />
      </Wraper>
    </>
  );
};

export default PlacesLived;
