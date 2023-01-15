import React from "react";
import "./FbModal.css";
import cross from "../../_assets/icons/cross.png";

const FbModal = ({ children, title, closePopup }) => {
  return (
    <>
      <div className="blur-box">
        <div className="fb-modal-wraper">
          <div className="fb-modal-popup">
            <div className="fb-modal-header">
              <span className="title">{title}</span>
              <button onClick={() => closePopup(false)}>
                <img src={cross} alt="" />
              </button>
            </div>
            <div className="fb-modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FbModal;
