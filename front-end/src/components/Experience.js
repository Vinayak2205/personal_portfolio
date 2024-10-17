import React from "react";
import "../style/Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="content">
        <h1>Experience</h1>
        <div className="job">
          <h3>Full Stack Developer - VerveTronics Imagineering Pvt. Ltd.</h3>
          <p>
            Developed an IoT Sensor Monitoring System, achieving a 30%-40%
            reduction in data retrieval latency. Led frontend development with
            React.js and optimized backend communication.
          </p>
        </div>
        {/* Add more job entries as needed */}
      </div>
    </section>
  );
};

export default Experience;
