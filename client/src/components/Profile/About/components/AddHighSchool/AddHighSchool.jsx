import React, { useRef, useState } from "react";
import usePopupClose from "../../../../../hooks/usePopupClose";
import DayOptions from "../FormComponents/DayOptions/DayOptions";
import MonthOptions from "../FormComponents/MonthOptions/MonthOptions";
import YearOptions from "../FormComponents/YearOptions/YearOptions";
import "./AddHighSchool.css";

const AddHighSchool = ({ showHide, highSc, ymd }) => {
  const [birthYear, setBirthYear] = useState(false);
  const [birthMonth, setBirthMonth] = useState(false);
  const [birthDay, setBirthDay] = useState(false);

  const [showMonth, setShowMonth] = useState(false);
  const [showDay, setShowDay] = useState(false);

  const [ydmtrue, setYmdrue] = useState(true);

  // school start state
  const [startSchooly, setStartSchooly] = useState(false);
  const [startSchoolm, setStartSchoolm] = useState(false);
  const [startSchoold, setStartSchoold] = useState(false);

  const [showSchoolMonth, setShowSchoolMonth] = useState(false);
  const [showSchoolDay, setShowSchoolDay] = useState(false);

  const yearMonthDay = useRef(null);

  usePopupClose(yearMonthDay, setBirthYear);
  usePopupClose(yearMonthDay, setBirthMonth);
  usePopupClose(yearMonthDay, setBirthDay);

  usePopupClose(yearMonthDay, setStartSchooly);
  usePopupClose(yearMonthDay, setStartSchoolm);
  usePopupClose(yearMonthDay, setStartSchoold);
  // hnadle year
  const handleYear = () => {
    setBirthYear(!birthYear);
    setBirthMonth(false);
    setBirthDay(false);
    setShowMonth(true);
    ymd(true);
    highSc(true);
  };
  // hnadle year
  const handleMonth = () => {
    setBirthMonth(!birthMonth);
    setBirthYear(false);
    setBirthDay(false);
    ymd(false);
    setShowDay(true);
    highSc(true);
  };
  // hnadle year
  const handleDay = () => {
    setBirthDay(!birthDay);
    setBirthYear(false);
    setBirthMonth(false);
    ymd(false);
    highSc(true);
  };
  // hnadle start year
  const handleStartYear = () => {
    setStartSchooly(!startSchooly);
    setStartSchoolm(false);
    setStartSchoold(false);
    setShowSchoolMonth(true);
    ymd(true);
    highSc(true);
  };
  // hnadle year
  const handleStartMonth = () => {
    setStartSchoolm(!startSchoolm);
    setStartSchooly(false);
    setStartSchoold(false);
    setShowSchoolDay(true);
    ymd(true);
    highSc(true);
  };
  // hnadle year
  const handleStartDay = () => {
    setStartSchoold(!startSchoold);
    setStartSchooly(false);
    setStartSchoolm(false);
    ymd(false);
    highSc(true);
  };

  return (
    <>
      <form action="">
        <input type="text" placeholder="School" />

        <h4>Time Period</h4>
        <div className="birth-day-box">
          <div
            className="year-option"
            onClick={handleStartYear}
            ref={yearMonthDay}
          >
            <span>year</span>
            <span
              className="year-icon"
              style={{
                backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/gqBqhcDX1Yc.png")`,
              }}
            ></span>
          </div>
          {showSchoolMonth && (
            <div
              className="year-option"
              onClick={handleStartMonth}
              ref={yearMonthDay}
            >
              <span>Month</span>
              <span
                className="year-icon"
                style={{
                  backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/gqBqhcDX1Yc.png")`,
                }}
              ></span>
            </div>
          )}
          {showSchoolDay && (
            <div
              className="year-option"
              onClick={handleStartDay}
              ref={yearMonthDay}
            >
              <span>Day</span>
              <span
                className="year-icon"
                style={{
                  backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/gqBqhcDX1Yc.png")`,
                }}
              ></span>
            </div>
          )}
          <p>to</p>
          <div className="year-option" onClick={handleYear} ref={yearMonthDay}>
            <span>year</span>
            <span
              className="year-icon"
              style={{
                backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/gqBqhcDX1Yc.png")`,
              }}
            ></span>
          </div>
          {showMonth && (
            <div
              className="year-option"
              onClick={handleMonth}
              ref={yearMonthDay}
            >
              <span>Month</span>
              <span
                className="year-icon"
                style={{
                  backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/gqBqhcDX1Yc.png")`,
                }}
              ></span>
            </div>
          )}
          {showDay && (
            <div className="year-option" onClick={handleDay} ref={yearMonthDay}>
              <span>Day</span>
              <span
                className="year-icon"
                style={{
                  backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/gqBqhcDX1Yc.png")`,
                }}
              ></span>
            </div>
          )}
        </div>
        {birthYear && <YearOptions ydmtrue={ydmtrue} highSc={highSc} />}
        {birthMonth && <MonthOptions ydmtrue={ydmtrue} highSc={highSc} />}
        {birthDay && <DayOptions ydmtrue={ydmtrue} highSc={highSc} />}

        {startSchooly && <YearOptions ydmtrue={ydmtrue} highSc={highSc} />}
        {startSchoolm && <MonthOptions ydmtrue={ydmtrue} highSc={highSc} />}
        {startSchoold && <DayOptions ydmtrue={ydmtrue} highSc={highSc} />}
        <div className="redio-box">
          <input type="checkbox" name="" id="" />
          <p>Graduated</p>
        </div>
        <textarea
          name=""
          id=""
          cols="10"
          rows="10"
          placeholder="Discription"
        ></textarea>

        <div className="public-save-cencel">
          <button>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/qop9rFQ_Ys1.png"
              alt=""
            />
            <span>Public</span>
          </button>
          <div className="cancel-save-btn">
            <button onClick={() => showHide(false)}>
              <span>Cancel</span>
            </button>
            <button>
              <span>Save</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddHighSchool;
