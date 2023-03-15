import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Fbcard from "../../Fbcard/Fbcard";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-personal-info">
        <div className="info-wraper">
          <Fbcard>
            <div className="about">
              <div className="about-title">
                <span>About</span>
                <div className="about-item">
                  <NavLink to="">
                    <span>Over view</span>
                  </NavLink>

                  <NavLink to="work_and_education">
                    <span>Work and education</span>
                  </NavLink>

                  <NavLink to="places">
                    <span>Places lived</span>
                  </NavLink>

                  <NavLink to="contact_and_basic_info">
                    <span>Contact and basic info</span>
                  </NavLink>

                  <NavLink to="privacy_and_legal_info">
                    <span> Privacy and Legal info</span>
                  </NavLink>

                  <NavLink to="profile_transparency">
                    <span> Profile transparency</span>
                  </NavLink>

                  <NavLink to="family_and_relationships">
                    <span> Family and relationships</span>
                  </NavLink>

                  <NavLink to="details">
                    <span>Details about you</span>
                  </NavLink>

                  <NavLink to="life_events">
                    <span>Life events</span>
                  </NavLink>
                </div>
              </div>
              <div className="about-page">
                <Outlet />
              </div>
            </div>
          </Fbcard>
        </div>
      </div>
    </>
  );
};

export default About;
