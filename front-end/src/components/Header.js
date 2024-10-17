import React from "react";
import "../style/Header.css";

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="content">
        <h1>Vinayak Thete</h1>
        <p>Full Stack Developer | Java | Kotlin | React.js | Spring Boot</p>
        <div className="contact">
          <a
            href="https://github.com/Vinayak2205"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vinayak-thete-05797b166/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:btthete@gmail.com">Email</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
