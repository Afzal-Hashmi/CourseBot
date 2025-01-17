import React, { useState } from "react";
import "./Sidebar.css"; // Ensure you create this file for styles

const Sidebar = () => {
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
            <a href="/">Logout</a>
          </li>
        </ul>
        <footer className="logout">
          <ul>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </footer>
      </nav>
    </div>
  );
};

export default Sidebar;
