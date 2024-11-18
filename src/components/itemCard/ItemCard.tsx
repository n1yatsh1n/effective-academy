import { Link } from "react-router-dom";
import { IItem } from "../../types/types";
import "./ItemCard.css";
const ItemCard: React.FC<IItem> = (props) => {
  const handleClick = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    const exists = favorites.some((item: IItem) => item.id === props.id);

    if (!exists) {
      favorites.push(props);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };
  return (
    <Link
      to={
        props.type === "characters"
          ? "/characters/" + props.id
          : props.type === "comics"
          ? "/comics/" + props.id
          : "/"
      }
      onClick={handleClick}
      className="cardWrapper"
    >
      <div
        className="cardFront"
        style={{ backgroundImage: `url(${props.img})` }}
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
