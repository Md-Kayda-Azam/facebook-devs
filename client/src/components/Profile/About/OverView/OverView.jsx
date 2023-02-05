import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePopupClose from "../../../../hooks/usePopupClose";
import FbModal from "../../../FbModal/FbModal";
import AddAWorkPlace from "../components/AddAWorkPlace/AddAWorkPlace";
import AddCollege from "../components/AddCollege/AddCollege";
import AddCurrentCity from "../components/AddCurrentCity/AddCurrentCity";
import AddHighSchool from "../components/AddHighSchool/AddHighSchool";
import Addhometown from "../components/Addhometown/Addhometown";
import AddRelationship from "../components/AddRelationship/AddRelationship";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";
import "./OverView.css";

const OverView = () => {
  const { user } = useSelector((state) => state.auth);

  const [addWorkPlace, setAddWorkPlace] = useState(false);
  const [addHighSchool, setAddHighSchool] = useState(false);
  const [addCollege, setAddCollege] = useState(false);
  const [addCurrentCity, setAddCurrentCity] = useState(false);
  const [addHomeTown, setAddHomeTown] = useState(false);
  const [addRelationship, setAddRelationship] = useState(false);

  /// info onveView
  const [workInfo, setWorkInfo] = useState(false);
  const [studyInfo, setStudyInfo] = useState(false);
  const [highSchoolInfo, setHighSchoolInfo] = useState(false);
  const [currentCityInfo, setCurrentCityInfo] = useState(false);
  const [homeTownInfo, setHomeTownInfo] = useState(false);
  const [relationshipInfo, setRelationshipInfo] = useState(false);

  const close = useRef(null);

  usePopupClose(close, setWorkInfo);
  usePopupClose(close, setStudyInfo);
  usePopupClose(close, setHighSchoolInfo);
  usePopupClose(close, setCurrentCityInfo);
  usePopupClose(close, setHomeTownInfo);
  usePopupClose(close, setRelationshipInfo);

  // select audience modal state
  const [selectAudienceShowHide, setSelectAudienceShowHide] = useState(false);

  const [living, setLiving] = useState(user.living ? user.living : false);

  const [relationship, setRelationship] = useState(
    user.relationship ? user.relationship : false
  );

  const [wrokHide, setWorkHide] = useState(true);
  const [wrokShow, setWorkShow] = useState(wrokHide ? false : true);

  const [homeTown, setHomeTown] = useState(
    user.home_town ? user.home_town : false
  );

  const [college_univercity, setCollege_univercity] = useState(
    user.college_univercity ? user.college_univercity : false
  );
  const [high_school, setHigh_school] = useState(
    user.high_school ? user.high_school : false
  );

  return (
    <>
      <Wraper>
        <div className="overView-info-details">
          <ul>
            {user.work.map((data, index) => (
              <li key={index}>
                <div className="info-start">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/Q9Qu4uLgzdm.png"
                    alt=""
                  />
                  <span>
                    Works at
                    <span className="bold-text"> {data.companyName}</span>
                  </span>
                </div>
                <div className="info-end">
                  <img
                    onClick={() => setSelectAudienceShowHide(true)}
                    className="img-overView"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
                    alt=""
                  />
                  {selectAudienceShowHide && (
                    <FbModal
                      title={"Select audience"}
                      closePopup={setSelectAudienceShowHide}
                    >
                      <div className="select-audience">
                        <div className="wraper-aucience">
                          <div className="item-section">
                            <div className="item-audience active-select-audience">
                              <div className="icon-option">
                                <p className="icon-img-option">
                                  <span className="background-img-icon"></span>
                                </p>
                                <div className="dec-title">
                                  <span>Public</span>
                                  <p>Anyone on or off Facebook</p>
                                </div>
                              </div>
                              <div className="checkbox-showhide">
                                <input
                                  type="checkbox"
                                  className="rounded-checkbox"
                                  name=""
                                  id=""
                                />
                              </div>
                            </div>
                            <div className="item-audience">
                              <div className="icon-option">
                                <p className="icon-img-option">
                                  <span className="background-img-friends"></span>
                                </p>
                                <div className="dec-title">
                                  <span>Friends</span>
                                  <p>Your friends on Facebook</p>
                                </div>
                              </div>
                              <div className="checkbox-showhide">
                                <input
                                  type="checkbox"
                                  className="rounded-checkbox"
                                  name=""
                                  id=""
                                />
                              </div>
                            </div>
                            <div className="item-audience">
                              <div className="icon-option">
                                <p className="icon-img-option">
                                  <span className="background-img-friends-except"></span>
                                </p>
                                <div className="dec-title">
                                  <span>Friends except...</span>
                                  <p>Don't show to same friends</p>
                                </div>
                              </div>
                              <div className="checkbox-showhide">
                                <input
                                  type="checkbox"
                                  className="rounded-checkbox"
                                  name=""
                                  id=""
                                />
                              </div>
                            </div>
                            <div className="item-audience">
                              <div className="icon-option">
                                <p className="icon-img-option">
                                  <span className="background-img-friends-specific"></span>
                                </p>
                                <div className="dec-title">
                                  <span>Specific friends</span>
                                  <p>Only show to same friends</p>
                                </div>
                              </div>
                              <div className="checkbox-showhide">
                                <input
                                  type="checkbox"
                                  className="rounded-checkbox"
                                  name=""
                                  id=""
                                />
                              </div>
                            </div>
                            <div className="item-audience">
                              <div className="icon-option">
                                <p className="icon-img-option">
                                  <span className="background-img-friends-Only-me"></span>
                                </p>
                                <div className="dec-title">
                                  <span>Only me</span>
                                </div>
                              </div>
                              <div className="checkbox-showhide">
                                <input
                                  type="checkbox"
                                  className="rounded-checkbox"
                                  name=""
                                  id=""
                                />
                              </div>
                            </div>
                            <div className="item-audience">
                              <div className="icon-option">
                                <p className="icon-img-option">
                                  <span className="background-img-friends-custom"></span>
                                </p>
                                <div className="dec-title">
                                  <span>custom</span>
                                  <p>Include and exclude friends and lists</p>
                                </div>
                              </div>
                              <div className="checkbox-showhide">
                                <input
                                  type="checkbox"
                                  className="rounded-checkbox"
                                  name=""
                                  id=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="footer-select-audience">
                            <button>Cancel</button>
                            <button>Done</button>
                          </div>
                        </div>
                      </div>
                    </FbModal>
                  )}

                  <div className="public-option">Public</div>
                  <button
                    className="btn-overView"
                    onClick={() => setWorkInfo(!workInfo)}
                  >
                    <span></span>
                  </button>

                  {workInfo && (
                    <div className="info-details" ref={close}>
                      <span className="trangle"></span>
                      <ul>
                        <li>
                          <span className="see-life"></span>
                          <span>See life event</span>
                        </li>
                        <li>
                          <span className="edit-life"></span>
                          <span>Edit workPlace</span>
                        </li>
                        <li>
                          <span className="delete-life"></span>
                          <span>Delete workPlace</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            ))}

            {!addWorkPlace && (
              <IconTitle title={"Add a workplace"} show={setAddWorkPlace} />
            )}

            {addWorkPlace && <AddAWorkPlace showHide={setAddWorkPlace} />}

            {user.college_university.map((data, index) => (
              <li key={index}>
                <div className="info-start">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png"
                    alt=""
                  />
                  <span>
                    Studied at
                    <span className="bold-text">
                      {" "}
                      {data.college_university}
                    </span>
                  </span>
                </div>
                <div className="info-end">
                  <img
                    className="img-overView"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
                    alt=""
                  />
                  <button
                    className="btn-overView"
                    onClick={() => setStudyInfo(!studyInfo)}
                  >
                    <span></span>
                  </button>

                  {studyInfo && (
                    <div className="info-details" ref={close}>
                      <span className="trangle"></span>
                      <ul>
                        <li>
                          <span className="see-life"></span>
                          <span>See life event</span>
                        </li>
                        <li>
                          <span className="edit-life"></span>
                          <span>Edit workPlace</span>
                        </li>
                        <li>
                          <span className="delete-life"></span>
                          <span>Delete workPlace</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            ))}
            {!addCollege && (
              <IconTitle title={"Add college"} show={setAddCollege} />
            )}
            {addCollege && (
              <AddCollege showHide={setAddCollege} addColl={setAddCollege} />
            )}
            {user.high_school.map((data, index) => (
              <li key={index}>
                <div className="info-start">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png"
                    alt=""
                  />
                  <span>
                    Went to
                    <span className="bold-text"> {data.schoolName}</span>
                  </span>
                </div>

                <div className="info-end">
                  <img
                    className="img-overView"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
                    alt=""
                  />
                  <button
                    className="btn-overView"
                    onClick={() => setHighSchoolInfo(!highSchoolInfo)}
                  >
                    <span></span>
                  </button>
                  {highSchoolInfo && (
                    <div className="info-details" ref={close}>
                      <span className="trangle"></span>
                      <ul>
                        <li>
                          <span className="see-life"></span>
                          <span>See life event</span>
                        </li>
                        <li>
                          <span className="edit-life"></span>
                          <span>Edit workPlace</span>
                        </li>
                        <li>
                          <span className="delete-life"></span>
                          <span>Delete workPlace</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            ))}

            {!addHighSchool && (
              <IconTitle title={"Add a high school"} show={setAddHighSchool} />
            )}
            {addHighSchool && <AddHighSchool showHide={setAddHighSchool} />}
            {living && (
              <li>
                <div className="info-start">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/VMZOiSIJIwn.png"
                    alt=""
                  />
                  <span>
                    Lives in <span className="bold-text">{user.living}</span>
                  </span>
                </div>

                <div className="info-end">
                  <img
                    className="img-overView"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
                    alt=""
                  />
                  <button
                    className="btn-overView"
                    onClick={() => setCurrentCityInfo(!currentCityInfo)}
                  >
                    <span></span>
                  </button>
                  {currentCityInfo && (
                    <div className="info-details" ref={close}>
                      <span className="trangle"></span>
                      <ul>
                        <li>
                          <span className="see-life"></span>
                          <span>See life event</span>
                        </li>
                        <li>
                          <span className="edit-life"></span>
                          <span>Edit workPlace</span>
                        </li>
                        <li>
                          <span className="delete-life"></span>
                          <span>Delete workPlace</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            )}
            {!addCurrentCity && (
              <IconTitle title={"Add current ciry"} show={setAddCurrentCity} />
            )}
            {addCurrentCity && <AddCurrentCity showHide={setAddCurrentCity} />}
            {homeTown && (
              <li>
                <div className="info-start">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/-e1Al38ZrZL.png"
                    alt=""
                  />
                  <span>
                    From <span className="bold-text">{user.home_town}</span>
                  </span>
                </div>
                <div className="info-end">
                  <img
                    className="img-overView"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
                    alt=""
                  />
                  <button
                    className="btn-overView"
                    onClick={() => setHomeTownInfo(!homeTownInfo)}
                  >
                    <span></span>
                  </button>
                  {homeTownInfo && (
                    <div className="info-details" ref={close}>
                      <span className="trangle"></span>
                      <ul>
                        <li>
                          <span className="see-life"></span>
                          <span>See life event</span>
                        </li>
                        <li>
                          <span className="edit-life"></span>
                          <span>Edit workPlace</span>
                        </li>
                        <li>
                          <span className="delete-life"></span>
                          <span>Delete workPlace</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            )}
            {!addHomeTown && (
              <IconTitle title={"Add hometown"} show={setAddHomeTown} />
            )}
            {addHomeTown && <Addhometown showHide={setAddHomeTown} />}
            {relationship && (
              <li>
                <div className="info-start">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/S0aTxIHuoYO.png"
                    alt=""
                  />
                  <span>{user.relationship}</span>
                </div>
                <div className="info-end">
                  <img
                    className="img-overView"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
                    alt=""
                  />
                  <button
                    className="btn-overView"
                    onClick={() => setRelationshipInfo(!relationshipInfo)}
                  >
                    <span></span>
                  </button>
                  {relationshipInfo && (
                    <div className="info-details" ref={close}>
                      <span className="trangle"></span>
                      <ul>
                        <li>
                          <span className="see-life"></span>
                          <span>See life event</span>
                        </li>
                        <li>
                          <span className="edit-life"></span>
                          <span>Edit workPlace</span>
                        </li>
                        <li>
                          <span className="delete-life"></span>
                          <span>Delete workPlace</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            )}
            {!addRelationship && (
              <IconTitle
                title={"Add a relationship status"}
                show={setAddRelationship}
              />
            )}
            {addRelationship && (
              <AddRelationship showHide={setAddRelationship} />
            )}
            <ContactInfo
              icon={
                "https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/mxbGn5aKz1f.png"
              }
              name={"01750-910188"}
              nameInfo={"Mobile"}
              editPhoto={
                "https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/SfKut6zKB3a.png"
              }
            />
          </ul>
        </div>
      </Wraper>
    </>
  );
};

export default OverView;
