import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  profileFeaturedUpdate,
  profileUpdate,
} from "../../../../redux/auth/authAction";
import ClickUpdate from "../../../ClickUpdate/ClickUpdate";
import Fbcard from "../../../Fbcard/Fbcard";
import FbModal from "../../../FbModal/FbModal";
import PopupFullWidth from "../../../PopupFullWidth/PopupFullWidth";
import StorySlider from "../../../StorySlider/StorySlider";
import bannerAdd from "../../../../_assets/images/banner.png";
import "./ProfileIntro.css";
import AddHobbies from "../AddHobbies/AddHobbies";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import EditFeatured from "../../../EditFeatured/EditFeatured";
import axios from "axios";

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
  const [living, setLiving] = useState(user.living ? user.living : false);
  const [relationship, setRelationship] = useState(
    user.relationship ? user.relationship : false
  );
  const [homeTown, setHomeTown] = useState(
    user.home_town ? user.home_town : false
  );
  const [social, setSocial] = useState(user.social ? user.social : false);
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");

  const [editDetails, setEditDetails] = useState(false);
  const [addEditHobbies, setAddEditHobbies] = useState(false);

  const [featuredShow, setFeaturedShow] = useState(false);
  const [featuredAddShow, setFeaturedAddShow] = useState(false);
  const [featuredUploadShow, setFeaturedUploadShow] = useState(false);
  const [featuredCollectionShow, setFeaturedCollectionShow] = useState(false);
  const [featuredCollectionCancel, setFeaturedCollectionCancel] =
    useState(false);

  const [featuredPhotos, setFeaturedPhotos] = useState([]);
  const [featuredChecked, setFeaturedChecked] = useState([]);

  // collection name state
  const [collectionName, setCollectionName] = useState([]);

  const collectionFirstPhoto = featuredChecked.length
    ? URL.createObjectURL(featuredChecked[0])
    : "";

  const [featuredData, setFeaturedData] = useState(
    user.featured.length ? user.featured.length : false
  );

  // edit featured state
  const [editFeatured, setEditFeatured] = useState(false);
  const [featuredImg, setFeaturedImg] = useState([]);
  // console.log(featuredImg);
  // featured collection photos

  const [image, setImage] = useState([]);

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

  /// handle add & upload back
  const handleUploadBack = () => {
    if (user.featured.length) {
      setEditFeatured(true);
    } else {
      setEditFeatured(false);
    }
    setFeaturedAddShow(true);
    setFeaturedUploadShow(false);
    setFeaturedPhotos([]);
    setFeaturedChecked([]);
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

  // handle feature upload
  const handleFeatureUploadPhotos = (e) => {
    setFeaturedPhotos((prevState) => [
      ...prevState,
      ...Array.from(e.target.files),
    ]);
    setFeaturedChecked((prevState) => [
      ...prevState,
      ...Array.from(e.target.files),
    ]);
  };

  // handle Checked Photo Upload
  const handleCheckedPhotoUpload = (e) => {
    const updatedList = [...featuredChecked];

    const val = featuredPhotos.find((data) => data.name === e.target.value);

    if (featuredChecked.includes(val)) {
      updatedList.splice(updatedList.indexOf(val), 1);
    } else {
      updatedList.push(val);
    }

    setFeaturedChecked(updatedList);
  };

  // handle featured phots upload
  const handleFeaturedPhotosUpload = () => {
    setFeaturedCollectionShow(true);
    setFeaturedUploadShow(false);
  };

  // hnadle Featured Collection Back
  const hnadleFeaturedCollectionBack = () => {
    setFeaturedCollectionShow(false);
    setFeaturedUploadShow(true);
  };

  // handle Collection Upload Cancel
  const handleCollectionUploadCancel = () => {
    setFeaturedCollectionCancel(true);
  };

  //handle Featured Collection Discard
  const handleFeaturedCollectionDiscard = () => {
    setFeaturedCollectionShow(false);
    setFeaturedUploadShow(false);
    setFeaturedCollectionCancel(false);
    setFeaturedAddShow(true);
    setFeaturedPhotos([]);
    setFeaturedChecked([]);
  };
  console.log(image);
  // handleFeaturedCollectionPhotos
  const handleFeaturedCollectionPhotos = (e) => {
    const data = new FormData();

    data.append("name", collectionName);
    featuredChecked.forEach((item) => {
      data.append("file", item);
      data.append("upload_preset", "Fb_featured_Photos_upload");
      data.append("cloud_name", "dleqcm6jc");

      axios
        .post("https://api.cloudinary.com/v1_1/dleqcm6jc/image/upload", data)
        .then((res) => {
          console.log(res.data);
          setImage((prevState) => [
            ...prevState,
            {
              name: res.data.original_filename,
              url: res.data.url,
              secure_url: res.data.secure_url,
              public_id: res.data.public_id,
            },
          ]);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
    // console.log(data);
    dispatch(profileFeaturedUpdate(user._id));
    setFeaturedCollectionShow(false);
    setFeaturedAddShow(false);
    setFeaturedPhotos([]);
    setFeaturedChecked([]);
    setFeaturedData(true);
  };
  // handleFeaturedPhotos
  const handleFeaturedPhotos = (name) => {
    const featuredDataImg = user.featured.filter((data) => data.name === name);

    // console.log();
    setFeaturedImg(featuredDataImg[0].sliders);
    setFeaturedShow(true);
  };
  const [sliderIndex, setSliderIndex] = useState(user.featured[0]);

  //handle Featured Prev Icon
  const handleFeaturedPrevIcon = () => {
    setSliderIndex((sliderIndex + 1) % user.featured.length);
  };

  //handle Featured Next Icon
  const handleFeaturedNextIcon = () => {
    setSliderIndex((sliderIndex - 1) % user.featured.length);
  };

  // handleEditFeaturedAddNew
  const handleEditFeaturedAddNew = () => {
    setFeaturedUploadShow(true);
    setEditFeatured(false);
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
                    <span className="bold-text">
                      {" "}
                      {data.college_university}
                    </span>
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
                          <strong>{data.companyName}</strong>
                        </div>
                        <button
                          className="edit-icons"
                          onClick={() => handleWorkDel(data.companyName)}
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
            <button
              className="personal-info-button"
              onClick={() => setAddEditHobbies(true)}
            >
              Edit hobbies
            </button>
            {addEditHobbies && <AddHobbies showHide={setAddEditHobbies} />}
          </div>
          <div className="profile-featured">
            {user.featured.length === true && (
              <div
                className="prev-featured-icon"
                onClick={handleFeaturedPrevIcon}
              >
                <button className="featured-photos-prev-icon"></button>
              </div>
            )}

            <div className="profile-featured-gallery">
              {user.featured.map((item, index) => {
                const img = item.sliders[0];
                const dataLenght = item.sliders.length;
                return (
                  <>
                    <div className="collection-item" key={index}>
                      <div className="profile-featured-item">
                        <div
                          onClick={() => handleFeaturedPhotos(item.name)}
                          style={{
                            backgroundImage: `url(/slider/${img})`,
                          }}
                          className="profile-featured-image"
                        ></div>
                        <span className="featured-count">{dataLenght}</span>
                      </div>
                      <span className="collection-name">{item.name}</span>
                    </div>
                    {featuredShow && (
                      <PopupFullWidth hide={setFeaturedShow}>
                        <StorySlider
                          featured={featuredImg}
                          hide={setFeaturedShow}
                        />
                      </PopupFullWidth>
                    )}
                  </>
                );
              })}
            </div>
            {user.featured.length === true && (
              <div
                className="next-featured-icon"
                onClick={handleFeaturedNextIcon}
              >
                <button className="featured-photos-next-icon"></button>
              </div>
            )}
          </div>

          <div className="add-featured-modal">
            {featuredAddShow &&
              !featuredUploadShow &&
              !user.featured.length && (
                <FbModal
                  title={"Edit featured"}
                  closePopup={setFeaturedAddShow}
                  editFeaturedModal={setEditFeatured}
                >
                  <div className="add-featured-banner">
                    <img src={bannerAdd} alt="" />
                    <p>
                      Feature your favorite photos and stories here for all your
                      friends to see.
                    </p>
                    <button onClick={() => setFeaturedUploadShow(true)}>
                      Add New
                    </button>
                  </div>
                </FbModal>
              )}
            {featuredUploadShow && (
              <FbModal
                title={"Edit Featured Collection"}
                back={handleUploadBack}
                dataEmty={setFeaturedPhotos}
              >
                <div className="add-featured-upload">
                  <div className="feature-upload">
                    <label htmlFor="featuredFile">Upload Photos</label>
                    <input
                      onChange={handleFeatureUploadPhotos}
                      type="file"
                      multiple={true}
                      id="featuredFile"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="freature-items-photos-upload">
                    <h4>Uploaded Photos</h4>
                    <div className="fearture-preview">
                      {featuredPhotos.map((item, index) => {
                        const prevURL = URL.createObjectURL(item);
                        return (
                          <div className="preview-item" key={index}>
                            <label
                              className="wrap-label"
                              htmlFor={`checkbox-${index}`}
                            >
                              <img src={prevURL} alt="" />
                            </label>
                            <div className="container">
                              <div className="round">
                                <input
                                  type="checkbox"
                                  value={item.name}
                                  checked={featuredChecked.includes(item)}
                                  id={`checkbox-${index}`}
                                  onChange={handleCheckedPhotoUpload}
                                />
                                <label for="checkbox"></label>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="feature-button">
                    <button onClick={handleUploadBack}>Cancel</button>
                    <button
                      className="active"
                      disabled={featuredChecked.length === 0}
                      onClick={handleFeaturedPhotosUpload}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </FbModal>
            )}

            {featuredCollectionShow && (
              <FbModal title={"Edit Featured Collection"}>
                <div className="add-featured-upload">
                  <div className="freature-items-photos-upload">
                    <div className="feature-upload-collection">
                      <span className="cover">Cover</span>
                      <img src={collectionFirstPhoto} alt="" />
                      <span className="camera-icon"></span>
                      <input
                        placeholder="Collection name"
                        onChange={(e) => setCollectionName(e.target.value)}
                        type="text"
                      />
                    </div>
                    <div className="fearture-preview">
                      <div
                        className="add-more-back"
                        onClick={hnadleFeaturedCollectionBack}
                      >
                        <div className="add-more"></div>
                        <span>Add more</span>
                      </div>
                      {featuredPhotos.map((item, index) => {
                        const prevURL = URL.createObjectURL(item);
                        return (
                          <div className="preview-item" key={index}>
                            <label
                              className="wrap-label"
                              htmlFor={`checkbox-${index}`}
                            >
                              <img src={prevURL} alt="" />
                            </label>
                            <div className="container">
                              <div className="round">
                                <input
                                  type="checkbox"
                                  value={item.name}
                                  checked={featuredChecked.includes(item)}
                                  id={`checkbox-${index}`}
                                  onChange={handleCheckedPhotoUpload}
                                />
                                <label for="checkbox"></label>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="feature-button">
                    <button onClick={handleCollectionUploadCancel}>
                      Cancel
                    </button>
                    <button
                      className="active"
                      disabled={featuredChecked.length === 0}
                      onClick={handleFeaturedCollectionPhotos}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </FbModal>
            )}
            {featuredCollectionCancel && (
              <FbModal
                title={"Discard Changes"}
                closePopup={setFeaturedCollectionCancel}
              >
                <div className="cancel-featured-collection">
                  <div className="cancel-popup">
                    <p>Are you sure you want to discard your changes?</p>
                  </div>
                  <div className="feature-button">
                    <button onClick={() => setFeaturedCollectionCancel(false)}>
                      Cancel
                    </button>
                    <button
                      className="active"
                      onClick={handleFeaturedCollectionDiscard}
                    >
                      Discard
                    </button>
                  </div>
                </div>
              </FbModal>
            )}
          </div>
          {!user.featured.length && (
            <button
              onClick={() => setFeaturedAddShow(true)}
              className="personal-info-button"
            >
              Add featured
            </button>
          )}
          {featuredData && (
            <button
              onClick={() => setEditFeatured(true)}
              className="personal-info-button"
            >
              Edit featured
            </button>
          )}
          {editFeatured && (
            <FbModal title={"Edit featured"} closePopup={setEditFeatured}>
              <div className="add-featured-upload">
                <div className="edit-freatured-items-photos-upload">
                  <div className="edit-featured-all-items">
                    {user.featured.map((data, index) => {
                      const img = data.sliders[0];

                      return (
                        <div className="edit-feature-item" key={index}>
                          <div className="item-img">
                            <img src={`/slider/${img}`} alt="" />
                          </div>
                          <div className="item-info">
                            <span>{data.name}</span>
                            <p>1 Item</p>
                            <p>Updated 31 weeks ago</p>
                          </div>
                          <div className="item-edit-icon">
                            <span className="icon-edit-featured"></span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="edit-feature-button">
                  <button
                    className="edit-featured-btn"
                    onClick={handleEditFeaturedAddNew}
                  >
                    Add New
                  </button>
                </div>
              </div>
            </FbModal>
          )}
        </div>
      </Fbcard>
    </>
  );
};

export default ProfileIntro;
