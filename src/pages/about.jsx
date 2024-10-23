import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>About | Portfolio by Vinayak</title>
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
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="about-logo-container">
            <div className="about-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">
                  I’m Vinayak T. I live in Pune, India, where I design the
                  future.
                </div>

                <div className="subtitle about-subtitle">
                  I’ve worked on a wide range of projects, leveraging
                  technologies like Java, Spring Boot, Kotlin, and React.js. If
                  you're interested in the systems I’ve developed, from IoT
                  monitoring solutions to travel agency platforms, feel free to
                  check out the code and suggest improvements or enhancements.
                  Collaborating with others is a fantastic way to grow, and I’m
                  always open to new ideas and feedback to further refine and
                  optimize my work.
                </div>
              </div>

              <div className="about-left-side">
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img src="about.jpg" alt="about" className="about-image" />
                  </div>
                </div>

                <div className="about-socials">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="about-socials-mobile">
              <Socials />
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

export default About;
