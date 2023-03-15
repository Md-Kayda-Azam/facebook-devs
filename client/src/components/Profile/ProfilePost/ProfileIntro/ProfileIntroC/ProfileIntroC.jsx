import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { profileUpdate } from "../../../../../redux/auth/authAction";
import ClickUpdate from "../../../../ClickUpdate/ClickUpdate";
import FbModal from "../../../../FbModal/FbModal";
import SelectAudienceModal from "../../../About/components/SelectAudienceModal/SelectAudienceModal";

const ProfileIntroC = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [catShow, setCatShow] = useState(false);
  const [cat, setCat] = useState(user.category ? user.category : "");

  const [jobShow, setJobShow] = useState(false);
  const [job, setJob] = useState(user.work ? user.work : []);
  const [living, setLiving] = useState(user.living ? user.living : false);
  const [relationship, setRelationship] = useState(
    user.relationship ? user.relationship : false
  );
  const [homeTown, setHomeTown] = useState(
    user.home_town ? user.home_town : false
  );
  // Select audience
  const [webSite, setWebSite] = useState(false);
  const [socialLink, setSocialLink] = useState(false);
  const [editDetails, setEditDetails] = useState(false);

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

  /// handle work delete
  const handleWorkDel = (company) => {
    const filterWork = user.work.filter((data) => data.company !== company);
    dispatch(profileUpdate({ work: filterWork }, user._id, setJobShow));
  };

  const [prevState, setPrevState] = useState(true);
  const [nextState, setNextState] = useState(false);

  const handlePrev = () => {
    setNextState(true);
    setPrevState(false);
  };
  const handleNext = () => {
    setNextState(false);
    setPrevState(true);
  };

  const handleKaydaPrev = () => {
    setNextState(true);
    setPrevState(false);
  };
  const hhandleAzamNext = () => {
    setNextState(false);
    setPrevState(true);
  };
  return (
    <>
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
                Works at
                <span className="bold-text"> {data.companyName}</span>
              </span>
            </li>
          ))}
          {user.college_university.map((data, index) => (
            <li key={index}>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png"
                alt=""
              />
              <span>
                Studied at
                <span className="bold-text"> {data.college_university}</span>
              </span>
            </li>
          ))}
          {user.high_school.map((data, index) => (
            <li key={index}>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png"
                alt=""
              />
              <span>
                Went to
                <span className="bold-text"> {data.schoolName}</span>
              </span>
            </li>
          ))}
          {living && (
            <li>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/VMZOiSIJIwn.png"
                alt=""
              />
              <span>
                Lives in <span className="bold-text">{user.living}</span>
              </span>
            </li>
          )}
          {homeTown && (
            <li>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/-e1Al38ZrZL.png"
                alt=""
              />
              <span>
                From <span className="bold-text">{user.home_town}</span>
              </span>
            </li>
          )}
          {relationship && (
            <li>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/S0aTxIHuoYO.png"
                alt=""
              />
              <span>{user.relationship}</span>
            </li>
          )}
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
          {user.social.map((data, index) => (
            <li>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/toH9huWBEUQ.png"
                alt=""
              />
              <span>
                <a href="#">{data.social_title}</a>
              </span>
            </li>
          ))}
          {user.web_site.map((data, index) => (
            <li>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/BQdeC67wT9z.png"
                alt=""
              />
              <span>
                <a href="#">{data.web_site}</a>
              </span>
            </li>
          ))}
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
                      <div className={prevState ? "show" : "azamJ"}>
                        {prevState && (
                          <>
                            <div className="prev" onClick={handlePrev}>
                              <input
                                type="radio"
                                id="rcolor"
                                name="show_hide"
                              />
                            </div>
                            <div
                              onClick={handleKaydaPrev}
                              className="kayda"
                            ></div>
                          </>
                        )}
                        {nextState && (
                          <>
                            <div
                              onClick={hhandleAzamNext}
                              className="azam"
                            ></div>
                            <div className="next" onClick={handleNext}>
                              <input
                                type="radio"
                                id="rcolor"
                                name="show_hide"
                              />
                            </div>
                          </>
                        )}
                      </div>
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
                      <div className={prevState ? "show" : "azamJ"}>
                        {prevState && (
                          <>
                            <div className="prev" onClick={handlePrev}>
                              <input
                                type="radio"
                                id="rcolor"
                                name="show_hide"
                              />
                            </div>
                            <div
                              onClick={handleKaydaPrev}
                              className="kayda"
                            ></div>
                          </>
                        )}
                        {nextState && (
                          <>
                            <div
                              onClick={hhandleAzamNext}
                              className="azam"
                            ></div>
                            <div className="next" onClick={handleNext}>
                              <input
                                type="radio"
                                id="rcolor"
                                name="show_hide"
                              />
                            </div>
                          </>
                        )}
                      </div>
                      Works at
                      <strong>{data.companyName}</strong>
                    </div>
                    <button
                      className="edit-icons"
                      onClick={() => handleWorkDel(data.companyName)}
                    >
                      <span
                        style={{
                          backgroundImage:
                            'url("https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/KKuHzcDns9x.png")',
                        }}
                      ></span>
                    </button>
                  </div>
                ))}

                <NavLink to="about_/work_and_education">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
                    alt=""
                  />
                  <span className="intro-name">Add a workplace</span>
                </NavLink>
              </div>
              <div className="profile-intro-item">
                <span className="intro-title">Education</span>
                <NavLink to="about_/work_and_education">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
                    alt=""
                  />
                  <span className="intro-name">Add high school</span>
                </NavLink>
                <NavLink to="about_/work_and_education">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
                    alt=""
                  />
                  <span className="intro-name">Add high collage</span>
                </NavLink>
                <NavLink to="about_/work_and_education">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
                    alt=""
                  />
                  <span className="intro-name">Add University</span>
                </NavLink>
              </div>
              <div className="profile-intro-item">
                <span className="intro-title">Current city</span>
                <NavLink to="about_/places">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
                    alt=""
                  />
                  <span className="intro-name">Add a current city</span>
                </NavLink>
              </div>
              <div className="profile-intro-item">
                <span className="intro-title">Hometown</span>
                <NavLink to="about_/places">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
                    alt=""
                  />
                  <span className="intro-name">Add a hometown</span>
                </NavLink>
              </div>
              <div className="profile-intro-item">
                <span className="intro-title">Relationship</span>
                <NavLink to="about_/family_and_relationships">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
                    alt=""
                  />
                  <span className="intro-name">Add a relationship status</span>
                </NavLink>
              </div>
              <div className="profile-intro-item">
                <div class="contact-mobile">
                  <div class="call">
                    <div class="number-mobile">
                      <span className="intro-title">Websites</span>

                      <span>
                        To feature links on your profile, set the audience to
                        Public.
                      </span>
                    </div>
                  </div>
                  <div class="edit-and-info-public-friend">
                    <div class="info-profile" onClick={() => setWebSite(true)}>
                      <img
                        className="color-img-profile"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
                        alt=""
                      />
                      <span className="Public-profile">Public</span>
                    </div>
                  </div>
                </div>
              </div>

              {webSite && <SelectAudienceModal showHide={setWebSite} />}
              <div className="profile-intro-item">
                <div class="contact-mobile">
                  <div class="call">
                    <div class="number-mobile">
                      <span className="intro-title">Social Links</span>
                      <span>
                        To feature links on your profile, set the audience to
                        Public.
                      </span>
                    </div>
                  </div>
                  <div class="edit-and-info-public-friend">
                    <div
                      class="info-profile"
                      onClick={() => setSocialLink(true)}
                    >
                      <img
                        className="color-img-profile"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
                        alt=""
                      />
                      <span className="Public-profile">Public</span>
                    </div>
                  </div>
                </div>
              </div>
              {socialLink && <SelectAudienceModal showHide={setSocialLink} />}
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
    </>
  );
};

export default ProfileIntroC;
