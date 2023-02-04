import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePopupClose from "../../../../../hooks/usePopupClose";
import { profileUpdate } from "../../../../../redux/auth/authAction";
import { setMonthShortName } from "../../../../../utility/satvalus";
import FbModal from "../../../../FbModal/FbModal";
import "./AddCity.css";
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
const AddCity = ({ showHide }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  /// modal control state
  const [cModal, setCModal] = useState(false);

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

  let date = new Date();
  /// handle input add work place
  const [input, setInput] = useState({
    currentCity: "",
    day: date.getDate(),
    month: setMonthShortName(date.getMonth()),
    year: date.getFullYear(),
  });

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

    if (!input.currentCity) {
      setCModal(true);
    } else {
      dispatch(
        profileUpdate(
          {
            current_city: [
              ...user.current_city,
              {
                currentCity: input.currentCity,
                fromDateStart: {
                  fromYear: input.year,
                  fromMonth: input.month,
                  fromDay: input.day,
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

  return (
    <>
      <form onSubmit={handleWorkSubmit}>
        <input
          name="currentCity"
          type="text"
          value={input.currentCity}
          placeholder="Current city"
          onChange={handleInputChange}
        />
        <div className="birth-day-box">
          <p>Date Moved</p>
          <div className="year-option" onClick={handleYear} ref={yearMonthDay}>
            <span>year</span>
            <select
              name="year"
              id="year"
              className="year"
              ref={yearMonthDay}
              onChange={handleInputChange}
            >
              <option value="">Year</option>
              {year.map((item, index) => (
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
                name="month"
                id="month"
                className="month"
                ref={yearMonthDay}
                onChange={handleInputChange}
              >
                <option value="">Year</option>
                {month.map((item, index) => (
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
                name="day"
                id="day"
                className="day"
                ref={yearMonthDay}
                onChange={handleInputChange}
              >
                <option value="">Year</option>
                {day.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          )}
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
            <button onClick={() => showHide(false)}>
              <span>Cancel</span>
            </button>
            <button type="submit">Save</button>
          </div>
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
      </form>
    </>
  );
};

export default AddCity;
