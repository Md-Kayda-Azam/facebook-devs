import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePopupClose from "../../../../../hooks/usePopupClose";
import { profileUpdate } from "../../../../../redux/auth/authAction";
import FbModal from "../../../../FbModal/FbModal";
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
const AddRelationship = ({ showHide, hide }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  /// modal control state
  const [cModal, setCModal] = useState(false);

  const [show, setShow] = useState(false);
  const status = useRef(null);

  /// handle input add work place
  const [input, setInput] = useState({
    relationship: "",
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

    if (!input.relationship) {
      setCModal(true);
    } else {
      dispatch(
        profileUpdate(
          {
            relationship: input.relationship,
          },
          user._id,
          setInput
        )
      );
      showHide(false);
      hide(true);
    }
  };

  usePopupClose(status, setShow);

  // handle cancel btn
  const handleCancelBtn = () => {
    showHide(false);
    hide(true);
  };
  return (
    <>
      <form onSubmit={handleWorkSubmit}>
        <div className="status" onClick={() => setShow(!show)}>
          <span></span>
          <span className="img"></span>
          <select
            name="relationship"
            id=""
            className="status-select"
            onChange={handleInputChange}
          >
            <option value="">Status</option>
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
            <button onClick={handleCancelBtn}>
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

export default AddRelationship;
