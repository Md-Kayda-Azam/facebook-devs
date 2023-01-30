import React, { useRef, useState } from "react";
import usePopupClose from "../../../../../hooks/usePopupClose";
import DayOptions from "../FormComponents/DayOptions/DayOptions";
import MonthOptions from "../FormComponents/MonthOptions/MonthOptions";
import YearOptions from "../FormComponents/YearOptions/YearOptions";
import "./AddCollege.css";

const AddCollege = ({ showHide, addColl, addCollege }) => {
  const [birthYear, setBirthYear] = useState(false);
  const [birthMonth, setBirthMonth] = useState(false);
  const [birthDay, setBirthDay] = useState(false);

  const [showMonth, setShowMonth] = useState(false);
  const [showDay, setShowDay] = useState(false);

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
  };
  // hnadle year
  const handleMonth = () => {
    setBirthMonth(!birthMonth);
    setBirthYear(false);
    setBirthDay(false);

    setShowDay(true);
  };
  // hnadle year
  const handleDay = () => {
    setBirthDay(!birthDay);
    setBirthYear(false);
    setBirthMonth(false);
  };
  // hnadle start year
  const handleStartYear = () => {
    setStartSchooly(!startSchooly);
    setStartSchoolm(false);
    setStartSchoold(false);
    setShowSchoolMonth(true);
  };
  // hnadle year
  const handleStartMonth = () => {
    setStartSchoolm(!startSchoolm);
    setStartSchooly(false);
    setStartSchoold(false);
    setShowSchoolDay(true);
  };
  // hnadle year
  const handleStartDay = () => {
    setStartSchoold(!startSchoold);
    setStartSchooly(false);
    setStartSchoolm(false);
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
        {birthYear && <YearOptions addColl={addColl} addCollege={addCollege} />}
        {birthMonth && (
          <MonthOptions addColl={addColl} addCollege={addCollege} />
        )}
        {birthDay && <DayOptions addColl={addColl} addCollege={addCollege} />}

        {startSchooly && (
          <YearOptions addColl={addColl} addCollege={addCollege} />
        )}
        {startSchoolm && (
          <MonthOptions addColl={addColl} addCollege={addCollege} />
        )}
        {startSchoold && (
          <DayOptions addColl={addColl} addCollege={addCollege} />
        )}
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
        <h4>Concentrations</h4>
        <input type="text" placeholder="Concentrations" />
        <input type="text" placeholder="Concentrations" />
        <input type="text" placeholder="Concentrations" />
        <h4>Attended for</h4>
        <div className="redio-box">
          <input type="radio" name="" id="" />
          <p>College</p>
        </div>
        <div className="redio-box">
          <input type="radio" name="" id="" />
          <p>Graduate School</p>
        </div>
        <input type="text" placeholder="Degree" />
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

export default AddCollege;
