import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUpdate } from "../../../../redux/auth/authAction";
import ClickUpdate from "../../../ClickUpdate/ClickUpdate";
import Fbcard from "../../../Fbcard/Fbcard";
import FbModal from "../../../FbModal/FbModal";
import PopupFullWidth from "../../../PopupFullWidth/PopupFullWidth";
import StorySlider from "../../../StorySlider/StorySlider";

const ProfileIntro = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [bioshow, setBioshow] = useState(false);
  const [bio, setBio] = useState(user.bio ? user.bio : "");
  const [remain, setRemain] = useState(101 - bio.length);
  const [saveBtn, setSaveBtn] = useState(true);

  const [catShow, setCatShow] = useState(false);
  const [cat, setCat] = useState(user.category ? user.category : "");

  const [jobShow, setJobShow] = useState(false);
  const [job, setJob] = useState(user.work ? user.work : []);
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");

  const [editDetails, setEditDetails] = useState(false);

  const [featuredShow, setFeaturedShow] = useState(false);

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

  // handle Cat show
  const handleCatShow = (e) => {
    e.preventDefault();
    setCatShow(true);
  };
  // handle Cat show
  const handleCatUpdate = (e) => {
    e.preventDefault();
    dispatch(profileUpdate({ category: cat }, user._id, setCatShow));
  };

  // handle job show
  const handleJobShow = (e) => {
    e.preventDefault();
    setJobShow(!jobShow);
  };
  // handle job show
  const handleWorkSave = (e) => {
    e.preventDefault();
    dispatch(
      profileUpdate(
        { work: [...user.work, { position, company }] },
        user._id,
        setJobShow
      )
    );
  };

  /// handle work delete
  const handleWorkDel = (company) => {
    const filterWork = user.work.filter((data) => data.company !== company);
    dispatch(profileUpdate({ work: filterWork }, user._id, setJobShow));
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
                  <span className="bold-text">Profile</span> ·
                  {user.category ? user.category : ""}
                </span>
              </li>
              {user.work.map((data, index) => (
                <li key={index}>
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/Q9Qu4uLgzdm.png"
                    alt=""
                  />
                  <span>
                    {data.position} at{" "}
                    <span className="bold-text"> {data.company}</span>
                  </span>
                </li>
              ))}
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
                <div className="profile-intro">
                  <div className="modal-header">
                    <span className="modal-title">Customize your intro</span>
                    <span className="modal-subtitle">
                      Details you select will be public.
                    </span>
                  </div>
                  <div className="profile-intro-item">
                    <span className="intro-title">Category</span>
                    {!catShow && !user.category && (
                      <a href="#" onClick={handleCatShow}>
                        <img
                          src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
                          alt=""
                        />
                        <span className="intro-name">Add a Category</span>
                      </a>
                    )}
                    {user.category && !catShow && (
                      <div className="profile-intro-data">
                        <div className="profile-intro-data-details">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/4PEEs7qlhJk.png"
                            alt=""
                          />
                          <span>{user.category}</span>
                        </div>
                        <button className="edit-icons" onClick={handleCatShow}>
                          <span
                            style={{
                              backgroundImage:
                                'url("https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/KKuHzcDns9x.png")',
                            }}
                          ></span>
                        </button>
                      </div>
                    )}
                    {catShow && (
                      <ClickUpdate
                        placeholder="Set your profile category"
                        hide={setCatShow}
                        data={{
                          data: cat,
                          setData: setCat,
                        }}
                        save={handleCatUpdate}
                      />
                    )}
                  </div>
                  <div className="profile-intro-item">
                    <span className="intro-title">Work</span>

                    {user.work.map((data, index) => (
                      <div className="profile-intro-data" key={index}>
                        <div className="profile-intro-data-details">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/4PEEs7qlhJk.png"
                            alt=""
                          />
                          <span>{data.position}</span> at{" "}
                          <strong>{data.company}</strong>
                        </div>
                        <button
                          className="edit-icons"
                          onClick={() => handleWorkDel(data.company)}
                        >
                          <span
                            className="del-btn"
                            style={{
                              backgroundImage:
                                'url("https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/KKuHzcDns9x.png")',
                            }}
                          ></span>
                        </button>
                      </div>
                    ))}
                    {!jobShow && (
                      <a href="#" onClick={handleJobShow}>
                        <img
                          src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
                          alt=""
                        />
                        <span className="intro-name">Add a workplace</span>
                      </a>
                    )}
                    {jobShow && (
                      <ClickUpdate
                        hide={setJobShow}
                        data={{
                          placeholder: "Set Company name",
                          data: company,
                          setData: setCompany,
                        }}
                        data2={{
                          placeholder: "Set Position name",
                          data: position,
                          setData: setPosition,
                        }}
                        save={handleWorkSave}
                      />
                    )}
                  </div>
                  <div className="profile-intro-item">
                    <span className="intro-title">Education</span>
                    <a href="#">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
                        alt=""
                      />
                      <span className="intro-name">Add high school</span>
                    </a>
                    <a href="#">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
                        alt=""
                      />
                      <span className="intro-name">Add high collage</span>
                    </a>
                    <a href="#">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
                        alt=""
                      />
                      <span className="intro-name">Add University</span>
                    </a>
                  </div>
                  <div className="profile-intro-item">
                    <span className="intro-title">Current city</span>
                    <a href="#">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
                        alt=""
                      />
                      <span className="intro-name">Add a current city</span>
                    </a>
                  </div>
                  <div className="profile-intro-item">
                    <span className="intro-title">Hometown</span>
                    <a href="#">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
                        alt=""
                      />
                      <span className="intro-name">Add a hometown</span>
                    </a>
                  </div>
                  <div className="profile-intro-item">
                    <span className="intro-title">Relationship</span>
                    <a href="#">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
                        alt=""
                      />
                      <span className="intro-name">
                        Add a relationship status
                      </span>
                    </a>
                  </div>
                </div>
                <div className="profile-modal-footer">
                  <div className="update-info">Update your information</div>
                  <div className="update-btns">
                    <button
                      onClick={() => setEditDetails(!editDetails)}
                      className="cancel"
                    >
                      Cancel
                    </button>
                    <button className="save blue">Save</button>
                  </div>
                </div>
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
                  onClick={() => setFeaturedShow(true)}
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
          {featuredShow && (
            <PopupFullWidth hide={setFeaturedShow}>
              <StorySlider hide={setFeaturedShow} />
            </PopupFullWidth>
          )}
          <button className="personal-info-button">Add featured</button>
        </div>
      </Fbcard>
    </>
  );
};

export default ProfileIntro;
