import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../../../Avatar/Avatar";
import { BsCameraFill } from "react-icons/bs";
import "./Info.css";
import FbModal from "../../../../FbModal/FbModal";
import usePopupClose from "../../../../../hooks/usePopupClose";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../../../../utility/croper";
import axios from "axios";
import { profilePhotoUpdate } from "../../../../../redux/auth/authAction";

const Info = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [updateProPhoModal, setUpdateProPhoModal] = useState(false);
  const [image, setImage] = useState(null);

  const close = useRef(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  console.log(croppedImage);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImage);
      setImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  const handleProfilePhotoUpload = (e) => {
    const img = URL.createObjectURL(e.target.files[0]);
    setImage(img);
  };

  const hqandleProfilePhotoUpdate = async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImage);
      setImage(croppedImage);

      const finalImageBlob = await fetch(croppedImage).then((res) =>
        res.blob()
      );

      const finalImage = new File([finalImageBlob], "profile_photo.png", {
        type: "image/png",
      });

      const formData = new FormData();
      formData.append("profile", finalImage);

      dispatch(
        profilePhotoUpdate(user._id, formData, setUpdateProPhoModal, setImage)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {updateProPhoModal && (
        <FbModal
          title={"Update profile picture"}
          closePopup={setUpdateProPhoModal}
          close={close}
        >
          <div className="profile-photo-modal">
            {!image && (
              <div className="profile-photo-uload">
                <label>
                  <input
                    type="file"
                    onChange={handleProfilePhotoUpload}
                    style={{ display: "none" }}
                  />
                  <AiOutlinePlus /> Upload photo
                </label>
              </div>
            )}
            {image && (
              <div className="profile-photo-manage">
                <div className="dec-box">
                  <textarea placeholder="Description"></textarea>
                </div>
                <div className="profile-crop-zone">
                  <Cropper
                    image={image}
                    crop={crop}
                    rotation={rotation}
                    zoom={zoom}
                    aspect={1 / 1}
                    cropShape={"round"}
                    showGrid={false}
                    cropSize={{ width: 300, height: 300 }}
                    onCropChange={setCrop}
                    onRotationChange={setRotation}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                </div>
                <div className="photo-slider">
                  <button>
                    <AiOutlineMinus />
                  </button>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    step={0.01}
                    value={zoom}
                    onChange={(e) => setZoom(e.target.value)}
                  />
                  <button>
                    <AiOutlinePlus />
                  </button>
                </div>
                <div className="photo-crop-btn">
                  <button className="crop-btn" onClick={showCroppedImage}>
                    <div className="crop"></div>
                    <span>Crop Photo</span>
                  </button>
                  <button className="make-btn">
                    <div className="make"></div>

                    <span>Make Temporary</span>
                  </button>
                </div>
                <div className="title-sec">
                  <span className="world"></span>
                  <p>Your profile picture is public.</p>
                </div>
                <div className="fb-modal-footer-pro-photo">
                  <div className="wraper-btn">
                    <button onClick={() => setUpdateProPhoModal(false)}>
                      Cencal
                    </button>
                    <button
                      className="save-btn-pro"
                      onClick={hqandleProfilePhotoUpdate}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </FbModal>
      )}
      <div className="fb-profile-details">
        <div className="profile-info">
          <div className="profile-photo">
            <Avatar />
            <div
              className="profile-photo-upload"
              onClick={() => setUpdateProPhoModal(true)}
            >
              <BsCameraFill />
            </div>
          </div>
          <div className="profile-desc">
            <h1>
              {user.first_name} {user.sur_name} <span>( neo inc )</span>
            </h1>
            <div className="profile-follow-details">
              <span className="profile-followers">15k follower</span>
              <span className="profile-following">1k following</span>
            </div>
            <div className="profile-friends-list">
              <ul>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="profile-action">
          <button>
            <span className="follow-icon"></span> <span>Follow</span>
          </button>
          <button>
            <span className="message-icon"></span> <span>Message</span>
          </button>
          <button className="blue">
            <span className="add-friend-icon"></span> <span>Add friend</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Info;
