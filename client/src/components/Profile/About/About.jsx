import React from "react";
import { useState } from "react";
import Fbcard from "../../Fbcard/Fbcard";
import "./About.css";
import ContactAndBasicInfo from "./ContactAndBasicInfo/ContactAndBasicInfo";
import DetailsAboutYou from "./DetailsAboutYou/DetailsAboutYou";
import FamilyAndRelationship from "./FamilyAndRelationship/FamilyAndRelationship";
import LifeEvents from "./LifeEvents/LifeEvents";
import OverView from "./OverView/OverView";
import PlacesLived from "./PlacesLived/PlacesLived";
import PrivacyAndLegalInfo from "./PrivacyAndLegalInfo/PrivacyAndLegalInfo";
import ProfileTransparency from "./ProfileTransparency/ProfileTransparency";
import WorkAndEducation from "./WorkAndEducation/WorkAndEducation";

const About = () => {
  const [overView, setOverView] = useState(true);
  const [workEducation, setWorkEducation] = useState(false);
  const [placeLived, setPlaceLived] = useState(false);
  const [contactAndBasicInfo, setContactAndBasicInfo] = useState(false);
  const [privacyInfo, setPrivacyInfo] = useState(false);
  const [profileTransparency, setProfileTransparency] = useState(false);
  const [familyRelationship, setFamilyRelationship] = useState(false);
  const [detailsAboutYou, setDetailsAboutYou] = useState(false);
  const [liveEvents, setLiveEvents] = useState(false);

  // handle over view
  const handleOverView = (e) => {
    e.preventDefault();
    setOverView(true);
    setWorkEducation(false);
    setPlaceLived(false);
    setContactAndBasicInfo(false);
    setPrivacyInfo(false);
    setProfileTransparency(false);
    setFamilyRelationship(false);
    setDetailsAboutYou(false);
    setLiveEvents(false);
  };
  // handle work education
  const handleWorkEducation = (e) => {
    e.preventDefault();
    setWorkEducation(true);
    setOverView(false);
    setPlaceLived(false);
    setContactAndBasicInfo(false);
    setPrivacyInfo(false);
    setProfileTransparency(false);
    setFamilyRelationship(false);
    setDetailsAboutYou(false);
    setLiveEvents(false);
  };
  // handle palce lived
  const handlePlacesLived = (e) => {
    e.preventDefault();
    setPlaceLived(true);
    setOverView(false);
    setWorkEducation(false);
    setContactAndBasicInfo(false);
    setPrivacyInfo(false);
    setProfileTransparency(false);
    setFamilyRelationship(false);
    setDetailsAboutYou(false);
    setLiveEvents(false);
  };
  // handle contact basic info
  const handleContactBasicInfo = (e) => {
    e.preventDefault();
    setContactAndBasicInfo(true);
    setPlaceLived(false);
    setOverView(false);
    setWorkEducation(false);
    setPrivacyInfo(false);
    setProfileTransparency(false);
    setFamilyRelationship(false);
    setDetailsAboutYou(false);
    setLiveEvents(false);
  };
  // handle privacy info
  const handlePrivacyInfo = (e) => {
    e.preventDefault();
    setPrivacyInfo(true);
    setContactAndBasicInfo(false);
    setPlaceLived(false);
    setOverView(false);
    setWorkEducation(false);
    setProfileTransparency(false);
    setFamilyRelationship(false);
    setDetailsAboutYou(false);
    setLiveEvents(false);
  };
  // handle profile transparency
  const handleProfileTransparency = (e) => {
    e.preventDefault();
    setProfileTransparency(true);
    setPrivacyInfo(false);
    setContactAndBasicInfo(false);
    setPlaceLived(false);
    setOverView(false);
    setWorkEducation(false);
    setFamilyRelationship(false);
    setDetailsAboutYou(false);
    setLiveEvents(false);
  };
  // handle family relationship
  const handleFamilyRelationship = (e) => {
    e.preventDefault();
    setFamilyRelationship(true);
    setProfileTransparency(false);
    setPrivacyInfo(false);
    setContactAndBasicInfo(false);
    setPlaceLived(false);
    setOverView(false);
    setWorkEducation(false);
    setDetailsAboutYou(false);
    setLiveEvents(false);
  };
  // handle details about you
  const handleDetailsAboutYou = (e) => {
    e.preventDefault();
    setDetailsAboutYou(true);
    setFamilyRelationship(false);
    setProfileTransparency(false);
    setPrivacyInfo(false);
    setContactAndBasicInfo(false);
    setPlaceLived(false);
    setOverView(false);
    setWorkEducation(false);
    setLiveEvents(false);
  };
  // handle life events
  const handleLifeEvents = (e) => {
    e.preventDefault();
    setLiveEvents(true);
    setDetailsAboutYou(false);
    setFamilyRelationship(false);
    setProfileTransparency(false);
    setPrivacyInfo(false);
    setContactAndBasicInfo(false);
    setPlaceLived(false);
    setOverView(false);
    setWorkEducation(false);
  };
  return (
    <>
      <div className="about-personal-info">
        <div className="info-wraper">
          <Fbcard>
            <div className="about-page">
              <div className="about-title">
                <span>About</span>
                <ul>
                  <li
                    onClick={handleOverView}
                    className={`${overView ? "aci" : ""}`}
                  >
                    <a href="#">Over view</a>
                  </li>
                  <li
                    onClick={handleWorkEducation}
                    className={`${workEducation ? "aci" : ""}`}
                  >
                    <a href="#">Work and education</a>
                  </li>
                  <li
                    onClick={handlePlacesLived}
                    className={`${placeLived ? "aci" : ""}`}
                  >
                    <a href="#">Places lived</a>
                  </li>
                  <li
                    onClick={handleContactBasicInfo}
                    className={`${contactAndBasicInfo ? "aci" : ""}`}
                  >
                    <a href="#">Contact and basic info</a>
                  </li>
                  <li
                    onClick={handlePrivacyInfo}
                    className={`${privacyInfo ? "aci" : ""}`}
                  >
                    <a href="#">Privacy and Legal info</a>
                  </li>
                  <li
                    onClick={handleProfileTransparency}
                    className={`${profileTransparency ? "aci" : ""}`}
                  >
                    <a href="#">Profile transparency</a>
                  </li>
                  <li
                    onClick={handleFamilyRelationship}
                    className={`${familyRelationship ? "aci" : ""}`}
                  >
                    <a href="#">Family and relationships</a>
                  </li>
                  <li
                    onClick={handleDetailsAboutYou}
                    className={`${detailsAboutYou ? "aci" : ""}`}
                  >
                    <a href="#">Details about you</a>
                  </li>
                  <li
                    onClick={handleLifeEvents}
                    className={`${liveEvents ? "aci" : ""}`}
                  >
                    <a href="#">Life events</a>
                  </li>
                </ul>
              </div>
              <div className="about-page">
                {overView && <OverView />}
                {workEducation && <WorkAndEducation />}
                {placeLived && <PlacesLived />}
                {contactAndBasicInfo && <ContactAndBasicInfo />}
                {privacyInfo && <PrivacyAndLegalInfo />}
                {profileTransparency && <ProfileTransparency />}
                {familyRelationship && <FamilyAndRelationship />}
                {detailsAboutYou && <DetailsAboutYou />}
                {liveEvents && <LifeEvents />}
              </div>
            </div>
          </Fbcard>
        </div>
      </div>
    </>
  );
};

export default About;
