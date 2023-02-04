import React, { useRef } from "react";
import { useState } from "react";
import usePopupClose from "../../../../../hooks/usePopupClose";
import "./AddRelationship.css";
const relationshipStatus = [
  "Single",
  "In a relationship",
  "Engaged",
  "Married",
  "In a civil union",
  "In a demestic partnership",
  "In a open relationship",
  "It's complicated",
  "Separated",
  "Divorced",
  "Widowed",
];
const AddRelationship = ({ showHidep, showHide }) => {
  const [show, setShow] = useState(false);
  const status = useRef(null);

  usePopupClose(status, setShow);
  return (
    <>
      <form action="">
        <div className="status" onClick={() => setShow(!show)}>
          <span></span>
          <span className="img"></span>
          <select name="" id="" className="status-select">
            <option value="a">Status</option>
            {relationshipStatus.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <p>Changes will not appear in News Feed.</p>
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

export default AddRelationship;
