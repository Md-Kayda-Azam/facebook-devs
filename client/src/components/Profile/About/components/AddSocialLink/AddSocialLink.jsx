import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUpdate } from "../../../../../redux/auth/authAction";
import FbModal from "../../../../FbModal/FbModal";
import "./AddSocialLink.css";

const relationshipStatus = [
  "Instagram",
  "Twitter",
  "LinkedIn",
  "Github",
  "Whatapp",
  "Pinterest",
  "Snapchat",
  "Youtube",
  "Tiktok",
  "Skype",
  "Twitch",
  "LINE",
  "Wechat",
  "Kik",
];
const AddSocialLink = ({ showHide }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  /// modal control state
  const [cModal, setCModal] = useState(false);

  const [addSocialLink, setAddSocialLink] = useState([{ services: "" }]);

  // handle add website
  const handleAddWebSite = (e) => {
    e.preventDefault();
    setAddSocialLink([...addSocialLink, { services: "" }]);
  };

  /// handle input add work place
  const [input, setInput] = useState({
    social_link: "",
    social_title: "",
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

    if (!input.social_link) {
      setCModal(true);
    } else {
      dispatch(
        profileUpdate(
          {
            social: [
              ...user.social,
              {
                social_link: input.social_link,
                social_title: input.social_title,
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
        {addSocialLink.map((item, index) => (
          <div key={index} className="web-site-item">
            <div className="social-item">
              <input
                name="social_link"
                value={input.social_link}
                type="text"
                placeholder="user name"
                onChange={handleInputChange}
              />
              <select
                name="social_title"
                id=""
                className="social-select"
                onChange={handleInputChange}
              >
                <option value="a">Status</option>
                {relationshipStatus.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {addSocialLink.length - 1 === index &&
              addSocialLink.length < 10 && (
                <button
                  className="add-a-website socialLink"
                  onClick={handleAddWebSite}
                >
                  <p></p>
                  <strong>Add a social link</strong>
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

export default AddSocialLink;
