import React from "react";
import "./card.css";
import image from "../assets/imes.jpg";
const Card = (props) => {
  return (
    <div className="card">
      <img src={image} alt="Card image cap" />
      <iframe src="https://platform.twitter.com/widgets/tweet_button.html"></iframe>
      <div className="card-body">
        <h5 className="card-title">React Js</h5>
        <p className="card-text">{props.description}</p>
        <a
          href="https://app.youlearn.ai/add/https:/www.youtube.com/watch?v=wsfRJFqvPS0"
          className="btn btn-primary"
        >
          AI
        </a>
      </div>
    </div>
  );
};

export default Card;

// Inside your App.js file
