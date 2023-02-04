import React from "react";
import "./AddAboutYou.css";

const AddAboutYou = ({ showHide }) => {
  return (
    <>
      <form action="">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="About you"
        ></textarea>
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

export default AddAboutYou;
