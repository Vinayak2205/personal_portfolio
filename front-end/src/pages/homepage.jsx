import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faStackOverflow,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";

import "./styles/homepage.css";

const Homepage = () => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = Math.round(window.scrollY, 2);

      let newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const logoStyle = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Portfolio by Vinayak</title>
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
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="homepage-logo-container">
            <div style={logoStyle}>
              <Logo width={logoSize} link={false} />
            </div>
          </div>

          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">
                  Full-stack web app developer, and amateur Chess player.
                </div>

                <div className="subtitle homepage-subtitle">
                  I am a Full Stack Java Developer with expertise in Java,
                  Spring Boot, Kotlin, and React.js. I have experience building
                  scalable, secure, and reliable web applications using a range
                  of modern technologies. I enjoy solving complex problems and
                  continuously enhancing my skills across both frontend and
                  backend development. I am passionate about writing
                  high-quality code that adheres to best practices and industry
                  standards. I am always seeking new challenges and
                  opportunities to grow as a developer.
                </div>
              </div>

              <div className="homepage-first-area-right-side">
                <div className="homepage-image-container">
                  <div className="homepage-image-wrapper">
                    <img
                      src="homepage.jpg"
                      alt="about"
                      className="homepage-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="homepage-socials">
              <a
                href="https://www.linkedin.com/in/vinayak-thete-05797b166/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href="https://github.com/Vinayak2205"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="homepage-social-icon"
                />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href="https://stackoverflow.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faStackOverflow}
                  className="homepage-social-icon"
                />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={"mailto:btthete@gmail.com"}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faMailBulk}
                  className="homepage-social-icon"
                />
              </a>
            </div>

            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
