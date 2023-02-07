import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePopupClose from "../../../../hooks/usePopupClose";
import { profileUpdate } from "../../../../redux/auth/authAction";
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
  const dispatch = useDispatch();

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

  // select audience modal state
  const [selectAudWork, setSelectAudWork] = useState(false);
  const [selectAudStudyCollege, setSelectAudStudyCollege] = useState(false);
  const [selectAudHighSchool, setSelectAudHighSchool] = useState(false);
  const [selectAudCurrentCity, setSelectAudCurrentCity] = useState(false);
  const [selectAudHomeTown, setSelectAudHomeTown] = useState(false);
  const [selectAudRelationship, setSelectAudRelationship] = useState(false);

  // delete modal all state
  const [homeTownModal, setHomeTownModal] = useState(false);
  const [livingModal, setLivingModal] = useState(false);

  const [relationshipInfo, setRelationshipInfo] = useState(false);

  const close = useRef(null);

  usePopupClose(close, setWorkInfo);
  usePopupClose(close, setStudyInfo);
  usePopupClose(close, setHighSchoolInfo);
  usePopupClose(close, setCurrentCityInfo);
  usePopupClose(close, setHomeTownInfo);
  usePopupClose(close, setRelationshipInfo);
  usePopupClose(close, setSelectAudWork);
  usePopupClose(close, setSelectAudStudyCollege);
  usePopupClose(close, setSelectAudHighSchool);
  usePopupClose(close, setSelectAudCurrentCity);
  usePopupClose(close, setSelectAudHomeTown);
  usePopupClose(close, setSelectAudRelationship);

  const [living, setLiving] = useState(user.living ? user.living : false);

  const [relationship, setRelationship] = useState(
    user.relationship ? user.relationship : false
  );
  // state school college University work add option show hide
  const [work_place, setWork_place] = useState(user.work ? user.work : false);
  const [collegeUniversity, setCollegeUniversity] = useState(
    user.college_university ? user.college_university : false
  );
  const [high_School, setHigh_School] = useState(
    user.high_school ? user.high_school : false
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

  /// handle work delete
  const handleWorkDel = (living) => {
    const filterWork = user.living.filter((data) => data.living !== living);
    dispatch(profileUpdate({ living: filterWork }, user._id));
  };

  // handle relationship edit
  const handleRelationshipEdit = () => {
    setAddRelationship(true);
    setRelationship(false);
  };

  // handle home town edit
  const handleHomeTownEdit = () => {
    setAddHomeTown(true);
    setHomeTown(false);
  };

  // handle home town delete
  const handleHomeTownDelModal = () => {
    setHomeTownModal(true);
  };
  // handle home town delete
  const handleHomeTownModalDel = () => {
    dispatch(profileUpdate({ home_town: "" }, user._id));
    setHomeTownModal(false);
    setHomeTown(false);
  };

  // living and current city show modal delete
  const handleCurrentCityDeleteLivingShowmodal = () => {
    setLivingModal(true);
  };
  // living and current city show modal delete
  const handleCurrentCityDeleteLiving = () => {
    dispatch(profileUpdate({ living: "" }, user._id));
    setLivingModal(false);
    setLiving(false);
  };
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
                    onClick={() => setSelectAudWork(true)}
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
                    alt=""
                  />

                  {selectAudWork && (
                    <FbModal
                      title={"Select audience"}
                      closePopup={setSelectAudWork}
                    >
                      <div className="select-audience" ref={close}>
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
                            <button
                              onClick={() => setSelectAudWork(false)}
                              className="selCancel"
                            >
                              Cancel
                            </button>
                            <button className="doneSel">Done</button>
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
                    onClick={() => setSelectAudStudyCollege(true)}
                    className="img-overView"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
                    alt=""
                  />
                  {selectAudStudyCollege && (
                    <FbModal
                      title={"Select audience"}
                      closePopup={setSelectAudStudyCollege}
                    >
                      <div className="select-audience" ref={close}>
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
                            <button
                              onClick={() => setSelectAudStudyCollege(false)}
                              className="selCancel"
                            >
                              Cancel
                            </button>
                            <button className="doneSel">Done</button>
                          </div>
                        </div>
                      </div>
                    </FbModal>
                  )}
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
                    onClick={() => setSelectAudHighSchool(true)}
                    className="img-overView"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
                    alt=""
                  />
                  {selectAudHighSchool && (
                    <FbModal
                      title={"Select audience"}
                      closePopup={setSelectAudStudyCollege}
                    >
                      <div className="select-audience" ref={close}>
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
                            <button
                              onClick={() => setSelectAudHighSchool(false)}
                              className="selCancel"
                            >
                              Cancel
                            </button>
                            <button className="doneSel">Done</button>
                          </div>
                        </div>
                      </div>
                    </FbModal>
                  )}
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
                    onClick={() => setSelectAudCurrentCity(true)}
                    className="img-overView"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
                    alt=""
                  />
                  {selectAudCurrentCity && (
                    <FbModal
                      title={"Select audience"}
                      closePopup={setSelectAudCurrentCity}
                    >
                      <div className="select-audience" ref={close}>
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
                            <button
                              onClick={() => setSelectAudCurrentCity(false)}
                              className="selCancel"
                            >
                              Cancel
                            </button>
                            <button className="doneSel">Done</button>
                          </div>
                        </div>
                      </div>
                    </FbModal>
                  )}
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
                        <li onClick={handleCurrentCityDeleteLivingShowmodal}>
                          <span className="delete-life"></span>
                          <span>Delete workPlace</span>
                        </li>
                      </ul>
                    </div>
                  )}
                  {livingModal && (
                    <FbModal
                      title={"Are you sure?"}
                      closePopup={setLivingModal}
                    >
                      <div className="add-city-mod">
                        <div className="dec">
                          <p>
                            Are you sure you want to remove this city from your
                            profile?
                          </p>
                        </div>
                        <div className="button-add-city-delete-modal">
                          <button
                            onClick={() => setLivingModal(false)}
                            className="del-AddCity-Modal"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleCurrentCityDeleteLiving}
                            className="del-AddCity-active"
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </FbModal>
                  )}
                </div>
              </li>
            )}
            {!living && (
              <>
                {!addCurrentCity && (
                  <IconTitle
                    title={"Add current ciry"}
                    show={setAddCurrentCity}
                  />
                )}
              </>
            )}

            {addCurrentCity && (
              <AddCurrentCity
                hide={setLiving}
                hidePopup={setCurrentCityInfo}
                showHide={setAddCurrentCity}
              />
            )}

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
                    onClick={() => setSelectAudHomeTown(true)}
                    className="img-overView"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
                    alt=""
                  />
                  {selectAudHomeTown && (
                    <FbModal
                      title={"Select audience"}
                      closePopup={setSelectAudHomeTown}
                    >
                      <div className="select-audience" ref={close}>
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
                            <button
                              onClick={() => setSelectAudHomeTown(false)}
                              className="selCancel"
                            >
                              Cancel
                            </button>
                            <button className="doneSel">Done</button>
                          </div>
                        </div>
                      </div>
                    </FbModal>
                  )}
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
                        <li onClick={handleHomeTownEdit}>
                          <span className="edit-life"></span>
                          <span>Edit workPlace</span>
                        </li>
                        <li onClick={handleHomeTownDelModal}>
                          <span className="delete-life"></span>
                          <span>Delete workPlace</span>
                        </li>
                      </ul>
                    </div>
                  )}
                  {homeTownModal && (
                    <FbModal
                      title={"Are you sure?"}
                      closePopup={setHomeTownModal}
                    >
                      <div className="add-city-mod">
                        <div className="dec">
                          <p>
                            Are you sure you want to remove this city from your
                            profile?
                          </p>
                        </div>
                        <div className="button-add-city-delete-modal">
                          <button
                            onClick={() => setHomeTownModal(false)}
                            className="del-AddCity-Modal"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleHomeTownModalDel}
                            className="del-AddCity-active"
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </FbModal>
                  )}
                </div>
              </li>
            )}
            {!homeTown && (
              <>
                {!addHomeTown && (
                  <IconTitle title={"Add hometown"} show={setAddHomeTown} />
                )}
              </>
            )}

            {addHomeTown && (
              <Addhometown
                hide={setHomeTown}
                hidePopup={setHomeTownInfo}
                showHide={setAddHomeTown}
              />
            )}

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
                    onClick={() => setSelectAudRelationship(true)}
                    className="img-overView"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
                    alt=""
                  />
                  {selectAudRelationship && (
                    <FbModal
                      title={"Select audience"}
                      closePopup={setSelectAudRelationship}
                    >
                      <div className="select-audience" ref={close}>
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
                            <button
                              onClick={() => setSelectAudRelationship(false)}
                              className="selCancel"
                            >
                              Cancel
                            </button>
                            <button className="doneSel">Done</button>
                          </div>
                        </div>
                      </div>
                    </FbModal>
                  )}

                  <button
                    className="relation-edit-delete-btn"
                    onClick={handleRelationshipEdit}
                  >
                    <div className="relation-edit"></div>
                  </button>
                </div>
              </li>
            )}

            {!relationship && (
              <>
                {!addRelationship && (
                  <IconTitle
                    title={"Add a relationship status"}
                    show={setAddRelationship}
                  />
                )}
              </>
            )}

            {addRelationship && (
              <AddRelationship
                hide={setRelationship}
                showHide={setAddRelationship}
              />
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
