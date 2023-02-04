import React from "react";
import FbModal from "../../../../FbModal/FbModal";
import "./AddProfileTransparency.css";
const AddProfileTransparency = ({ showHide }) => {
  return (
    <>
      <FbModal
        title={"Profile Transparency"}
        footer={"Close"}
        closePopup={showHide}
      >
        <div className="add-profile-transparency">
          <div className="wraper-transparency">
            <div className="transparency-item">
              <div className="profile-info">
                <span>Profile Information for </span>
                <span>محمد قايد عزام جناح</span>
                <span className="icon-trnas"></span>
              </div>
              <div className="profile-data">
                <img
                  src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t1.6435-1/118176295_115953970224904_3926174605534710892_n.jpg?stp=c10.0.60.60a_cp0_dst-jpg_p60x60&_nc_cat=100&ccb=1-7&_nc_sid=3170a5&_nc_ohc=PFfzWng_IoMAX9-lpBs&_nc_oc=AQlVtrjYhfutkeGce27qLdRpdUmcVt97ohR15W89KA5mnRZ8x29x6FP5-7TRBdv8nYE&_nc_ht=scontent.fcgp17-1.fna&oh=00_AfC7Xe28g8sxWN7yXJPP9FQCbm-EwIlBhwlE8vAOWY07qg&oe=6401B10C"
                  alt=""
                />
                <div className="data">
                  <span className="profile-user-name">محمد قايد عزام جناح</span>
                  <span className="profile-title">Digital creator</span>
                </div>
              </div>
            </div>
            <div className="transparency-item">
              <div className="profile-info">
                <span>History</span>
              </div>
              <div className="profile-data">
                <span className="plag"></span>
                <div className="data">
                  <span className="plag-user-name">Profile created</span>
                  <span className="profile-title">August 22, 2020</span>
                </div>
              </div>
            </div>
            <div className="transparency-item">
              <div className="profile-info">
                <span>Ads From This Profile</span>
              </div>
              <div className="profile-data">
                <span className="phone-img"></span>
                <div className="data">
                  <span className="photo-title-dec">
                    This Profile is not currently running ads.
                  </span>
                </div>
              </div>
            </div>
            <button className="go-to-ad">Go to Ad Libraty</button>
          </div>
          <div className="profile-modal-footer-trans">
            <div className="update-btns-trans">
              <button className="trans-btn" onClick={() => showHide(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </FbModal>
    </>
  );
};

export default AddProfileTransparency;
