import React from "react";
import { useState } from "react";
import FbModal from "../../../FbModal/FbModal";
import "./AddHobbiesModal.css";

const AddHobbiesModal = ({ hobbie }) => {
  return (
    <>
      <FbModal title={"Hobbies"} closePopup={hobbie}>
        <div className="add-edit-hobbies">
          <div className="add-hobbies">
            <div className="search-hobbies">
              <input type="text" name="" id="" />
            </div>
            <div className="all-hobbies-show">
              <div className="hobbies">
                <span className="hobbies-item-img">🏈</span>
                <span className="hobbies-item-name">Football(Soccer)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hobbies-footer">
          <div className="world-icon"></div>
          <div className="hobbies-public">Hobbies are Public</div>
        </div>
      </FbModal>
    </>
  );
};

export default AddHobbiesModal;
