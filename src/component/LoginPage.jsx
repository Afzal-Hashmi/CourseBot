// components/LoginPage.js
import React from "react";
import "./Form.css";
import image from "../assets/pp.jpg";

const LoginPage = () => {
  return (
    <div className="content-wrapper">
      <h6 className="project-name">
        Course<span className="bot">Bot</span>
      </h6>
      <div className="form-container">
        <div className="container">
          <img src={image} alt="Logo" className="logo" />
        </div>
        <div className="form-contain">
          <h2 className="project-login">Login</h2>
          <form>
            <div className="input-fields">
              <div className="form-group">
                <input type="email" id="email" placeholder="Email" />
              </div>

              <div className="form-group">
                <input type="password" id="password" placeholder="Password" />
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>

          <p>
            Don't have an account?
            <a href="/Signup"> Sign up now!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
