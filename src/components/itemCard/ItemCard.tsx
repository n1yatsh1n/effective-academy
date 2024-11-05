import { Link } from "react-router-dom";
import { IItem } from "../../types/types";
import "./ItemCard.css";
import charactersStore from "../../store/CharactersStore";
const ItemCard: React.FC<IItem> = (props) => {
  const { setCurrentCharacter } = charactersStore;
  return (
    <Link
      to={
        props.type === "characters"
          ? "/characters/" + props.id
          : props.type === "comics"
          ? "/comics/" + props.id
          : "/"
      }
      onClick={() => {
        if (props.type === "characters") {
          setCurrentCharacter(props.id);
        }
      }}
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
