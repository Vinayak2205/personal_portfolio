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
            <a href="#" key={index} className="skill-button">
              {skill}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
