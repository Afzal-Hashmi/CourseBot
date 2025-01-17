import React from "react";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LoginPage from "./component/LoginPage";
import SignupPage from "./component/SignupPage";
import Dashboard from "./component/Dashboard";
import CourseDetail from "./component/CourseDetail";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <main className="main">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/course/:id" element={<CourseDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
