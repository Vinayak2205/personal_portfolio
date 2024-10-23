import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";

import "./app.css";
import About from "./pages/about";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
