import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api";
import { IComic } from "../../types/types";
import "./ComicsPage.css";

const ComicsPage = () => {
  const { id } = useParams();
  const [selectedComics, setSelectedComics] = useState<IComic | null>(null);

  const getComicsById = async (id: number | undefined) => {
    if (id !== undefined) {
      await api.comics.getComic(id).then((res) => {
        setSelectedComics(res.data.results[0]);
        console.log(res.data.results[0]);
      });
    } else {
      setSelectedComics(null);
    }
  };

  useEffect(() => {
    getComicsById(Number(id));
  }, [id]);

  return (
    <div>
      <button className="backButton" onClick={() => window.history.back()}>
        {"<"} Back
      </button>
      <img
        className="comicsImg"
        src={
          selectedComics?.thumbnail.path +
          "." +
          selectedComics?.thumbnail.extension
        }
      />
      <div className="comicsContent">
        <div className="comicsInfo">
          <h1>{selectedComics?.title}</h1>
          {selectedComics?.description ? (
            <p>{selectedComics?.description}</p>
          ) : (
            <p>No description</p>
          )}
        </div>
        <div className="charactersList">
          <h2>Characters</h2>
          {selectedComics?.characters?.returned &&
          selectedComics?.characters?.returned > 0 ? (
            selectedComics?.characters?.items?.map((char) => (
              <Link
                to={"/characters/" + char.resourceURI?.split("/")[6]}
                key={char.resourceURI?.split("/")[6]}
                className="characterItem"
              >
                <p>- {char.name}</p>
              </Link>
            ))
          ) : (
            <p>No characters</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComicsPage;
