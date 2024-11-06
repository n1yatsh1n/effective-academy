import React from "react";
import charactersStore from "../../store/CharactersStore";
import "./Pagination.css";
import comicsStore from "../../store/ComicsStore";

// Интерфейс для пагинации
interface PaginationProps {
  total: number;
  limit: number;
  offset: number;
  type: string;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  limit,
  offset,
  type,
}) => {
  const totalPages = Math.ceil(total / limit); // Общее количество страниц

  const handlePrevious = () => {
    if (Math.floor(offset / limit) > 0) {
      if (type === "characters") {
        charactersStore.getCharactersList({
          offset: (Math.floor(offset / limit) - 1) * limit,
        });
      } else if (type === "comics") {
        comicsStore.getComicsList({
          offset: (Math.floor(offset / limit) - 1) * limit,
        });
      }
    }
  };

  const handleNext = () => {
    if (Math.floor(offset / limit) < totalPages) {
      if (type === "characters") {
        charactersStore.getCharactersList({
          offset: (Math.floor(offset / limit) + 1) * limit,
        });
      } else if (type === "comics") {
        comicsStore.getComicsList({
          offset: (Math.floor(offset / limit) + 1) * limit,
        });
      }
    }
  };

  return (
    <div className="paginationWrapper">
      <button
        className="paginationButton"
        onClick={handlePrevious}
        disabled={Math.floor(offset / limit) === 0}
      >
        {"<"}
      </button>
      <span className="paginationText">{` Страница ${
       total > 0? Math.floor(offset / limit) + 1 : 0
      } из ${totalPages}`}</span>
      <button
        className="paginationButton"
        onClick={handleNext}
        disabled={Math.floor(offset / limit) === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
