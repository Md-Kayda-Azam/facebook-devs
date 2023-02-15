import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePopupClose from "../../../../hooks/usePopupClose";
import { profileUpdate } from "../../../../redux/auth/authAction";
import FbModal from "../../../FbModal/FbModal";
import AddAWorkPlace from "../components/AddAWorkPlace/AddAWorkPlace";
import AddWorkPlaceEdit from "../components/AddAWorkPlace/AddWorkPlaceEdit";
import AddCollege from "../components/AddCollege/AddCollege";
import AddCollegeEdit from "../components/AddCollege/AddCollegeEdit";
import AddHighSchool from "../components/AddHighSchool/AddHighSchool";
import AddHighSchoolEdit from "../components/AddHighSchool/AddHighSchoolEdit";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";
import "./WorkAndEducation.css";

const WorkAndEducation = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  /// info onveView
  const [workInfo, setWorkInfo] = useState(false);
  const [studyInfo, setStudyInfo] = useState(false);
  const [highSchoolInfo, setHighSchoolInfo] = useState(false);
  // select audience modal state
  const [selectAudWork, setSelectAudWork] = useState(false);
  const [selectAudStudyCollege, setSelectAudStudyCollege] = useState(false);
  const [selectAudHighSchool, setSelectAudHighSchool] = useState(false);

  const [dataIndex, setDataIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  // all data delete modal
  const [addWorkDeleteModal, setAddWorkDeleteModal] = useState(false);
  const [addCollegeDeleteModal, setAddCollegeDeleteModal] = useState(false);
  const [highSchoolDeleteModal, setHighSchoolDeleteModal] = useState(false);

  // all edit modal
  const [college_UniversityEditModalShow, setCollege_UniversityEditModalShow] =
    useState(false);
  const [highSchoolEditForm, setHighSchoolEditForm] = useState(false);

  /// edit form show hide all state
  const [work_Show_Hide, setWork_Show_Hide] = useState(false);
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

  //handleWorkDataInfo
  const handleWorkDataInfo = (index) => {
    setWorkInfo(index);
  };

  //handle AddWork Del
  const handleAddWorkDel = (index) => {
    const filterData = user.work.filter((item, i) => i !== index);

    dispatch(profileUpdate({ work: filterData }, user._id));
    setWorkInfo(false);
    setAddWorkDeleteModal(false);
  };

  //handle Delete Work
  const handleDeleteWorkShowModal = () => {
    setAddWorkDeleteModal(true);
  };
  //handle Delete College University
  const handleCollegeUniversityDelModalShow = () => {
    setAddCollegeDeleteModal(true);
    setEditIndex(null);
  };

  // handle Edit Work
  const handleEditWork = (index) => {
    setDataIndex(index);
    setWork_Show_Hide(true);
    setWorkInfo(false);
  };

  // handleAdd College Del
  const handleAddCollegeDel = (index) => {
    const filterData = user.college_university.filter((item, i) => i !== index);

    dispatch(profileUpdate({ college_university: filterData }, user._id));
    setWorkInfo(false);
    setAddCollegeDeleteModal(false);
  };

  // collegeDataIndex
  const collegeDataIndex = (index) => {
    setDataIndex(index);
    setStudyInfo(true);
  };

  // handle College_University Edit
  const handleCollege_UniversityEdit = (index) => {
    setCollege_UniversityEditModalShow(true);
    setStudyInfo(false);
    setEditIndex(index);
  };

  /// handle High School Info Modal Show
  const handleHighSchoolInfoModalShow = (index) => {
    setDataIndex(index);
    setHighSchoolInfo(true);
  };

  //handleHighSchoolDataDeleteModalShow
  const handleHighSchoolDataDeleteModalShow = (index) => {
    setDataIndex(index);
    setHighSchoolDeleteModal(true);
  };
  //handle High SchoolDel
  const handleHighSchoolDel = (index) => {
    const filterData = user.high_school.filter((item, i) => i !== index);

    dispatch(profileUpdate({ high_school: filterData }, user._id));
    setHighSchoolInfo(false);
    setHighSchoolDeleteModal(false);
  };

  //handleHighSchoolEditFormShow
  const handleHighSchoolEditFormShow = (index) => {
    setHighSchoolEditForm(true);
    setHighSchoolInfo(false);
  };

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
              <AddAWorkPlace
                showHide={setWorkAndEducation}
                hideWorkDeleteModal={setAddWorkDeleteModal}
              />
            )}

            <>
              {user.work.map((data, index) => {
                return (
                  <>
                    {workData_Hide_Show && (
                      <li key={index}>
                        <div className="info-start">
                          <img
                            className="location-photo"
                            src="https://c8.alamy.com/comp/D2G08P/middle-aged-man-using-whiteboard-in-business-meeting-D2G08P.jpg"
                            alt=""
                          />
                          <span>
                            Works at
                            <span className="bold-text">
                              {" "}
                              {data.companyName}
                            </span>
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
                                            Include and exclude friends and
                                            lists
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
                            onClick={() => handleWorkDataInfo(index)}
                          >
                            <span></span>
                          </button>

                          {workInfo === index && (
                            <div className="info-details" ref={close}>
                              <span className="trangle"></span>
                              <ul>
                                <li>
                                  <span className="see-life"></span>
                                  <span>See life event</span>
                                </li>
                                <li onClick={() => handleEditWork(index)}>
                                  <span className="edit-life"></span>
                                  <span>Edit workPlace</span>
                                </li>
                                <li onClick={handleDeleteWorkShowModal}>
                                  <span className="delete-life"></span>
                                  <span>Delete workPlace</span>
                                </li>
                              </ul>
                            </div>
                          )}
                          {addWorkDeleteModal && (
                            <FbModal
                              title={"Are you sure?"}
                              closePopup={setAddWorkDeleteModal}
                            >
                              <div className="add-city-mod">
                                <div className="dec">
                                  <p>
                                    Are you sure you want to remove this city
                                    from your profile?
                                  </p>
                                </div>
                                <div className="button-add-city-delete-modal">
                                  <button
                                    onClick={() => setAddWorkDeleteModal(false)}
                                    className="del-AddCity-Modal"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    onClick={() => handleAddWorkDel(index)}
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
                    {index === dataIndex && work_Show_Hide && (
                      <AddWorkPlaceEdit
                        hideForm={setWork_Show_Hide}
                        hideEdit={setWorkInfo}
                        dataIndex={dataIndex}
                      />
                    )}
                  </>
                );
              })}
            </>

            <div className="titile-box">
              <span className="bold-text-title">College</span>
            </div>

            {!addCollege && (
              <IconTitle title={"Add college"} show={setAddCollege} />
            )}
            {addCollege && (
              <AddCollege
                showHide={setAddCollege}
                hide={setAddCollegeDeleteModal}
                addColl={setAddCollege}
              />
            )}
            {user.college_university.map((data, index) => {
              return (
                <>
                  <div className="wraper">
                    <li key={index}>
                      {index !== editIndex && (
                        <>
                          <div className="info-start">
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
                                            <p>
                                              Include and exclude friends and
                                              lists
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
                                        onClick={() =>
                                          setSelectAudStudyCollege(false)
                                        }
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
                              onClick={() => collegeDataIndex(index)}
                            >
                              <span></span>
                            </button>

                            {index === dataIndex && studyInfo && (
                              <div className="info-details" ref={close}>
                                <span className="trangle"></span>
                                <ul>
                                  <li>
                                    <span className="see-life"></span>
                                    <span>See life event</span>
                                  </li>
                                  <li
                                    onClick={() =>
                                      handleCollege_UniversityEdit(index)
                                    }
                                  >
                                    <span className="edit-life"></span>
                                    <span>Edit workPlace</span>
                                  </li>
                                  <li
                                    onClick={() =>
                                      handleCollegeUniversityDelModalShow(index)
                                    }
                                  >
                                    <span className="delete-life"></span>
                                    <span>Delete workPlace</span>
                                  </li>
                                </ul>
                              </div>
                            )}
                            {addCollegeDeleteModal && (
                              <FbModal
                                title={"Are you sure?"}
                                closePopup={setAddCollegeDeleteModal}
                              >
                                <div className="add-city-mod">
                                  <div className="dec">
                                    <p>
                                      Are you sure you want to remove this city
                                      from your profile?
                                    </p>
                                  </div>
                                  <div className="button-add-city-delete-modal">
                                    <button
                                      onClick={() =>
                                        setAddCollegeDeleteModal(false)
                                      }
                                      className="del-AddCity-Modal"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      onClick={() => handleAddCollegeDel(index)}
                                      className="del-AddCity-active"
                                    >
                                      Confirm
                                    </button>
                                  </div>
                                </div>
                              </FbModal>
                            )}
                          </div>
                        </>
                      )}
                    </li>
                    {index === dataIndex && college_UniversityEditModalShow && (
                      <AddCollegeEdit
                        dataIndex={index}
                        setEditIndex={setEditIndex}
                        showHide={setCollege_UniversityEditModalShow}
                        hide={setStudyInfo}
                      />
                    )}
                  </div>
                </>
              );
            })}
            <div className="titile-box">
              <span className="bold-text-title">High school</span>
            </div>
            {!highSchool && (
              <IconTitle title={"Add a high school"} show={sethighSchool} />
            )}
            {highSchool && <AddHighSchool showHide={sethighSchool} />}
            {user.high_school.map((data, index) => {
              return (
                <>
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
                        onClick={() => handleHighSchoolInfoModalShow(index)}
                      >
                        <span></span>
                      </button>
                      {index === dataIndex && highSchoolInfo && (
                        <div className="info-details" ref={close}>
                          <span className="trangle"></span>
                          <ul>
                            <li>
                              <span className="see-life"></span>
                              <span>See life event</span>
                            </li>
                            <li
                              onClick={() =>
                                handleHighSchoolEditFormShow(index)
                              }
                            >
                              <span className="edit-life"></span>
                              <span>Edit workPlace</span>
                            </li>
                            <li
                              onClick={() =>
                                handleHighSchoolDataDeleteModalShow(index)
                              }
                            >
                              <span className="delete-life"></span>
                              <span>Delete workPlace</span>
                            </li>
                          </ul>
                        </div>
                      )}
                      {highSchoolDeleteModal && (
                        <FbModal
                          title={"Are you sure?"}
                          closePopup={setHighSchoolDeleteModal}
                        >
                          <div className="add-city-mod">
                            <div className="dec">
                              <p>
                                Are you sure you want to remove this city from
                                your profile?
                              </p>
                            </div>
                            <div className="button-add-city-delete-modal">
                              <button
                                onClick={() => setHighSchoolDeleteModal(false)}
                                className="del-AddCity-Modal"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => handleHighSchoolDel(index)}
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
                  {index === dataIndex && highSchoolEditForm && (
                    <AddHighSchoolEdit
                      showHide={setHighSchoolEditForm}
                      dataIndex={dataIndex}
                    />
                  )}
                </>
              );
            })}
          </ul>
        </div>
      </Wraper>
    </>
  );
};

export default WorkAndEducation;
