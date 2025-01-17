import React from "react";
import "./card.css";
import image from "../assets/imes.jpg";
const Card = (props) => {
  return (
    <div className="card">
      <img src={image} alt="Card image cap" className="card-img" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href="course/{props.id}" className="btn btn-primary">
          Enroll
        </a>
      </div>
    </div>
  );
};

export default Card;

// Inside your App.js file
