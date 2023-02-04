import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUpdate } from "../../../../../redux/auth/authAction";
import FbModal from "../../../../FbModal/FbModal";
import "./AddImpressum.css";

const AddImpressum = ({ showHide }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  /// modal control state
  const [cModal, setCModal] = useState(false);

  /// handle input add work place
  const [input, setInput] = useState({
    impressum: "",
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

    if (!input.impressum) {
      setCModal(true);
    } else {
      dispatch(
        profileUpdate(
          {
            impressum: input.impressum,
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
        <textarea
          name="impressum"
          id=""
          cols="10"
          rows="10"
          value={input.impressum}
          onChange={handleInputChange}
          placeholder="Impressum"
        ></textarea>
        <p className="impressum">
          This is an optional field. In certain countries, such as Austria,
          Germany and Switzerland, businesses may be required by law to include
          a statement of ownership on their web presence. The limit is 2,000
          characters.
        </p>
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

export default AddImpressum;
