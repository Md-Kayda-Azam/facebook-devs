import React from "react";
import "./ContactInfo.css";

const ContactInfo = ({
  icon,
  name,
  nameInfo,
  friendsPublic,
  editPhoto,
  emty,
  editEmty,
}) => {
  return (
    <>
      <div className="contact-mobile">
        <div className="call">
          {emty && <div style={{ width: "25px" }}></div>}
          {icon && <img src={icon} alt="" />}
          <div className="number-mobile">
            <p>{name}</p>
            <span>{nameInfo}</span>
          </div>
        </div>

        <div className="edit-and-info-public-friend">
          <div className="info">
            <img src={friendsPublic} alt="" />
          </div>
          {editEmty && <div style={{ width: "40px" }}></div>}
          {editPhoto && (
            <button>
              <div
                className="button"
                style={{
                  backgroundImage: `url("${editPhoto}")`,
                }}
              ></div>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
