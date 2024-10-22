import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/works.css";

const Works = () => {
  return (
    <div className="works">
      <div className="card">
        <div className="card-container">
          <div className="card-header">
            <div className="card-icon">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div className="card-title">Work</div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="works-body">
                <div className="work">
                  <img
                    src="./vervetronics.png"
                    alt="vervetronics"
                    className="work-image"
                  />
                  <div className="work-title">
                    Vervetronics Imageneering Pvt. Ltd.
                  </div>
                  <div className="work-subtitle">Full Stack Engineer</div>
                  <div className="work-duration">2022 - 2024</div>
                </div>

                <div className="work">
                  <img
                    src="./vervetronics.png"
                    alt="vervetronics"
                    className="work-image"
                  />
                  <div className="work-title">
                    Vervetronics Imageneering Pvt. Ltd.
                  </div>
                  <div className="work-subtitle">Sr. Software Engineer</div>
                  <div className="work-duration">2024 - Present</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
