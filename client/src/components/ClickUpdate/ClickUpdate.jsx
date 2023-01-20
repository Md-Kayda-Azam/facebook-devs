import React from "react";
import "./ClickUpdate.css";

const ClickUpdate = ({ save, hide, data, data2 }) => {
  return (
    <>
      <div className="click-update">
        <textarea
          name=""
          id=""
          placeholder={data.placeholder}
          onChange={(e) => data.setData(e.target.value)}
        >
          {data.data}
        </textarea>
        {data2 && (
          <textarea
            name=""
            id=""
            placeholder={data2.placeholder}
            onChange={(e) => data2.setData(e.target.value)}
          >
            {data.data}
          </textarea>
        )}

        <p>character remining</p>
        <div className="click-update-btn">
          <div className="bio-status">
            <div
              style={{
                backgroundImage: `url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/HgfBXTEArfp.png)`,
              }}
              className="earth-icon"
            ></div>
            <span>Public</span>
          </div>
          <div className="bio-btn">
            <button onClick={() => hide(false)}>Cancel</button>
            <button className="blue" onClick={save}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClickUpdate;
