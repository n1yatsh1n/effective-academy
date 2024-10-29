import { Link } from "react-router-dom";
import { IItem } from "../../types/types";
import "./ItemCard.css";
const ItemCard: React.FC<IItem> = (props) => {
  const imgLink =
    props.type === "characters"
      ? "charactersImages/"
      : props.type === "comics"
      ? "comicsImages/"
      : null;
  return (
    <Link
      to={
        props.type === "characters"
          ? "/characters/" + props.id
          : props.type === "comics"
          ? "/comics/" + props.id
          : "/"
      }
      className="cardWrapper"
    >
      <div
        className="cardFront"
        style={{ backgroundImage: `url(src/assets/${imgLink}${props.img})` }}
      >
        <h1>{props.name}</h1>
      </div>
      <div className="cardBack">
        <p>{props.description}</p>
        <p className="readMore">Read more...</p>
      </div>
    </Link>
  );
};

export default ItemCard;
