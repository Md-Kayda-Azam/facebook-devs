import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePopupClose from "../../../../hooks/usePopupClose";
import { profileUpdate } from "../../../../redux/auth/authAction";
import FbModal from "../../../FbModal/FbModal";
import AddCity from "../components/AddCity/AddCity";
import AddCityEdit from "../components/AddCity/AddCityEdit";
import AddCurrentCity from "../components/AddCurrentCity/AddCurrentCity";
import Addhometown from "../components/Addhometown/Addhometown";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";
import "./PlacesLived.css";

const PlacesLived = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [addCurrentCity, setAddCurrentCity] = useState(false);
  const [addHomeTown, setAddHomeTown] = useState(false);
  const [addCityCurrent, setAddCityCurrent] = useState(false);

  /// info onveView
  const [currentCityInfo, setCurrentCityInfo] = useState(false);
  const [homeTownInfo, setHomeTownInfo] = useState(false);
  const [addCityInfo, setAddCityInfo] = useState(null);

  // select audience modal state
  const [selectAudCurrentCity, setSelectAudCurrentCity] = useState(false);
  const [selectAudHomeTown, setSelectAudHomeTown] = useState(false);
  const [addCity, setAddCity] = useState(false);
  const [addCityEdit, setAddCityEdit] = useState(false);

  // delete data modal
  const [addCityModal, setAddCityModal] = useState(false);
  const [addCurrentModal, setAddCurrentModal] = useState(false);
  const [addHomeTownModal, setAddHomeTownModal] = useState(false);

  const close = useRef(null);

  usePopupClose(close, setCurrentCityInfo);
  usePopupClose(close, setHomeTownInfo);
  usePopupClose(close, setSelectAudCurrentCity);
  usePopupClose(close, setSelectAudHomeTown);
  usePopupClose(close, setAddCityCurrent);
  usePopupClose(close, setAddCityInfo);

  const [living, setLiving] = useState(user.living ? user.living : false);

  const [selectAudAddCity, setSelectAudAddCity] = useState(
    user.current_city ? user.current_city : false
  );

  const [homeTown, setHomeTown] = useState(
    user.home_town ? user.home_town : false
  );

  const [dataIndex, setDataIndex] = useState("");

  const handleEditAndUpdate = () => {
    setAddCurrentCity(true);
    setCurrentCityInfo(false);
    setLiving(false);
  };
  const handleHomeTownEditAndUpdate = () => {
    setAddHomeTown(true);
    setHomeTownInfo(false);
    setHomeTown(false);
  };

  const handleAddCityEditAndUpdate = (index) => {
    // const data = user.current_city.find((item, i) => i === index);
    setDataIndex(index);
    setAddCityEdit(true);
    setAddCityInfo(false);
    setSelectAudAddCity(false);
  };

  /// handle current city delete
  const handleCurrentCityDel = () => {
    setCurrentCityInfo(false);
    setAddCityModal(true);
  };
  /// handle current city delete modal
  const handleCurrentCityDelModal = () => {
    dispatch(profileUpdate({ living: "" }, user._id));
    setLiving(false);
  };
  /// handle Home town delete
  const handleHomeTownkDel = () => {
    setHomeTownInfo(false);
    setAddHomeTownModal(true);
  };
  // / handle work delete
  const handleHomeTownkDelModal = () => {
    dispatch(profileUpdate({ home_town: "" }, user._id));
    setHomeTown(false);
  };

  /// handle work delete
  const handleAddCityDel = (index) => {
    // const filterAddCity = user.current_city.filter((data) => data.id !== index);

    const filterAddCity = user.current_city.filter((item, i) => i !== index);

    dispatch(profileUpdate({ current_city: filterAddCity }, user._id));
    setCurrentCityInfo(false);
  };

  const handleDataInfo = (index) => {
    setAddCityInfo(index);
  };

  return (
    <>
      <Wraper>
        <div className="overView-info-details">
          <ul>
            <div className="titile-box">
              <span className="bold-text-title">Places lived</span>
            </div>

            {!addCity && <IconTitle title={"Add city"} show={setAddCity} />}
            {addCity && <AddCity showHide={setAddCity} />}

            {living && (
              <li>
                <div className="info-start">
                  <img
                    className="location-photo"
                    src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/05/Tech_Explained_Location_Intelligence_Springwise-1024x600.jpg"
                    alt=""
                  />
                  <span className="name-title-place">
                    <span className="bold-text">{user.living}</span>
                    <span className="name-title">Current city</span>
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
                        <li onClick={handleEditAndUpdate}>
                          <span className="edit-life"></span>
                          <span>Edit workPlace</span>
                        </li>
                        <li onClick={handleCurrentCityDel}>
                          <span className="delete-life"></span>
                          <span>Delete workPlace</span>
                        </li>
                      </ul>
                    </div>
                  )}
                  {addCityModal && (
                    <FbModal
                      title={"Are you sure?"}
                      closePopup={setAddCityModal}
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
                            onClick={() => setAddCityModal(false)}
                            className="del-AddCity-Modal"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleCurrentCityDelModal}
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
                hideModal={setAddCityModal}
                showHide={setAddCurrentCity}
              />
            )}

            {homeTown && (
              <li>
                <div className="info-start">
                  <img
                    className="location-photo"
                    src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/05/Tech_Explained_Location_Intelligence_Springwise-1024x600.jpg"
                    alt=""
                  />
                  <span className="name-title-place">
                    <span className="bold-text">{user.home_town}</span>
                    <span className="name-title">Hometwon</span>
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
                        <li onClick={handleHomeTownEditAndUpdate}>
                          <span className="edit-life"></span>
                          <span>Edit workPlace</span>
                        </li>
                        <li onClick={handleHomeTownkDel}>
                          <span className="delete-life"></span>
                          <span>Delete workPlace</span>
                        </li>
                      </ul>
                    </div>
                  )}
                  {addHomeTownModal && (
                    <FbModal
                      title={"Are you sure?"}
                      closePopup={setAddHomeTownModal}
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
                            onClick={() => setAddHomeTownModal(false)}
                            className="del-AddCity-Modal"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleHomeTownkDelModal}
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
                hideModal={setAddHomeTownModal}
                showHide={setAddHomeTown}
              />
            )}

            {selectAudAddCity && (
              <>
                {user.current_city.map((data, index) => (
                  <li>
                    <div className="info-start" key={index}>
                      <img
                        className="location-photo"
                        src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/05/Tech_Explained_Location_Intelligence_Springwise-1024x600.jpg"
                        alt=""
                      />
                      <span className="name-title-place">
                        <span className="bold-text">{data.currentCity}</span>
                        <span className="name-title">
                          Moved in {data.fromDateStart.fromYear}
                        </span>
                      </span>
                    </div>
                    <div className="info-end">
                      <img
                        onClick={() => setAddCityCurrent(true)}
                        className="img-overView"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/-ejNZQxb3ZR.png"
                        alt=""
                      />
                      {addCityCurrent && (
                        <FbModal
                          title={"Select audience"}
                          closePopup={setAddCityCurrent}
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
                                  onClick={() => setAddCityCurrent(false)}
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
                        onClick={() => handleDataInfo(index)}
                      >
                        <span></span>
                      </button>
                      {addCityInfo === index && (
                        <div className="info-details" ref={close}>
                          <span className="trangle"></span>
                          <ul>
                            <li>
                              <span className="see-life"></span>
                              <span>See life event</span>
                            </li>
                            <li
                              onClick={() => handleAddCityEditAndUpdate(index)}
                            >
                              <span className="edit-life"></span>
                              <span>Edit workPlace</span>
                            </li>
                            <li onClick={() => handleAddCityDel(index)}>
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

            {addCityEdit && (
              <AddCityEdit
                dataIndex={dataIndex}
                hideaddCityEdit={setSelectAudAddCity}
                showHide={setAddCityEdit}
              />
            )}
          </ul>
        </div>
      </Wraper>
    </>
  );
};

export default PlacesLived;
