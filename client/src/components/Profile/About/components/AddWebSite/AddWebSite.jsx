import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUpdate } from "../../../../../redux/auth/authAction";
import FbModal from "../../../../FbModal/FbModal";
import "./AddWebSite.css";

const AddWebSite = ({ showHide }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  /// modal control state
  const [cModal, setCModal] = useState(false);

  const [webSitelist, setWebSitelist] = useState([{ services: "" }]);

  // handle add website
  const handleAddWebSite = (e) => {
    e.preventDefault();
    setWebSitelist([...webSitelist, { services: "" }]);
  };
  /// handle input add work place
  const [input, setInput] = useState({
    web_site: "",
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

    if (!input.web_site) {
      setCModal(true);
    } else {
      dispatch(
        profileUpdate(
          {
            web_site: [
              ...user.web_site,
              {
                web_site: input.web_site,
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
        {webSitelist.map((item, index) => (
          <div key={index} className="web-site-item">
            <input
              name="web_site"
              type="text"
              placeholder="Website address"
              value={input.web_site}
              onChange={handleInputChange}
            />
            {webSitelist.length - 1 === index && webSitelist.length < 100 && (
              <button className="add-a-website" onClick={handleAddWebSite}>
                <p></p>
                <strong>Add a website</strong>
              </button>
            )}
          </div>
        ))}
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

export default AddWebSite;
