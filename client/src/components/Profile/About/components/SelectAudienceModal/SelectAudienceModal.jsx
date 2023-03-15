import React, { useRef } from "react";
import usePopupClose from "../../../../../hooks/usePopupClose";
import FbModal from "../../../../FbModal/FbModal";

const SelectAudienceModal = ({ showHide }) => {
  const close = useRef(null);

  usePopupClose(close, showHide);
  return (
    <>
      <FbModal title={"Select audience"} closePopup={showHide}>
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
              <button onClick={() => showHide(false)} className="selCancel">
                Cancel
              </button>
              <button className="doneSel">Done</button>
            </div>
          </div>
        </div>
      </FbModal>
    </>
  );
};

export default SelectAudienceModal;
