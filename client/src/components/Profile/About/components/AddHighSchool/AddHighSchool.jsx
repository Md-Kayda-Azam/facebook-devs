import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePopupClose from "../../../../../hooks/usePopupClose";
import { profileUpdate } from "../../../../../redux/auth/authAction";
import { setMonthShortName } from "../../../../../utility/satvalus";
import FbModal from "../../../../FbModal/FbModal";
import "./AddHighSchool.css";
const days = [
  "Day",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];
const months = [
  "Month",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const years = Array.from(
  { length: 118 },
  (_, i) => new Date().getFullYear() - i
);
const daye = [
  "Day",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];
const monthe = [
  "Month",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const yeare = Array.from(
  { length: 118 },
  (_, i) => new Date().getFullYear() - i
);

const AddHighSchool = ({ showHide, highSc, ymd }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  /// modal control state
  const [cModal, setCModal] = useState(false);

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
    ymd(true);
    highSc(true);
  };
  // hnadle year
  const handleMonth = () => {
    setBirthMonth(!birthMonth);
    setShowDay(true);
    setBirthYear(false);
    setBirthDay(false);
    ymd(true);
    highSc(true);
  };
  // hnadle year
  const handleDay = () => {
    setBirthDay(!birthDay);
    setBirthYear(false);
    setBirthMonth(false);
    ymd(true);
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
    ymd(true);
    highSc(true);
  };

  let date = new Date();
  // handle input update
  const [input, setInput] = useState({
    schoolName: "",
    dec: "",
    days: date.getDate(),
    months: setMonthShortName(date.getMonth()),
    years: date.getFullYear(),
    daye: date.getDate(),
    monthe: setMonthShortName(date.getMonth()),
    yeare: date.getFullYear(),
  });

  // handle inpu change
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle input submit
  const handleInputSubmit = (e) => {
    e.preventDefault();
    // if (!input.schoolName) {
    //   setCModal(true);
    // } else {
    dispatch(
      profileUpdate(
        {
          edu: [
            ...user.edu,
            {
              schoolName: input.schoolName,
              dec: input.dec,
              fromDateStart: {
                fromYear: input.years,
                fromMonth: input.months,
                fromDay: input.days,
              },
              fromDateEnd: {
                fromYear: input.yeare,
                fromMonth: input.monthe,
                fromDay: input.daye,
              },
            },
          ],
        },
        user._id,
        setInput
      )
    );
    showHide(false);
    // }
  };
  return (
    <>
      <form action="" onSubmit={handleInputSubmit}>
        <input
          type="text"
          placeholder="School"
          name="schoolName"
          onChange={handleInputChange}
          value={input.schoolName}
        />

        <h4>Time Period</h4>
        <div className="birth-day-box">
          <div
            className="year-option"
            onClick={handleStartYear}
            ref={yearMonthDay}
          >
            <select
              name="years"
              id="year"
              className="year"
              onChange={handleInputChange}
              ref={yearMonthDay}
            >
              <option value="">Year</option>
              {years.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {showSchoolMonth && (
            <div
              className="year-option"
              onClick={handleStartMonth}
              ref={yearMonthDay}
            >
              <select
                className="month"
                name="months"
                id=""
                ref={yearMonthDay}
                onChange={handleInputChange}
              >
                {months.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          )}
          {showSchoolDay && (
            <div
              className="year-option"
              onClick={handleStartDay}
              ref={yearMonthDay}
            >
              <span>Day</span>
              <select
                className="day"
                name="days"
                id=""
                ref={yearMonthDay}
                onChange={handleInputChange}
              >
                {days.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          )}
          <p>to</p>
          <div className="year-option" onClick={handleYear} ref={yearMonthDay}>
            <span>year</span>
            <select
              name="yeare"
              id="year"
              className="year"
              ref={yearMonthDay}
              onChange={handleInputChange}
            >
              <option value="">Year</option>
              {yeare.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {showMonth && (
            <div
              className="year-option"
              onClick={handleMonth}
              ref={yearMonthDay}
            >
              <select
                className="month"
                name="monthe"
                id=""
                ref={yearMonthDay}
                onChange={handleInputChange}
              >
                {monthe.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          )}
          {showDay && (
            <div className="year-option" onClick={handleDay} ref={yearMonthDay}>
              <span>Day</span>
              <select
                className="day"
                name="daye"
                id=""
                ref={yearMonthDay}
                onChange={handleInputChange}
              >
                {daye.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="redio-box">
          <input type="checkbox" name="" id="" />
          <p>Graduated</p>
        </div>
        <textarea
          name="dec"
          id=""
          cols="10"
          rows="10"
          placeholder="Discription"
          onChange={handleInputChange}
          value={input.dec}
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
            <button type="submit">Save</button>
          </div>
        </div>
        {cModal && (
          <FbModal title={"Profile update failed"} closePopup={setCModal}>
            <div className="Invalid-modal">
              <div className="dec">
                <p>
                  There was an error saving changes to your profile. Please try
                  again.
                </p>
              </div>
              <div className="footer">
                <button onClick={() => setCModal(false)}>Ok</button>
              </div>
            </div>
          </FbModal>
        )}
      </form>
    </>
  );
};

export default AddHighSchool;
