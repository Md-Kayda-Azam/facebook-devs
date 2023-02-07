import React, { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import usePopupClose from "../../../../hooks/usePopupClose";
import FbModal from "../../../FbModal/FbModal";
import AddAWorkPlace from "../components/AddAWorkPlace/AddAWorkPlace";
import AddWorkPlaceEdit from "../components/AddAWorkPlace/AddWorkPlaceEdit";
import AddCollege from "../components/AddCollege/AddCollege";
import AddHighSchool from "../components/AddHighSchool/AddHighSchool";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";
import "./WorkAndEducation.css";

const WorkAndEducation = () => {
  const { user } = useSelector((state) => state.auth);

  /// info onveView
  const [workInfo, setWorkInfo] = useState(false);
  const [studyInfo, setStudyInfo] = useState(false);
  const [highSchoolInfo, setHighSchoolInfo] = useState(false);
  // select audience modal state
  const [selectAudWork, setSelectAudWork] = useState(false);
  const [selectAudStudyCollege, setSelectAudStudyCollege] = useState(false);
  const [selectAudHighSchool, setSelectAudHighSchool] = useState(false);

  /// edit form show hide all state
  const [work_Show_hide, setWork_Show_Hide] = useState(false);
  const [collegeUniversity_Show_Hide, setCollegeUniversity_Show_Hide] =
    useState(false);
  const [school_Show_Hide, setSchool_Show_Hide] = useState(false);

  // edit time all data hide state
  const [workData_Hide_Show, setWorkData_Hide_Show] = useState(true);
  const [collegeUniversityData_Hide_Show, setCollegeUniversityData_Hide_Show] =
    useState(true);
  const [schoolData_Hide_Show, setSchoolData_Hide_Show] = useState(true);

  const close = useRef(null);

  usePopupClose(close, setWorkInfo);
  usePopupClose(close, setStudyInfo);
  usePopupClose(close, setHighSchoolInfo);
  usePopupClose(close, setSelectAudWork);
  usePopupClose(close, setSelectAudStudyCollege);
  usePopupClose(close, setSelectAudHighSchool);

  const [workAndEducation, setWorkAndEducation] = useState(false);
  const [highSchool, sethighSchool] = useState(false);
  const [addCollege, setAddCollege] = useState(false);

  return (
    <>
      <Wraper>
        <div className="overView-info-details">
          <ul>
            <div className="titile-box">
              <span className="bold-text-title">Work</span>
            </div>

            <>
              {!workAndEducation && (
                <IconTitle
                  title={"Add a workplace"}
                  show={setWorkAndEducation}
                />
              )}
            </>

            {workAndEducation && (
              <AddAWorkPlace showHide={setWorkAndEducation} />
            )}
            {work_Show_hide && (
              <AddWorkPlaceEdit
                hide={setWork_Show_Hide}
                showEdit={setWorkData_Hide_Show}
                hideEdit={setWorkInfo}
              />
            )}

            {workData_Hide_Show && (
              <>
                {user.work.map((data, index) => (
                  <li key={index}>
                    <div className="info-start">
                      <img
                        className="location-photo"
                        src="https://c8.alamy.com/comp/D2G08P/middle-aged-man-using-whiteboard-in-business-meeting-D2G08P.jpg"
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
                                      <p>
                                        Include and exclude friends and lists
                                      </p>
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
              </>
            )}

            <div className="titile-box">
              <span className="bold-text-title">College</span>
            </div>

            {!addCollege && (
              <IconTitle title={"Add college"} show={setAddCollege} />
            )}
            {addCollege && (
              <AddCollege showHide={setAddCollege} addColl={setAddCollege} />
            )}
            {user.college_university.map((data, index) => (
              <li>
                <div className="info-start" key={index}>
                  <img
                    className="location-photo"
                    src="https://media.istockphoto.com/id/1205507976/vector/graduate-cap-logo-university-mortarboard.jpg?s=612x612&w=0&k=20&c=X_WSdETOyZPl9KeYSdYCYCltoS7cYwUtQHM6hbj_QqQ="
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
            <div className="titile-box">
              <span className="bold-text-title">High school</span>
            </div>
            {!highSchool && (
              <IconTitle title={"Add a high school"} show={sethighSchool} />
            )}
            {highSchool && <AddHighSchool showHide={sethighSchool} />}
            {user.high_school.map((data, index) => (
              <li key={index}>
                <div className="info-start">
                  <img
                    className="location-photo"
                    src="https://media.gettyimages.com/id/1148218795/photo/children-cheering-in-classroom.jpg?s=612x612&w=gi&k=20&c=mAtT-rGxoV7dfjAoTlnB9ic6D2Y2ev0j1eYnsHye-PQ="
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
          </ul>
        </div>
      </Wraper>
    </>
  );
};

export default WorkAndEducation;
