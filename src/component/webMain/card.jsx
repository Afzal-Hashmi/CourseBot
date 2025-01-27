import "./css/card.css";
import image from "../assets/imes.jpg";
const Card = (props) => {
  return (
    <a
      href={props.link ?? `course/${props.title}/${props.id}`}
      style={{ textDecoration: "none" }}
    >
      <div className="card">
        <img
          src={
            props.image ??
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcU560l55GT4frppFcMy8DsNNFJIA00iHL6A&s"
          }
          alt="Card image cap"
          className="card-img"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {!props.link ? (
            <p className="card-description">{props.description}</p>
          ) : null}
        </div>
      </div>
    </a>
  );
};

export default Card;
