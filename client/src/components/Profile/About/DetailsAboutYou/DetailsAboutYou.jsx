import React from "react";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";

const DetailsAboutYou = () => {
  return (
    <>
      <Wraper>
        <div className="title">
          <h3>About you</h3>
        </div>
        <IconTitle title={"Write some details about yourself"} />
        <div className="title">
          <h3>Name pronunciation</h3>
        </div>
        <IconTitle title={"Add a name pronunciation"} />
        <div className="title">
          <h3>Other names</h3>
        </div>
        <IconTitle title={"Add a nickname, a birth name..."} />
        <div className="title">
          <h3>Favorite quotes</h3>
        </div>
        <IconTitle title={"Add your favorite quotations"} />
        <div className="title">
          <h3>Blood donations</h3>
        </div>
        <IconTitle title={"Learn about blood donations"} />
      </Wraper>
    </>
  );
};

export default DetailsAboutYou;
