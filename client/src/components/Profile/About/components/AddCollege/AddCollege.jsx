import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePopupClose from "../../../../../hooks/usePopupClose";
import { profileUpdate } from "../../../../../redux/auth/authAction";
import { setMonthShortName } from "../../../../../utility/satvalus";
import FbModal from "../../../../FbModal/FbModal";
import "./AddCollege.css";
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

const AddCollege = ({ showHide, hide }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  /// modal control state
  const [cModal, setCModal] = useState(false);
  const [saveBtn, setSaveBtn] = useState(true);

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

  // checked show hide
  const [check_Show_Hide, setCheck_Show_Hide] = useState(false);
  let date = new Date();
  /// handle input add work place
  const [input, setInput] = useState({
    college_university: "",
    cenOne: "",
    cenTwo: "",
    cenThree: "",
    deg: "",
    dec: "",
    days: date.getDate(),
    months: setMonthShortName(date.getMonth()),
    years: date.getFullYear(),
    daye: date.getDate(),
    monthe: setMonthShortName(date.getMonth()),
    yeare: date.getFullYear(),
  });
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
  // handle inpu change
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setSaveBtn(false);
  };

  // handle work submit
  const handleWorkSubmit = (e) => {
    e.preventDefault();

    if (!input.college_university) {
      setCModal(true);
    } else {
      dispatch(
        profileUpdate(
          {
            college_university: [
              ...user.college_university,
              {
                college_university: input.college_university,
                deg: input.deg,
                cenOne: input.cenOne,
                cenTwo: input.cenTwo,
                cenThree: input.cenThree,
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
      hide(false);
    }
  };
  //handleTrue
  const handleTrue = () => {
    setSaveBtn(!saveBtn);
  };

  const handleGraduteSchool = () => {};
  return (
    <>
      <form action="" onSubmit={handleWorkSubmit}>
        <input
          name="college_university"
          type="text"
          placeholder="School"
          onChange={handleInputChange}
        />
        <h4>Time Period</h4>
        <div className="birth-day-box">
          <div
            className="year-option"
            onClick={handleStartYear}
            ref={yearMonthDay}
          >
            <span>year</span>
            <select
              className="year"
              name="years"
              id=""
              ref={yearMonthDay}
              onChange={handleInputChange}
            >
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
              <span>Month</span>
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
              className="year"
              name="yeare"
              id=""
              ref={yearMonthDay}
              onChange={handleInputChange}
            >
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
              <span>Month</span>
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
          {saveBtn && (
            <input type="checkbox" checked onClick={handleTrue} name="" id="" />
          )}
          {!saveBtn && (
            <input type="checkbox" onClick={handleTrue} name="" id="" />
          )}
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
        <h4>Concentrations</h4>
        <input
          name="cenOne"
          type="text"
          placeholder="Concentrations"
          onChange={handleInputChange}
        />
        <input
          name="cenTwo"
          type="text"
          placeholder="Concentrations"
          onChange={handleInputChange}
        />
        <input
          name="cenThree"
          type="text"
          placeholder="Concentrations"
          onChange={handleInputChange}
        />
        <h4>Attended for</h4>
        <div className="redio-box">
          <input type="radio" name="college" value={"today_check"} id="" />
          <p>College</p>
        </div>
        <div className="redio-box">
          <input
            type="radio"
            name="graduate_School"
            value={"today_check"}
            id=""
          />
          <p>Graduate School</p>
        </div>
        <input
          name="deg"
          type="text"
          placeholder="Degree"
          onChange={handleInputChange}
        />
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
            <button
              className={`add-city-saveBtn ${
                !saveBtn && "add-city-saveBtn-Save"
              }`}
              disabled={saveBtn}
              type="submit"
            >
              Save
            </button>
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

export default AddCollege;
