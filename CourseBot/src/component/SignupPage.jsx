// components/SignupPage.js
import React from "react";
import "./Form.css";

const SignupPage = () => {
  return (
    <div className="form-container">
      <h6 className="project-name">Course Master</h6>
      <h2 className="project-login">Signup</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
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
  );
};

export default SignupPage;
