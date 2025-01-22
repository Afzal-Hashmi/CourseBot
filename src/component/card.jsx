import "./card.css";
import image from "../assets/imes.jpg";
const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.image ?? image}
        alt="Card image cap"
        className="card-img"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        {props.id ? (
          <a href={`course/${props.id}`} className="btn btn-danger hhh">
            Details
          </a>
        ) : (
          <a href={props.link} className="btn btn-primary">
            Learn
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
