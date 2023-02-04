import React from "react";
import "./AddImpressum.css";

const AddImpressum = ({ showHide }) => {
  return (
    <>
      <form action="">
        <textarea
          name=""
          id=""
          cols="10"
          rows="10"
          placeholder="Impressum"
        ></textarea>
        <p className="impressum">
          This is an optional field. In certain countries, such as Austria,
          Germany and Switzerland, businesses may be required by law to include
          a statement of ownership on their web presence. The limit is 2,000
          characters.
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

export default AddImpressum;
