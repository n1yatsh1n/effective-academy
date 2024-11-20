import { Link } from "react-router-dom";
import { IItem } from "../../types/types";
import { useEffect, useState } from "react";
import "./ItemCard.css";

const ItemCard: React.FC<IItem> = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const exists = favorites.some((item: IItem) => item.id === props.id);
    setIsFavorite(exists);
  }, [props.id]);

  const handleClick = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const exists = favorites.some((item: IItem) => item.id === props.id);

    if (!exists) {
      favorites.push(props);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    } else {
      const newFavorites = favorites.filter(
        (item: IItem) => item.id !== props.id
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
      if (props.onRemove) props.onRemove(props.id);
    }
  };

  return (
    <div className="cardWrapper">
      <div
        className="cardFront"
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <h1>{props.name}</h1>
      </div>
      <div className="cardBack">
        <div
          className={`heartIcon ${isFavorite ? "filled" : ""}`}
          onClick={handleClick}
        >
          ❤
        </div>
        <p className="description">{props.description}</p>
        <Link
          to={
            props.type === "characters"
              ? "/characters/" + props.id
              : props.type === "comics"
              ? "/comics/" + props.id
              : "/"
          }
          className="readMore"
        >
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
