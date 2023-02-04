import React from "react";
import { useState } from "react";
import "./AddWebSite.css";

const AddWebSite = ({ showHide }) => {
  const [webSitelist, setWebSitelist] = useState([{ services: "" }]);

  // handle add website
  const handleAddWebSite = (e) => {
    e.preventDefault();
    setWebSitelist([...webSitelist, { services: "" }]);
  };
  return (
    <>
      <form action="">
        {webSitelist.map((item, index) => (
          <div key={index} className="web-site-item">
            <input type="text" placeholder="Website address" />
            {webSitelist.length - 1 === index && webSitelist.length < 100 && (
              <button className="add-a-website" onClick={handleAddWebSite}>
                <p></p>
                <strong>Add a website</strong>
              </button>
            )}
          </div>
        ))}
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

export default AddWebSite;
