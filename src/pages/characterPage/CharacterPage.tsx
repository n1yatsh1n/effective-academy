import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api";
import { ICharacter } from "../../types/types";
import "./CharacterPage.css";

const CharacterPage = () => {
  const { id } = useParams();
  const [selectedCharacter, setSelectedCharacter] = useState<ICharacter | null>(
    null
  );

  const getCharacterById = async (id: number | undefined) => {
    if (id !== undefined) {
      await api.characters.getCharacter(id).then((res) => {
        setSelectedCharacter(res.data.results[0]);
        console.log(res.data.results[0]);
      });
    } else {
      setSelectedCharacter(null);
    }
  };

  useEffect(() => {
    getCharacterById(Number(id));
  }, [id]);

  return (
    <div>
      <button className="backButton" onClick={() => window.history.back()}>
        {"<"} Back
      </button>
      <img
        className="characterImg"
        src={
          selectedCharacter?.thumbnail.path +
          "." +
          selectedCharacter?.thumbnail.extension
        }
        alt={selectedCharacter?.name}
      />
      <div className="characterContent">
        <div className="characterInfo">
          <h1>{selectedCharacter?.name}</h1>
          <p className="characterDescription">
            {selectedCharacter?.description
              ? selectedCharacter.description
              : "No description"}
          </p>
        </div>
        <div className="comicsList">
          <h2>Comics ({selectedCharacter?.comics.returned})</h2>
          {selectedCharacter?.comics?.items &&
            selectedCharacter.comics.items.map((comic) => (
              <Link
                to={"/comics/" + comic.resourceURI?.split("/")[6]}
                key={comic.resourceURI?.split("/")[6]}
                className="comicsItem"
              >
                <p>- {comic.name}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
