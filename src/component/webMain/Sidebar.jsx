import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRightFromBracket,
  faUser,
  faCircleInfo,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import "./css/Sidebar.css";

const Sidebar = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
  }, []);

  return (
    <div className={"sidebar"}>
      <div className="sidebar-header">
        <h4 className="course">
          Course<span className="bot">Bot</span>
          <hr className="hr" />
        </h4>
      </div>
      <nav className="sidebar-menu">
        <ul>
          <li>
            <a href="/Dashboard">
              {" "}
              <FontAwesomeIcon icon={faHouse} /> Home
            </a>
          </li>
          <li>
            <a href="#about">
              <FontAwesomeIcon icon={faCircleInfo} />
              About
            </a>
          </li>
          <li>
            <a href="#services">
              <FontAwesomeIcon icon={faCogs} /> Services
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faUser} /> {user}
            </a>
          </li>
        </ul>
        <footer className="logout">
          <ul>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faRightFromBracket} />
                Logout
              </a>
            </li>
          </ul>
        </footer>
      </nav>
    </div>
  );
};

export default Sidebar;
