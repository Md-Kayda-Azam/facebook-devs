import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePopupClose from "../../../../hooks/usePopupClose";
import { profileUpdate } from "../../../../redux/auth/authAction";
import FbModal from "../../../FbModal/FbModal";
import AddAWorkPlace from "../components/AddAWorkPlace/AddAWorkPlace";
import AddWorkPlaceEdit from "../components/AddAWorkPlace/AddWorkPlaceEdit";
import AddCollege from "../components/AddCollege/AddCollege";
import AddCollegeEdit from "../components/AddCollege/AddCollegeEdit";
import AddCurrentCity from "../components/AddCurrentCity/AddCurrentCity";
import AddHighSchool from "../components/AddHighSchool/AddHighSchool";
import AddHighSchoolEdit from "../components/AddHighSchool/AddHighSchoolEdit";
import Addhometown from "../components/Addhometown/Addhometown";
import AddRelationship from "../components/AddRelationship/AddRelationship";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import IconTitle from "../components/IconTitle/IconTitle";
import SelectAudienceModal from "../components/SelectAudienceModal/SelectAudienceModal";
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
  const [addWorkModal, setAddWorkModal] = useState(false);
  const [relationshipInfo, setRelationshipInfo] = useState(false);
  const [addCollegeUniversityModal, setAddCollegeUniversityModal] =
    useState(false);
  const [addHighSchoolDelModal, setAddHighSchoolDelModal] = useState(false);

  /// edit form show hide all state
  const [work_Show_Hide, setWork_Show_Hide] = useState(false);
  const [college_UniversityEditModalShow, setCollege_UniversityEditModalShow] =
    useState(false);
  const [highSchoolEditForm, setHighSchoolEditForm] = useState(false);

  const [dataIndex, setDataIndex] = useState(null);

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

  const [work, setWork] = useState(user.work ? user.work : []);
  const [living, setLiving] = useState(user.living ? user.living : false);

  console.log(work);
  const [relationship, setRelationship] = useState(
    user.relationship ? user.relationship : false
  );

  const [homeTown, setHomeTown] = useState(
    user.home_town ? user.home_town : false
  );

  /// handle work info show hide
  const handleWorkInfoShowHide = (index) => {
    setWorkInfo(index);
  };

  // handle work edit
  const handleWorkEdit = (index) => {
    setDataIndex(index);
    setWork_Show_Hide(true);
    setWorkInfo(false);
  };
  // handle work delete
  const handleWorkDelete = () => {
    setAddWorkModal(true);
  };
  // handle work delete
  const handleWorkDelModal = (companyName) => {
    const filterWork = user.work.filter(
      (data) => data.companyName !== companyName
    );
    dispatch(profileUpdate({ work: filterWork }, user._id));

    setAddWorkModal(false);
    setWork(false);
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

  //handle current and living city update
  const handleCurrentAndLivingCityEdit = () => {
    setLiving(false);
    setCurrentCityInfo(false);
    setAddCurrentCity(true);
  };

  //handle CollegeUniversity Del Modal
  const handleCollegeUniversityDelModal = (index) => {
    const filterData = user.college_university.filter((item, i) => i !== index);

    dispatch(profileUpdate({ college_university: filterData }, user._id));

    setAddCollegeUniversityModal(false);
  };

  // handle College University Edit ModalShow
  const handleCollegeUniversityEditModalShow = (index) => {
    setDataIndex(index);
    setCollege_UniversityEditModalShow(true);
  };

  //handle Hgih School Delete Modal
  const handleHgihSchoolDelModal = (index) => {
    const filterData = user.high_school.filter((item, i) => i !== index);

    dispatch(profileUpdate({ high_school: filterData }, user._id));

    setAddHighSchoolDelModal(false);
  };

  // handle High School Edit
  const handleHighSchoolEdit = (index) => {
    setDataIndex(index);
    setHighSchoolEditForm(true);
    setHighSchoolInfo(false);
  };
  return (
    <>
      <Wraper>
        <div className="overView-info-details">
          <ul>
            {user.work.map((data, index) => {
              return (
                <>
                  <li>
                    <div className="info-start" key={index}>
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
                        <SelectAudienceModal showHide={setSelectAudWork} />
                      )}

                      <div className="public-option">Public</div>
                      <button
                        className="btn-overView"
                        onClick={() => handleWorkInfoShowHide(index)}
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
                            <li onClick={() => handleWorkEdit(index)}>
                              <span className="edit-life"></span>
                              <span>Edit workPlace</span>
                            </li>
                            <li onClick={handleWorkDelete}>
                              <span className="delete-life"></span>
                              <span>Delete workPlace</span>
                            </li>
                          </ul>
                        </div>
                      )}
                      {addWorkModal && (
                        <FbModal
                          title={"Are you sure?"}
                          closePopup={setAddWorkModal}
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
                                onClick={() => setAddWorkModal(false)}
                                className="del-AddCity-Modal"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() =>
                                  handleWorkDelModal(data.companyName)
                                }
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

            {work.length === 0 && (
              <>
                {!addWorkPlace && (
                  <IconTitle title={"Add a workplace"} show={setAddWorkPlace} />
                )}
              </>
            )}

            {addWorkPlace && (
              <AddAWorkPlace
                hide={setWork}
                setWork={setWork}
                showHide={setAddWorkPlace}
              />
            )}

            {user.college_university.map((data, index) => {
              return (
                <>
                  <li>
                    <div className="info-start" key={index}>
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
                        <SelectAudienceModal
                          showHide={setSelectAudStudyCollege}
                        />
                      )}
                      <button
                        className="btn-overView"
                        onClick={() => setStudyInfo(index)}
                      >
                        <span></span>
                      </button>

                      {index === studyInfo && (
                        <div className="info-details" ref={close}>
                          <span className="trangle"></span>
                          <ul>
                            <li>
                              <span className="see-life"></span>
                              <span>See life event</span>
                            </li>
                            <li
                              onClick={() =>
                                handleCollegeUniversityEditModalShow(index)
                              }
                            >
                              <span className="edit-life"></span>
                              <span>Edit workPlace</span>
                            </li>
                            <li
                              onClick={() =>
                                setAddCollegeUniversityModal(index)
                              }
                            >
                              <span className="delete-life"></span>
                              <span>Delete workPlace</span>
                            </li>
                          </ul>
                        </div>
                      )}
                      {index === addCollegeUniversityModal && (
                        <FbModal
                          title={"Are you sure?"}
                          closePopup={setAddCollegeUniversityModal}
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
                                onClick={() =>
                                  setAddCollegeUniversityModal(false)
                                }
                                className="del-AddCity-Modal"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() =>
                                  handleCollegeUniversityDelModal(index)
                                }
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
                  {index === dataIndex && college_UniversityEditModalShow && (
                    <AddCollegeEdit
                      dataIndex={index}
                      showHide={setCollege_UniversityEditModalShow}
                      hide={setStudyInfo}
                    />
                  )}
                </>
              );
            })}
            {!addCollege && (
              <IconTitle title={"Add college"} show={setAddCollege} />
            )}
            {addCollege && (
              <AddCollege showHide={setAddCollege} addColl={setAddCollege} />
            )}
            {user.high_school.map((data, index) => {
              return (
                <>
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
                        <SelectAudienceModal
                          showHide={setSelectAudHighSchool}
                        />
                      )}
                      <button
                        className="btn-overView"
                        onClick={() => setHighSchoolInfo(index)}
                      >
                        <span></span>
                      </button>
                      {index === highSchoolInfo && (
                        <div className="info-details" ref={close}>
                          <span className="trangle"></span>
                          <ul>
                            <li>
                              <span className="see-life"></span>
                              <span>See life event</span>
                            </li>
                            <li onClick={() => handleHighSchoolEdit(index)}>
                              <span className="edit-life"></span>
                              <span>Edit workPlace</span>
                            </li>
                            <li onClick={() => setAddHighSchoolDelModal(index)}>
                              <span className="delete-life"></span>
                              <span>Delete workPlace</span>
                            </li>
                          </ul>
                        </div>
                      )}
                      {index === addHighSchoolDelModal && (
                        <FbModal
                          title={"Are you sure?"}
                          closePopup={setAddHighSchoolDelModal}
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
                                onClick={() => setAddHighSchoolDelModal(false)}
                                className="del-AddCity-Modal"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => handleHgihSchoolDelModal(index)}
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
                    <SelectAudienceModal showHide={setSelectAudCurrentCity} />
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
                        <li onClick={handleCurrentAndLivingCityEdit}>
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
                    <SelectAudienceModal showHide={setSelectAudHomeTown} />
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
                    <SelectAudienceModal showHide={setSelectAudRelationship} />
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
