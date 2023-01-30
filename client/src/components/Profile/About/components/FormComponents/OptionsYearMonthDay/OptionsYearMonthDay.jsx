import React from "react";
import "./OptionsYearMonthDay.css";

const OptionsYearMonthDay = ({
  children,
  ydmtrue,
  ymd,
  highSc,
  addColl,
  addCollege,
}) => {
  return (
    <>
      <div
        className={`options ${ydmtrue ? "aactive" : ""} ${ymd ? "ymd" : ""}${
          highSc ? "highSc" : ""
        } ${addColl ? "addColl" : ""} ${addCollege ? "addCollege" : ""}`}
      >
        <div className="wraper-option">{children}</div>
      </div>
    </>
  );
};

export default OptionsYearMonthDay;
