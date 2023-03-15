import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FbModal from "../../../../FbModal/FbModal";
import PopupFullWidth from "../../../../PopupFullWidth/PopupFullWidth";
import StorySlider from "../../../../StorySlider/StorySlider";
import bannerAdd from "../../../../../_assets/images/banner.png";
import { profileFeaturedUpdate } from "../../../../../redux/auth/authAction";

const ProfileFeatured = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
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
  // console.log(image);
  // handleFeaturedCollectionPhotos
  const handleFeaturedCollectionPhotos = (e) => {
    const data = new FormData();

    data.append("name", collectionName);
    // data.append("slider", image);
    featuredChecked.forEach((item) => {
      data.append("slider", item);
    });
    // console.log(user._id);
    dispatch(profileFeaturedUpdate(user._id, data));
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
      <div className="profile-featured">
        {user.featured.length === true && (
          <div className="prev-featured-icon" onClick={handleFeaturedPrevIcon}>
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
          <div className="next-featured-icon" onClick={handleFeaturedNextIcon}>
            <button className="featured-photos-next-icon"></button>
          </div>
        )}
      </div>

      <div className="add-featured-modal">
        {featuredAddShow && !featuredUploadShow && !user.featured.length && (
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
                <button onClick={handleCollectionUploadCancel}>Cancel</button>
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
    </>
  );
};

export default ProfileFeatured;
