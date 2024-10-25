import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{"Projects | Portfolio by Vinayak"}</title>
        <meta
          name="description"
          content="I am a Full Stack Java Developer with expertise in Java,
                  Spring Boot, Kotlin, and React.js. I have experience building
                  scalable, secure, and reliable web applications using a range
                  of modern technologies."
        />
        <meta
          name="keywords"
          content={["Vinayak", "Vinayak T", "Vinayak Thete"]}
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-logo-container">
            <div className="projects-logo">
              <Logo width={46} />
            </div>
          </div>
          <div className="projects-container">
            <div className="title projects-title">
              Crafting solutions that leave a lasting impact, one project at a
              time.
            </div>

            <div className="subtitle projects-subtitle">
              I’ve worked on a diverse range of projects over the years, gaining
              valuable experience with Java, Spring Boot, Kotlin, React.js, and
              other modern technologies. Each project has allowed me to refine
              my skills and build reliable, scalable solutions. I’m passionate
              about continuous learning and staying current with the latest
              developments, always looking for new ways to create impactful
              applications and enhance my technical expertise. <br />
              <br />
              Some of the my personal projects are still a work in progress, and
              I'll be adding links as soon as they are ready for viewing.
              Collaborating with others is a great way to learn and grow, and
              I'm always open to new ideas and feedback.
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
