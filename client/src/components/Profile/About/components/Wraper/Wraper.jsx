import React from "react";
import "./Wraper.css";

const Wraper = ({ children }) => {
  return (
    <>
      <div className="wraper">
        <div className="wraper-item">{children}</div>
      </div>
    </>
  );
};

export default Wraper;
