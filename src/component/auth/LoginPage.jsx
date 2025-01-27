import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Form.css";
import image from "../assets/pp.jpg";

const LoginPage = () => {
  const [uEmail, setuEmail] = useState("");
  const [uPassword, setuPassword] = useState("");

  const userData = [
    {
      Name: "Afzal",
      Email: "Afzal@gmail.com",
      Password: "aaaa",
    },
    {
      Name: "Yousuf",
      Email: "Yousuf@gmail.com",
      Password: "yousuf",
    },
    {
      Name: "Admin",
      Email: "Admin@gmail.com",
      Password: "admin",
    },
  ];

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = userData.find(
      (user) => user.Email.toLowerCase() === uEmail.toLowerCase()
    );

    if (user && user.Password === uPassword) {
      setError("");
      localStorage.setItem("user", user.Name);
      navigate("/Dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="input-fields">
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={uEmail}
                  onChange={(e) => setuEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={uPassword}
                  onChange={(e) => setuPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>

          <p>
            Don't have an account?
            <a href="/Signup" className="link">
              Sign up now!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
