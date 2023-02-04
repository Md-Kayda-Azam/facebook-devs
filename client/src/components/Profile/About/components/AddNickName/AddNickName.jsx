import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePopupClose from "../../../../../hooks/usePopupClose";
import { profileUpdate } from "../../../../../redux/auth/authAction";
import FbModal from "../../../../FbModal/FbModal";
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

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  /// modal control state
  const [cModal, setCModal] = useState(false);

  /// handle input add work place
  const [input, setInput] = useState({
    nick_name: "",
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
            others_name: [
              ...user.others_name,
              {
                nick_name: input.nick_name,
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
        <div className="nick-name" onClick={() => setNickNameShowHide(true)}>
          <div className="name-two">
            <span className="name-small">Type name</span>
            <span>Nickname</span>
          </div>
          <span className="family-img"></span>
          <select
            name="nick_name"
            onChange={handleInputChange}
            id=""
            className="nick-name-select"
          >
            <option value="a">Nickname</option>
            {nickName.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <input
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
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

export default AddNickName;
