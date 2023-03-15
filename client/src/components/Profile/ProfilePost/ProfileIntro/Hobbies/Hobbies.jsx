import React, { useState } from "react";
import AddHobbies from "../../AddHobbies/AddHobbies";

const Hobbies = () => {
  const [addEditHobbies, setAddEditHobbies] = useState(false);

  return (
    <>
      <div className="hobbies">
        <div className="hobbies-list">
          <div className="hobbies-list-item">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/65/84/79/1000_F_265847932_UeXraqwGWn5nmmMucSQssyfMNfp64nfP.jpg"
              alt=""
            />
            <span>travelling</span>
          </div>
          <div className="hobbies-list-item">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/65/84/79/1000_F_265847932_UeXraqwGWn5nmmMucSQssyfMNfp64nfP.jpg"
              alt=""
            />
            <span>Coding</span>
          </div>
          <div className="hobbies-list-item">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/65/84/79/1000_F_265847932_UeXraqwGWn5nmmMucSQssyfMNfp64nfP.jpg"
              alt=""
            />
            <span>Cricket</span>
          </div>
          <div className="hobbies-list-item">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/65/84/79/1000_F_265847932_UeXraqwGWn5nmmMucSQssyfMNfp64nfP.jpg"
              alt=""
            />
            <span>Football</span>
          </div>
        </div>
        <button
          className="personal-info-button"
          onClick={() => setAddEditHobbies(true)}
        >
          Edit hobbies
        </button>
        {addEditHobbies && <AddHobbies showHide={setAddEditHobbies} />}
      </div>
    </>
  );
};

export default Hobbies;
