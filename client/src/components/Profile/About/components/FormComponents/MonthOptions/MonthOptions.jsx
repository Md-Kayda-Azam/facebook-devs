import React from "react";
import OptionsYearMonthDay from "../OptionsYearMonthDay/OptionsYearMonthDay";

const MonthOptions = ({ ydmtrue, ymd, addColl, addCollege }) => {
  return (
    <>
      <OptionsYearMonthDay
        ydmtrue={ydmtrue}
        ymd={ymd}
        addColl={addColl}
        addCollege={addCollege}
      >
        <div className="option-item">
          <span>Month</span>
        </div>
        <div className="option-item">
          <span>January</span>
        </div>
        <div className="option-item">
          <span>February</span>
        </div>
        <div className="option-item">
          <span>March</span>
        </div>
        <div className="option-item">
          <span>April</span>
        </div>
        <div className="option-item">
          <span>May</span>
        </div>
        <div className="option-item">
          <span>June</span>
        </div>
        <div className="option-item">
          <span>July</span>
        </div>
        <div className="option-item">
          <span>August</span>
        </div>
        <div className="option-item">
          <span>September</span>
        </div>
        <div className="option-item">
          <span>October</span>
        </div>
        <div className="option-item">
          <span>November </span>
        </div>
        <div className="option-item">
          <span>December </span>
        </div>
      </OptionsYearMonthDay>
    </>
  );
};

export default MonthOptions;
