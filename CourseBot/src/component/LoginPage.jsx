// components/LoginPage.js
import React from "react";
import "./Form.css";

const LoginPage = () => {
  return (
    <div className="form-container">
      <div className="title-container">
        <h6 className="project-name">Course Master</h6>
        <h2 className="project-login">Login</h2>
      </div>
      <form>
        <div className="form-group">
          <input type="email" id="email" placeholder="Email" />
        </div>

        <div className="form-group">
          <input type="password" id="password" placeholder="Password" />
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
  );
};

export default LoginPage;
