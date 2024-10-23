import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";

import "./app.css";
import About from "./pages/about";
import Notfound from "./pages/404";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
