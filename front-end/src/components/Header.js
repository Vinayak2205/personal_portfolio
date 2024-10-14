import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Vinayak Thete</h1>
      <p>Full Stack Developer | Java | Kotlin | React.js | Spring Boot</p>
      <nav>
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
      </nav>
    </header>
  );
};

export default Header;
