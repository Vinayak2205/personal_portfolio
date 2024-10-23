import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="socials">
      <div className="social">
        <a
          href="https://www.linkedin.com/in/vinayak-thete-05797b166/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </div>
          <div className="social-text">Follow on Twitter</div>
        </a>
      </div>

      <div className="social">
        <a
          href="https://github.com/Vinayak2205"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </div>
          <div className="social-text">Follow on GitHub</div>
        </a>
      </div>

      <div className="social">
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <div className="social-icon">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </div>
          <div className="social-text">Follow on Twitter</div>
        </a>
      </div>

      <div className="social">
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <div className="social-icon">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </div>
          <div className="social-text">Follow on Instagram</div>
        </a>
      </div>

      <div className="email">
        <div className="email-wrapper">
          <a href={"mailto:btthete@gmail.com"} target="_blank" rel="noreferrer">
            <div className="social-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <div className="social-text">btthete@gmail.com</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
