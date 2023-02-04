import React from "react";
import { useState } from "react";
import FbModal from "../../../FbModal/FbModal";
import AddHobbiesModal from "../AddHobbiesModal/AddHobbiesModal";
import "./AddHobbies.css";

const AddHobbies = ({ showHide }) => {
  const [showAddHobbie, setShowAddHobbie] = useState(false);

  return (
    <>
      <FbModal>
        <div className="add-edit-hobbies">
          <div className="wraper-hobbies">
            <div className="hobbies-item-hobbies">
              <span className="hobbies-img"></span>
              <div className="hobbies-icon-li" onClick={() => showHide(false)}>
                <span className="hobbies-icon"></span>
              </div>
            </div>
            <div className="hobbies-item-title-dec">
              <span className="hobbies-title" title={"Edit hobbies"}>
                Add hobbies
              </span>
              <span className="hobbies-dec">
                What do you love to do? Choose from the popular hobbies below or
                add others.
              </span>
            </div>
            <div className="hobbies-item-recommended">
              <span className="hobbies-recommended">RECOMMENDED HOBBIES</span>
            </div>
            <div className="hobbies-item-hobbie">
              <div className="hobbies">
                <span className="hobbies-item-img">
                  <span class="x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft">
                    🌎
                  </span>
                </span>
                <span className="hobbies-item-name">Traveling</span>
              </div>
              <div className="hobbies">
                <span className="hobbies-item-img">🏈</span>
                <span className="hobbies-item-name">Football(Soccer)</span>
              </div>
              <div className="hobbies">
                <span className="hobbies-item-img">🎵</span>
                <span className="hobbies-item-name">Listening to Music</span>
              </div>
              <div className="hobbies">
                <span className="hobbies-item-img">📖</span>
                <span className="hobbies-item-name">Reading</span>
              </div>
              <div className="hobbies">
                <span className="hobbies-item-img">🚲</span>
                <span className="hobbies-item-name">Bike</span>
              </div>
              <div className="hobbies">
                <span className="hobbies-item-img">👨‍🍳</span>
                <span className="hobbies-item-name">Cooking</span>
              </div>
            </div>
            <div className="hobbies-search">
              <div
                className="search-hobbies"
                onClick={() => setShowAddHobbie(true)}
              >
                <span className="hobbies-item-search"></span>
                <span className="hobbies-item-name">Search for others</span>
              </div>
            </div>
            {showAddHobbie && <AddHobbiesModal hobbie={showHide} />}
          </div>
          <div className="hobbies-footer">
            <div className="world-icon"></div>
            <div className="hobbies-public">Hobbies are Public</div>
          </div>
        </div>
      </FbModal>
    </>
  );
};

export default AddHobbies;
