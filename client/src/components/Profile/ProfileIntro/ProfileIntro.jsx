import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUpdate } from "../../../redux/auth/authAction";
import Fbcard from "../../Fbcard/Fbcard";
import FbModal from "../../FbModal/FbModal";

const ProfileIntro = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [bioshow, setBioshow] = useState(false);
  const [bio, setBio] = useState(user.bio ? user.bio : "");
  const [remain, setRemain] = useState(101 - bio.length);
  const [saveBtn, setSaveBtn] = useState(true);

  const [editDetails, setEditDetails] = useState(false);

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
      <Fbcard>
        <div className="user-paersonal-info">
          <h3>Into</h3>
          <div className="bio">
            {user.bio && !bioshow && (
              <>
                <p>{user.bio}</p>
                <button
                  className="personal-info-button"
                  onClick={handleBioShow}
                >
                  Edit bio
                </button>
              </>
            )}
            {!user.bio && !bioshow && (
              <>
                <button
                  className="personal-info-button"
                  onClick={handleBioShow}
                >
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
          <div className="personal-info-details">
            <ul>
              <li>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/4PEEs7qlhJk.png"
                  alt=""
                />
                <span>
                  <span className="bold-text">Profile</span> · Entrepreneur
                </span>
              </li>
              <li>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/Q9Qu4uLgzdm.png"
                  alt=""
                />
                <span>
                  Works at{" "}
                  <span className="bold-text">Full Stack Web Development</span>
                </span>
              </li>
              <li>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png"
                  alt=""
                />
                <span>
                  Studied at University of Information Technology and Sciences
                </span>
              </li>
              <li>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/VMZOiSIJIwn.png"
                  alt=""
                />
                <span>
                  Lives in <span className="bold-text">Dinajpur</span>
                </span>
              </li>
              <li>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/-e1Al38ZrZL.png"
                  alt=""
                />
                <span>
                  From <span className="bold-text">Dhaka, Bangladesh</span>
                </span>
              </li>
              <li>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/S0aTxIHuoYO.png"
                  alt=""
                />
                <span>Single</span>
              </li>
              <li>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/mp_faH0qhrY.png"
                  alt=""
                />
                <span>Joined December 2020</span>
              </li>
              <li>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/OyWm6cSjuMt.png"
                  alt=""
                />
                <span>
                  Followed by <span className="bold-text">2,480 people</span>
                </span>
              </li>
              <li>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/LPnnw6HJjJT.png"
                  alt=""
                />
                <span>
                  <a href="#">mdkaydaazam</a>
                </span>
              </li>
              <li>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/ufIMw_ngzRh.png"
                  alt=""
                />
                <span>
                  <a href="#">mdkaydaazam</a>
                </span>
              </li>
              <li>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/ssTVF98Hpr4.png"
                  alt=""
                />
                <span>
                  <a href="#">mdkaydaazam</a>
                </span>
              </li>
              <li>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/toH9huWBEUQ.png"
                  alt=""
                />
                <span>
                  <a href="#">mdkaydaazam</a>
                </span>
              </li>
            </ul>
            {editDetails && (
              <FbModal title="Edit details" closePopup={setEditDetails}>
                <h4>Md Kayda Azam</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi molestias voluptates temporibus placeat. Neque
                  expedita nisi vitae ad ducimus dolorum sequi eius modi, labore
                  eos eligendi repellendus harum quae odio voluptas dicta
                  praesentium ipsam quam mollitia rem molestiae cumque accusamus
                  accusantium. Velit earum quam reiciendis? Quod ratione nisi
                  temporibus veritatis harum, quo tempore natus. Ea rem
                  provident, saepe possimus adipisci a! Soluta veniam sed,
                  eveniet nesciunt corrupti accusantium quia cumque nostrum
                  vitae facilis dolorum autem voluptate vel. Libero quas aliquam
                  recusandae dicta quo maiores modi laboriosam, nisi quod
                  ducimus corrupti nemo et excepturi magnam fugiat tenetur qui
                  asperiores repellat minima.
                </p>
              </FbModal>
            )}

            <button
              onClick={() => setEditDetails(!editDetails)}
              className="personal-info-button"
            >
              Edit details
            </button>
          </div>
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
            <button className="personal-info-button">Edit hobbies</button>
          </div>
          <div className="profile-featured">
            <div className="profile-featured-gallery">
              <div className="profile-featured-item">
                <div
                  style={{
                    backgroundImage:
                      "url('https://i.pinimg.com/474x/3d/da/43/3dda4343ac69a1b96157f387dbcc097e.jpg')",
                  }}
                  className="profile-featured-image"
                ></div>
                <span className="featured-count">+33</span>
              </div>
              <div className="profile-featured-item">
                <div
                  style={{
                    backgroundImage:
                      "url('https://i.pinimg.com/474x/3d/da/43/3dda4343ac69a1b96157f387dbcc097e.jpg')",
                  }}
                  className="profile-featured-image"
                ></div>
                <span className="featured-count">+33</span>
              </div>
              <div className="profile-featured-item">
                <div
                  style={{
                    backgroundImage:
                      "url('https://i.pinimg.com/474x/3d/da/43/3dda4343ac69a1b96157f387dbcc097e.jpg')",
                  }}
                  className="profile-featured-image"
                ></div>
                <span className="featured-count">+33</span>
              </div>
            </div>
          </div>
          <button className="personal-info-button">Add featured</button>
        </div>
      </Fbcard>
    </>
  );
};

export default ProfileIntro;
