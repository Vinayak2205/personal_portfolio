// src/App.js

import React from "react";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
