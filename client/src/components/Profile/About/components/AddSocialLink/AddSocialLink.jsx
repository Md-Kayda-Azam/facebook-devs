import React, { useState } from "react";
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
  const [addSocialLink, setAddSocialLink] = useState([{ services: "" }]);

  // handle add website
  const handleAddWebSite = (e) => {
    e.preventDefault();
    setAddSocialLink([...addSocialLink, { services: "" }]);
  };
  return (
    <>
      <form action="">
        {addSocialLink.map((item, index) => (
          <div key={index} className="web-site-item">
            <div className="social-item">
              <input type="text" placeholder="user name" />
              <select name="" id="" className="social-select">
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
            <button>
              <span>Save</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddSocialLink;
