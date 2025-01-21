import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css"; // Ensure you create this file for styles

const Sidebar = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
  }, []);

  return (
    <div className={"sidebar"}>
      <div className="sidebar-header">
        <h4>
          Course<span className="bot">Bot</span>
        </h4>
      </div>
      <nav className="sidebar-menu">
        <ul>
          <li>
            <a href="/Dashboard">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#">{user}</a>
          </li>
        </ul>
        <footer className="logout">
          <ul>
            <li>
              <a href="/">Logut</a>
            </li>
          </ul>
        </footer>
      </nav>
    </div>
  );
};

export default Sidebar;
