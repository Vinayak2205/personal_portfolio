import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "./styles/works.css";
import Card from "../common/card";

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Work"
        body={
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
        }
      />
    </div>
  );
};

export default Works;
