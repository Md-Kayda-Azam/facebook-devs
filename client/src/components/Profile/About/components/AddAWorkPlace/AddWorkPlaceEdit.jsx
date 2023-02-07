import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePopupClose from "../../../../../hooks/usePopupClose";
import { profileUpdate } from "../../../../../redux/auth/authAction";
import { setMonthShortName } from "../../../../../utility/satvalus";
import FbModal from "../../../../FbModal/FbModal";
import "./AddAWorkPlace.css";

const day = [
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
const month = [
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
const year = Array.from(
  { length: 118 },
  (_, i) => new Date().getFullYear() - i
);

const AddWorkPlaceEdit = ({ showHide, hide, showEdit, hideEdit }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  /// modal control state
  const [cModal, setCModal] = useState(false);

  const [birthYear, setBirthYear] = useState(false);
  const [birthMonth, setBirthMonth] = useState(false);
  const [birthDay, setBirthDay] = useState(false);

  const [showMonths, setShowMonths] = useState(false);
  const [showDays, setShowDays] = useState(false);

  const [showMonthe, setShowMonthe] = useState(false);
  const [showDaye, setShowDaye] = useState(false);

  // start year
  const [startYear, setStartYear] = useState(false);

  // check box
  const [checkShowHide, setCheckShowHide] = useState(true);

  // handle checkbox
  const handleShowHidef = () => {
    setCheckShowHide(false);
    setStartYear(!startYear);
  };
  // handle checkbox
  const handleShowHidet = () => {
    setCheckShowHide(false);
    setStartYear(!startYear);
  };

  let date = new Date();
  /// handle input add work place
  const [input, setInput] = useState({
    companyName: "",
    position: "",
    cityTown: "",
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

  // hnadle year
  const handleYears = () => {
    setBirthYear(!birthYear);
    setBirthMonth(false);
    setBirthDay(false);
    setShowMonths(true);
  };
  // hnadle month
  const handleMonths = () => {
    setBirthMonth(!birthMonth);
    setBirthYear(false);
    setBirthDay(false);
    setShowDays(true);
  };
  // hnadle day
  const handleDays = () => {
    setBirthDay(!birthDay);
    setBirthYear(false);
    setBirthMonth(false);
  };

  // hnadle end year month day
  // hnadle year
  const handleYeare = () => {
    setBirthYear(!birthYear);
    setBirthMonth(false);
    setBirthDay(false);
    setShowMonthe(true);
  };
  // hnadle month
  const handleMonthe = () => {
    setBirthMonth(!birthMonth);
    setBirthYear(false);
    setBirthDay(false);
    setShowDaye(true);
  };
  // hnadle day
  const handleDaye = () => {
    setBirthDay(!birthDay);
    setBirthYear(false);
    setBirthMonth(false);
  };

  // handle inpu change
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle work submit
  const handleWorkSubmit = (e) => {
    e.preventDefault();

    if (!input.companyName) {
      setCModal(true);
    } else {
      dispatch(
        profileUpdate(
          {
            work: [
              ...user.work,
              {
                companyName: input.companyName,
                position: input.position,
                cityTown: input.cityTown,
                dec: input.cityTown,
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
    }
  };

  /// handle cancel edit form
  const handleCancelEditForm = () => {
    hide(false);
    hideEdit(false);
    showEdit(true);
  };
  return (
    <>
      <form action="" onSubmit={handleWorkSubmit}>
        <input
          name="companyName"
          type="text"
          value={input.companyName}
          onChange={handleInputChange}
          placeholder="Company"
        />
        <input
          name="position"
          type="text"
          value={input.position}
          onChange={handleInputChange}
          placeholder="Position"
        />
        <input
          name="cityTown"
          type="text"
          value={input.cityTown}
          onChange={handleInputChange}
          placeholder="City/Town"
        />
        <textarea
          name="dec"
          id=""
          cols="10"
          value={input.dec}
          rows="10"
          onChange={handleInputChange}
          placeholder="Discription"
        ></textarea>
        <h4>Time Period</h4>
        <div className="redio-box">
          {checkShowHide && (
            <input
              type="checkbox"
              name=""
              id=""
              onClick={handleShowHidef}
              checked
            />
          )}
          {!checkShowHide && (
            <input type="checkbox" name="" id="" onClick={handleShowHidet} />
          )}

          <p>I currently work here</p>
        </div>
        <div className="yearMonthDay">
          {startYear && (
            <div className="birth-day-box">
              <div className="year-option" onClick={handleYears}>
                <select
                  name="years"
                  onChange={handleInputChange}
                  id="year"
                  className="year"
                  ref={yearMonthDay}
                >
                  <option value="">Year</option>
                  {year.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              {showMonths && (
                <div
                  className="year-option"
                  onClick={handleMonths}
                  ref={yearMonthDay}
                >
                  <select
                    className="month"
                    onChange={handleInputChange}
                    name="months"
                    id=""
                    ref={yearMonthDay}
                  >
                    {month.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {showDays && (
                <div
                  className="year-option"
                  onChange={handleInputChange}
                  onClick={handleDays}
                  ref={yearMonthDay}
                >
                  <select className="day" name="days" id="" ref={yearMonthDay}>
                    {day.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <p>to</p>
            </div>
          )}
          <div className="birth-day-box">
            {!startYear && <p>From</p>}
            <div className="year-option" onClick={handleYeare}>
              <select
                name="yeare"
                onChange={handleInputChange}
                id="year"
                className="year"
                ref={yearMonthDay}
              >
                <option value="">Year</option>
                {year.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {showMonthe && (
              <div
                className="year-option"
                onClick={handleMonthe}
                ref={yearMonthDay}
              >
                <select
                  className="month"
                  onChange={handleInputChange}
                  name="monthe"
                  id=""
                  ref={yearMonthDay}
                >
                  {month.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {showDaye && (
              <div
                className="year-option"
                onChange={handleInputChange}
                onClick={handleDaye}
                ref={yearMonthDay}
              >
                <select className="day" name="daye" id="" ref={yearMonthDay}>
                  {day.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        <div className="public-save-cencel">
          <button>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/qop9rFQ_Ys1.png"
              alt=""
            />
            <span>Public</span>
          </button>
          <div className="cancel-save-btn">
            <button onClick={handleCancelEditForm}>
              <span>Cancel</span>
            </button>
            <button type="submit">Save</button>
          </div>
          {cModal && (
            <FbModal title={"Invalid Employer"} closePopup={setCModal}>
              <div className="Invalid-modal">
                <div className="dec">
                  <p>The employer you entered is not valid.</p>
                </div>
                <div className="footer">
                  <button onClick={() => setCModal(false)}>Ok</button>
                </div>
              </div>
            </FbModal>
          )}
        </div>
      </form>
    </>
  );
};

export default AddWorkPlaceEdit;
