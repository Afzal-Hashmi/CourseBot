// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import SignupPage from "./component/SignupPage";
// import Dashboard from "./component/Dashboard";

import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="app">
        <main className="main">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
