import React from "react";
import Fbcard from "../../Fbcard/Fbcard";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-personal-info">
        <div className="info-wraper">
          <Fbcard>
            <div className="about-page">
              <div className="about-title">
                <span>About</span>
                <ul>
                  <li>
                    <a href="#">Over view</a>
                  </li>
                  <li>
                    <a href="#">Work and education</a>
                  </li>
                  <li>
                    <a href="#">Places lived</a>
                  </li>
                  <li>
                    <a href="#">Contact and basic info</a>
                  </li>
                  <li>
                    <a href="#">Privacy and Legal info</a>
                  </li>
                  <li>
                    <a href="#">Profile transparency</a>
                  </li>
                  <li>
                    <a href="#">Family and relationships</a>
                  </li>
                  <li>
                    <a href="#">Details about you</a>
                  </li>
                  <li>
                    <a href="#">Life events</a>
                  </li>
                </ul>
              </div>
              <div className="about-page">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
                labore optio obcaecati consequuntur amet accusantium debitis
                mollitia quas modi ab, harum dicta culpa, ratione repellendus
                eius ullam, hic saepe qui quae enim. Quia ex labore rerum veniam
                pariatur illo, eligendi aut nulla omnis atque, soluta molestiae,
                voluptatibus accusantium incidunt quisquam.
              </div>
            </div>
          </Fbcard>
        </div>
      </div>
    </>
  );
};

export default About;
