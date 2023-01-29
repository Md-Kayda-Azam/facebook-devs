import React from "react";
import "./ContactInfo.css";

const ContactInfo = ({ icon, name, nameInfo, friendsPublic }) => {
  return (
    <>
      <div className="contact-mobile">
        <div className="call">
          <img src={icon} alt="" />
          <div className="number-mobile">
            <p>{name}</p>
            <span>{nameInfo}</span>
          </div>
        </div>

        <div className="edit-and-info-public-friend">
          <div className="info">
            <img src={friendsPublic} alt="" />
          </div>
          <button>
            <div className="button"></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
