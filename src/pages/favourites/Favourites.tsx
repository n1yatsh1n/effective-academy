import React from "react";
import { IItem } from "../../types/types"; 
import ItemCard from "../../components/itemCard/ItemCard";

const Favourites: React.FC = () => {
  const favorites: IItem[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return (
    <div>
      <div className="titleWrapper">
        <h1>Favourites</h1>
        <p>({favorites.length})</p>
      </div>
      {favorites.length === 0 ? (
        <p>У вас нет избранных элементов.</p>
      ) : (
        <div className="cardContainer">
          {favorites.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              img={item.img}
              type={item.type}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
