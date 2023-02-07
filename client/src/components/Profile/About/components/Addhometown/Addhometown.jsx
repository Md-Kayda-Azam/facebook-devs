import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUpdate } from "../../../../../redux/auth/authAction";
import FbModal from "../../../../FbModal/FbModal";

const Addhometown = ({ showHide, hide, hideModal, hidePopup }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [showHideData, setShowHideData] = useState(
    user.home_town ? user.home_town : false
  );

  /// modal control state
  const [cModal, setCModal] = useState(false);
  /// handle input add work place
  const [input, setInput] = useState({
    homeTown: "",
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

    if (!input.homeTown) {
      setCModal(true);
    } else {
      dispatch(
        profileUpdate(
          {
            home_town: input.homeTown,
          },
          user._id,
          setInput
        )
      );
      hide(true);
      showHide(false);
      hideModal(false);
    }
  };

  // handle Cancel Form
  const handleCancelForm = () => {
    if (showHideData) {
      hide(true);
    } else {
      hide(false);
    }
    if (!showHideData) {
      hide(false);
    } else {
      hide(true);
    }
    showHide(false);
    hidePopup(false);
  };
  return (
    <>
      <form onSubmit={handleWorkSubmit}>
        <input
          name="homeTown"
          value={input.homeTown}
          type="text"
          placeholder="Home town"
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
            <button onClick={handleCancelForm}>
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

export default Addhometown;
