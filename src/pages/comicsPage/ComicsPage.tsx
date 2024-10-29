import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IComics } from "../../types/types";
import comicsMap from "../../constants/comics.json";
import "./ComicsPage.css";

const ComicsPage = () => {
  const { id } = useParams();
  const [selectedComics, setSelectedComics] = useState<IComics | null>(null);

  const getComicsById = (id: number | undefined) => {
    if (id !== undefined) {
      const comicsItem: IComics | undefined = comicsMap.find(
        (char) => char.id === id
      );
      if (comicsItem) {
        setSelectedComics(comicsItem);
      } else {
        setSelectedComics(null);
      }
    } else {
      setSelectedComics(null);
    }
  };

  useEffect(() => {
    getComicsById(Number(id));
  }, []);

  return (
    <div>
      <button className="backButton" onClick={() => window.history.back()}>
        {"<"} Back
      </button>
      <img
        className="comicsImg"
        src={"../src/assets/comicsImages/" + selectedComics?.img}
      />
      <div className="comicsContent">
        <div className="comicsInfo">
          <h1>{selectedComics?.name}</h1>
          <p>{selectedComics?.description}</p>
        </div>
        <div className="charactersList">
          <h2>Characters</h2>
          {selectedComics?.characters.map((char) => (
            <Link to={"/characters/" + char.id} key={char.id} className="characterItem">
              <p>- {char.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComicsPage;
