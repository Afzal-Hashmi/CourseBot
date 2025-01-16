// components/SignupPage.js
import React from "react";
import "./Form.css";
import image from "../assets/imes.jpg";

const SignupPage = () => {
  return (
    <div className="content-wrapper">
      <h6 className="project-name">
        Course<span className="bot">Bot</span>
      </h6>
      <div className="form-container">
        <div className="form-contain">
          <h2 className="project-login">Signup</h2>
          <form>
            <div className="input-fields">
              <div className="form-group">
                <input type="text" id="name" placeholder="Full Name" />
              </div>

              <div className="form-group">
                <input type="email" id="email" placeholder="Email" />
              </div>

              <div className="form-group">
                <input type="password" id="password" placeholder="Password" />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Signup
            </button>
          </form>
          <p>
            Alredy have an account?
            <a href="/"> Login</a>
          </p>
        </div>
        <div className="container">
          <img src={image} alt="Logo" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
