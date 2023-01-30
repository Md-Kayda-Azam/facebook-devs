import React, { useRef, useState } from "react";
import usePopupClose from "../../../../../hooks/usePopupClose";
import DayOptions from "../FormComponents/DayOptions/DayOptions";
import MonthOptions from "../FormComponents/MonthOptions/MonthOptions";
import YearOptions from "../FormComponents/YearOptions/YearOptions";
import "./Form.css"

const Form = ({ showHide }) => {
  const [birthYear, setBirthYear] = useState(false);
  const [birthMonth, setBirthMonth] = useState(false);
  const [birthDay, setBirthDay] = useState(false);

  const [showMonth, setShowMonth] = useState(false);
  const [showDay, setShowDay] = useState(false);

  const yearMonthDay = useRef(null);

  usePopupClose(yearMonthDay, setBirthYear);
  usePopupClose(yearMonthDay, setBirthMonth);
  usePopupClose(yearMonthDay, setBirthDay);
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
  return (
    <>
      <form action="">
        <input type="text" placeholder="Company" />
        <input type="text" placeholder="Position" />
        <input type="text" placeholder="City/Town" />
        <textarea
          name=""
          id=""
          cols="10"
          rows="10"
          placeholder="Discription"
        ></textarea>
        <h4>Time Period</h4>
        <div className="redio-box">
          <input type="checkbox" name="" id="" />
          <p>I currently work here</p>
        </div>
        <div className="birth-day-box">
          <p>From</p>
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
        {birthYear && <YearOptions />}
        {birthMonth && <MonthOptions />}
        {birthDay && <DayOptions />}
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

export default Form;
