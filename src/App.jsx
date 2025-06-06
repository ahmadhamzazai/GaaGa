import React, { useRef } from "react";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/GaaGa" element={<Home />} />
        <Route path="/GaaGa/" element={<Home />} />
        <Route path="*" element={<div>404 - Page Not Found For This Link</div>} />
      </Routes>
    </Router>
  );
};

export default App;
