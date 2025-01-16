// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import SignupPage from "./component/SignupPage";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
        <header className="header">
          <div>
            <button onClick={toggleDarkMode} className="toggle-btn">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
