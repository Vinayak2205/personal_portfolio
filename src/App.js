import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";

import "./app.css";
import About from "./pages/about";
import Projects from "./pages/projects";
import Notfound from "./pages/404";
import Contact from "./pages/contact";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
