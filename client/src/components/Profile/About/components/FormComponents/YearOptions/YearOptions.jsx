import React from "react";
import OptionsYearMonthDay from "../OptionsYearMonthDay/OptionsYearMonthDay";
import "./YearOptions.css";

const YearOptions = ({ ydmtrue, ymd, highSc, addColl, addCollege }) => {
  return (
    <>
      <OptionsYearMonthDay
        ydmtrue={ydmtrue}
        ymd={ymd}
        highSc={highSc}
        addColl={addColl}
        addCollege={addCollege}
      >
        <div className="option-item">
          <span>year</span>
        </div>
        <div className="option-item">
          <span>2024</span>
        </div>
        <div className="option-item">
          <span>2023</span>
        </div>
        <div className="option-item">
          <span>2022</span>
        </div>
        <div className="option-item">
          <span>2021</span>
        </div>
        <div className="option-item">
          <span>2020</span>
        </div>
        <div className="option-item">
          <span>2019</span>
        </div>
        <div className="option-item">
          <span>2018</span>
        </div>
        <div className="option-item">
          <span>2017</span>
        </div>
        <div className="option-item">
          <span>2016</span>
        </div>
        <div className="option-item">
          <span>2015</span>
        </div>
        <div className="option-item">
          <span>2014</span>
        </div>
        <div className="option-item">
          <span>2013</span>
        </div>
        <div className="option-item">
          <span>2012</span>
        </div>
        <div className="option-item">
          <span>2011</span>
        </div>
        <div className="option-item">
          <span>2010</span>
        </div>
        <div className="option-item">
          <span>2009</span>
        </div>
        <div className="option-item">
          <span>2008</span>
        </div>
        <div className="option-item">
          <span>2007</span>
        </div>
        <div className="option-item">
          <span>2006</span>
        </div>
        <div className="option-item">
          <span>2005</span>
        </div>
        <div className="option-item">
          <span>2006</span>
        </div>
        <div className="option-item">
          <span>2005</span>
        </div>
        <div className="option-item">
          <span>2004</span>
        </div>
        <div className="option-item">
          <span>2003</span>
        </div>
        <div className="option-item">
          <span>2002</span>
        </div>
        <div className="option-item">
          <span>2001</span>
        </div>
        <div className="option-item">
          <span>2000</span>
        </div>
      </OptionsYearMonthDay>
    </>
  );
};

export default YearOptions;
