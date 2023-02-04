import React, { useRef, useState } from "react";
import usePopupClose from "../../../../../hooks/usePopupClose";
import "./AddFamilyMember.css";
const familyMember = [
  "Mother",
  "Father",
  "Daughter",
  "Son",
  "Sister",
  "Brother",
  "Aunt",
  "Uncle",
  "Niece",
  "Nephew",
  "Cousin (Feamle)",
  "Cousin (Male)",
];
const AddFamilyMember = ({ showHidep, showHide }) => {
  const [show, setShow] = useState(false);
  const status = useRef(null);

  usePopupClose(status, setShow);

  return (
    <>
      <form action="">
        <input type="text" placeholder="Family member" />
        <div className="status-family-member" onClick={() => setShow(!show)}>
          <span className="family-img"></span>
          <select name="" id="" className="family-status-select">
            <option value="a">Relationship</option>
            {familyMember.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
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

export default AddFamilyMember;
