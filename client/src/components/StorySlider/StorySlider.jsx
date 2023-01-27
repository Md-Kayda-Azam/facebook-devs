import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { featured } from "../../FakerAPI/Featured";
import "./StorySlider.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const StorySlider = ({ hide }) => {
  const [sliderIndex, setSliderIndex] = useState(0);

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
      if (sliderIndex === 5) {
        hide(false);
      }
    }, 3000);
    return () => clearTimeout(sliderTimeout);
  }, [sliderIndex]);

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
            <div className="navigation">
              <div className="prev">
                <button onClick={handlePrev}>
                  <IoIosArrowBack />
                </button>
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
