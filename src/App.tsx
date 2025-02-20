import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./i18n";
import Home from "./pages/home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
