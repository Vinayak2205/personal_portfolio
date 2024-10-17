import React from "react";
import "../style/Skills.css";

const Skills = () => {
  const skillList = [
    "Java",
    "Kotlin",
    "React.js",
    "Spring Boot",
    "Micronaut",
    "JavaScript",
    "CSS",
    "HTML",
  ];

  return (
    <section className="skills" id="skills">
      <div className="content">
        <h1>My Skills</h1>
        <div className="skill-list">
          {skillList.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
