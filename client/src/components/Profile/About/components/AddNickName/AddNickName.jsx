import React, { useRef } from "react";
import { useState } from "react";
import usePopupClose from "../../../../../hooks/usePopupClose";
import "./AddNickName.css";
const nickName = [
  "NickName",
  "Maiden Name",
  "Alternate Spelling",
  "Married Name",
  "Father's Name",
  "Birth Name",
  "Former Name",
  "Name with title",
  "Other",
];
const AddNickName = ({ showHide }) => {
  const [nickNameShowHide, setNickNameShowHide] = useState(false);
  const status = useRef(null);

  usePopupClose(status, setNickNameShowHide);

  return (
    <>
      <form action="">
        <div className="nick-name" onClick={() => setNickNameShowHide(true)}>
          <div className="name-two">
            <span className="name-small">Type name</span>
            <span>Nickname</span>
          </div>
          <span className="family-img"></span>
          <select name="" id="" className="nick-name-select">
            <option value="a">Nickname</option>
            {nickName.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <input type="text" placeholder="Name" />
        <div className="check-box">
          <div className="check-box-chek">
            <input
              type="checkbox"
              className="check-sixe"
              name="check-sixe"
              id=""
            />
            <span className="check-title">Show at top of profile</span>
          </div>
          <p>
            Other names are always public and help people find you on Facebook.
          </p>
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
            <button>
              <span>Save</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddNickName;
