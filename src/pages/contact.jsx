import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Contact | Portfolio by Vinayak</title>
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
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="contact-logo-container">
            <div className="contact-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="contact-container">
            <div className="title contact-title">
              Let's Get in Touch: Ways to Connect with Me
            </div>

            <div className="subtitle contact-subtitle">
              Thank you for your interest in connecting with me! I’m always open
              to questions, feedback, and new ideas. For specific inquiries,
              feel free to reach out via email at &nbsp;{" "}
              <a href={"mailto:btthete@gmail.com"}>btthete@gmail.com</a>.
              btthete@gmail.com, and I’ll aim to respond within 24 hours, though
              responses may take a bit longer during busy periods. You’re also
              welcome to connect with me on on{" "}
              <a
                href="https://www.linkedin.com/in/vinayak-thete-05797b166/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              , where I share updates and insights regularly—don’t hesitate to
              reach out there as well. Alternatively, if you prefer, use the
              contact form on my website, and I’ll get back to you as soon as
              possible. I look forward to hearing from you!
            </div>
          </div>

          <div className="socials-container">
            <div className="contact-socials">
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

export default Contact;
