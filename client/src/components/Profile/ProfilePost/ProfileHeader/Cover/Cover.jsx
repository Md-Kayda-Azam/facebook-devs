import React, { useCallback, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { useDispatch, useSelector } from "react-redux";
import usePopupClose from "../../../../../hooks/usePopupClose";
import { coverPhotoUpdate } from "../../../../../redux/auth/authAction";
import getCroppedImg from "../../../../../utility/croper";

const Cover = ({ showHide }) => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [coverPhotoInfo, setCoverPhotoInfo] = useState(null);
  const [coverPhotoAzamnn, setCoverPhotoAzamnn] = useState(null);

  const [image, setImage] = useState(null);

  const close = useRef(null);
  usePopupClose(close, setCoverPhotoInfo);

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
      formData.append("cover", finalImage);

      dispatch(coverPhotoUpdate(user._id, formData, setImage));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCancelBtn = () => {
    setImage(null);
  };

  return (
    <>
      {!image && (
        <>
          <div className="fb-cover-photo">
            <img
              src={
                user.cover_photo
                  ? `/cover/${user.cover_photo}`
                  : "https://img.freepik.com/free-vector/white-abstract-background_23-2148806276.jpg"
              }
              alt=""
            />
            <button onClick={() => setCoverPhotoInfo(true)}>
              <div className="span"></div>
              <p>Edit cover photo</p>
            </button>
          </div>
        </>
      )}
      {image && (
        <>
          <div className="cover-photo-save-sec">
            <div className="sawe-title">
              <div className="wews-icon"></div>
              <p>Your cover photo is public.</p>
            </div>
            <div className="sawe-btn">
              <button className="dswa-btn" onClick={handleCancelBtn}>
                Cencal
              </button>
              <button className="efvd-btn" onClick={hqandleProfilePhotoUpdate}>
                Save changes
              </button>
            </div>
          </div>
          <div className="fb-cover-photo">
            <Cropper
              image={image}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={9 / 3}
              showGrid={false}
              cropSize={{ width: 940, height: 504 }}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
            />
          </div>
        </>
      )}
      {coverPhotoInfo && (
        <div className="cover-photo-swe" ref={close}>
          <div className="swe-item">
            <div className="seletet-icon"></div>
            <span>Select Photo</span>
          </div>
          <div className="swe-item">
            <label>
              <div className="upload-icon"></div>
              <input
                type="file"
                onChange={handleProfilePhotoUpload}
                style={{ display: "none" }}
              />
              <span>Upload Photo</span>
            </label>
          </div>
          <div className="swe-item">
            <div className="reposition-icon"></div>
            <span>Reposition Photo</span>
          </div>
          <div className="swe-item">
            <div className="delete-icon"></div>
            <span>Delete Photo</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Cover;
