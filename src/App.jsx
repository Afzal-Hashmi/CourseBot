import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LoginPage from "./component/auth/LoginPage";
import SignupPage from "./component/auth/SignupPage";
import Dashboard from "./component/webMain/Dashboard";
import CourseDetail from "./component/webMain/CourseDetail";
import EnrollPage from "./component/webMain/EnrollPage";
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
            <Route path="/course/:title/:id" element={<CourseDetail />} />
            <Route path="/enroll/:title/:id" element={<EnrollPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
