import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePopupClose from "../../../../../hooks/usePopupClose";
import { profileUpdate } from "../../../../../redux/auth/authAction";
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

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  /// modal control state
  const [cModal, setCModal] = useState(false);

  /// handle input add work place
  const [input, setInput] = useState({
    relationship: "",
    name: "",
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

    if (!input.name) {
      setCModal(true);
    } else {
      dispatch(
        profileUpdate(
          {
            family_members: [
              ...user.family_members,
              {
                relationship: input.relationship,
                name: input.name,
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
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Family member"
        />
        <div className="status-family-member" onClick={() => setShow(!show)}>
          <span className="family-img"></span>
          <select
            name="relationship"
            onChange={handleInputChange}
            id=""
            className="family-status-select"
          >
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
