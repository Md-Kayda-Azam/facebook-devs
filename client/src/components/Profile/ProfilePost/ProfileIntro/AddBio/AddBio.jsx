import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUpdate } from "../../../../../redux/auth/authAction";

const AddBio = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [bioshow, setBioshow] = useState(false);
  const [bio, setBio] = useState(user.bio ? user.bio : "");
  const [remain, setRemain] = useState(101 - bio.length);
  const [saveBtn, setSaveBtn] = useState(true);
  // handle bio show
  const handleBioShow = () => {
    setBioshow(!bioshow);
  };

  // handle bio change
  const handleBioChange = (e) => {
    setBio(e.target.value);
    setRemain(101 - e.target.value.length);
    setSaveBtn(false);

    if (remain <= 0) {
      setSaveBtn(true);
    }
  };

  // handle bio update
  const handleBioUpdate = (e) => {
    e.preventDefault();
    dispatch(profileUpdate({ bio }, user._id, setBioshow));
  };
  return (
    <>
      <div className="bio">
        {user.bio && !bioshow && (
          <>
            <p>{user.bio}</p>
            <button className="personal-info-button" onClick={handleBioShow}>
              Edit bio
            </button>
          </>
        )}
        {!user.bio && !bioshow && (
          <>
            <button className="personal-info-button" onClick={handleBioShow}>
              Add bio
            </button>
          </>
        )}
        {bioshow && (
          <div className="click-update">
            <textarea
              name=""
              id=""
              placeholder="Discribe who you are"
              onChange={handleBioChange}
            >
              {user.bio}
            </textarea>
            <p>{remain} character remining</p>
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
                <button onClick={handleBioShow}>Cancel</button>
                <button
                  className={`save-btn ${!saveBtn && "active-save-btn"}`}
                  onClick={handleBioUpdate}
                  disabled={saveBtn}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddBio;
