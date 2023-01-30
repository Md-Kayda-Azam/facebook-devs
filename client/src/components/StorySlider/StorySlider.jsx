import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { featured } from "../../FakerAPI/Featured";
import "./StorySlider.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { BsPauseFill } from "react-icons/bs";
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import { FiMoreHorizontal } from "react-icons/fi";

const StorySlider = ({ hide }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [storyPhotosPausePlay, setStoryPhotosPausePlay] = useState(false);
  const [storyPhotosSoundMuteUnmute, setStoryPhotosSoundMuteUnmute] =
    useState(false);
  const [moreOption, setMoreOption] = useState(false);

  console.log(sliderIndex);
  // change next img
  const handleNext = () => {
    setSliderIndex((sliderIndex + 1) % featured.length);
  };

  // change prev img
  const handlePrev = () => {
    setSliderIndex((sliderIndex - 1) % featured.length);
  };

  // slider imge change setTimeout system
  useEffect(() => {
    const sliderTimeout = setTimeout(() => {
      setSliderIndex(sliderIndex + 1);
      if (sliderIndex === featured.length - 1) {
        hide(false);
      }
    }, 3000);
    return () => clearTimeout(sliderTimeout);
  }, [sliderIndex]);

  // handle play off
  const handlePlayOff = (e) => {
    setStoryPhotosPausePlay(true);
  };
  // handle play
  const handlePlay = (e) => {
    setStoryPhotosPausePlay(false);
  };
  // handle Audio off
  const handleAudioOff = (e) => {
    setStoryPhotosSoundMuteUnmute(true);
  };
  // handle Audio on
  const handleAudioOn = (e) => {
    setStoryPhotosSoundMuteUnmute(false);
  };

  return (
    <>
      <div className="popup-story-slider-wraper">
        <div className="story-slider">
          <div
            style={{
              backgroundImage: `url("${featured[sliderIndex].photo}")`,
            }}
            className="slider-item"
          >
            <div className="slider-bars-wraper">
              {featured.map((item, index) => (
                <div
                  className={`bars-item ${
                    index === sliderIndex ? "active" : ""
                  } ${index < sliderIndex ? "viewd" : ""}`}
                  key={index}
                >
                  <div className="progress"></div>
                </div>
              ))}
            </div>
            <div className="story-details">
              <div className="profile-info">
                <img
                  src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/324560160_911640840192644_738258816472240901_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=rniM8FxytQYAX_Rg9-3&_nc_ht=scontent.fcgp17-1.fna&oh=00_AfCrrlMJwZ2LBl3C6zxNB5FJcXMfiMCBLjEYdY63HvfTdA&oe=63DC146A"
                  alt=""
                />
                <span>Md Kayda...</span>
                <p>3h</p>
                <span>
                  <BiWorld />
                </span>
              </div>
              <div className="story-info">
                {!storyPhotosPausePlay && (
                  <a href="#" onClick={handlePlayOff}>
                    <BsPauseFill />
                  </a>
                )}
                {storyPhotosPausePlay && (
                  <a href="#" onClick={handlePlay}>
                    <BsFillPlayFill />
                  </a>
                )}

                {!storyPhotosSoundMuteUnmute && (
                  <a href="#" onClick={handleAudioOff}>
                    <div
                      className="mute"
                      style={{
                        backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/2vtVtojazNc.png")`,
                      }}
                    ></div>
                  </a>
                )}
                {storyPhotosSoundMuteUnmute && (
                  <a href="#" onClick={handleAudioOn}>
                    <div
                      className="unmute"
                      style={{
                        backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/2vtVtojazNc.png")`,
                      }}
                    ></div>
                  </a>
                )}
                <a href="#" onClick={() => setMoreOption(!moreOption)}>
                  <FiMoreHorizontal />
                </a>
              </div>
              {moreOption && (
                <div className="more-options-details">
                  <div className="options-wraper">
                    <div className="more-option">
                      <svg
                        height="12"
                        viewBox="0 0 21 12"
                        width="21"
                        class="x10l6tqk xng853d xds687c"
                        fill="var(--card-background)"
                        style={{
                          transform: "scale(-1, -1) translate(0px, 0px)",
                        }}
                      >
                        <path d="M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12h20.684z"></path>
                      </svg>
                    </div>

                    <div className="more-item">
                      <div className="mute-photo"></div>
                      <span>Mute Md Kayda Azam</span>
                    </div>
                    <div className="more-item">
                      <div className="report-story-photo"></div>
                      <span>Report story</span>
                    </div>
                    <div className="more-item">
                      <div className="story-photo-something"></div>
                      <span>Something isn't working</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="navigation">
              <div className="prev">
                {sliderIndex === 0 ? (
                  ""
                ) : (
                  <button onClick={handlePrev}>
                    <IoIosArrowBack />
                  </button>
                )}
              </div>
              <div className="next">
                <button onClick={handleNext}>
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorySlider;
