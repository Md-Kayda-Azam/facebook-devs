import React from "react";
import "./FbModal.css";
import cross from "../../_assets/icons/cross.png";
import { BiArrowBack } from "react-icons/bi";

const FbModal = ({ children, title, closePopup, back, upbd }) => {
  const handleBackAndUploadPhotoDelete = () => {
    back(false);
    upbd([]);
  };

  return (
    <>
      <div className="blur-box">
        <div className="fb-modal-wraper">
          <div className="fb-modal-popup">
            <div className="fb-modal-header">
              <span className="title">{title}</span>
              {back && (
                <button
                  className="back"
                  onClick={handleBackAndUploadPhotoDelete}
                >
                  <BiArrowBack />
                </button>
              )}
              {closePopup && (
                <button onClick={() => closePopup(false)}>
                  <img src={cross} alt="" />
                </button>
              )}
            </div>
            <div className="fb-modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FbModal;
