import React from "react";
import "./AddPrivacyPolicyLink.css";

const AddPrivacyPolicyLink = ({ showHide }) => {
  return (
    <>
      <form action="">
        <input type="text" placeholder="Please enter privacy policy link" />
        <p className="privacy-policy">
          Please, make sure links start with 'http://' or 'https://'.
        </p>
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

export default AddPrivacyPolicyLink;
