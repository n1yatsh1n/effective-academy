import { Link, useParams } from "react-router-dom";
import characters from "../../constants/characters.json";
import "./CharacterPage.css";
import { ICharacter } from "../../types/types";
import { useEffect, useState } from "react";

const CharacterPage = () => {
  const { id } = useParams();
  const [selectedCharacter, setSelectedCharacter] = useState<ICharacter | null>(
    null
  );

  const getCharacterById = (id: number | undefined) => {
    if (id !== undefined) {
      const character: ICharacter | undefined = characters.find(
        (char) => char.id === id
      );
      if (character) {
        setSelectedCharacter(character);
      } else {
        setSelectedCharacter(null);
      }
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
        src={"../src/assets/charactersImages/" + selectedCharacter?.img}
        alt={selectedCharacter?.name}
      />
      <div className="characterContent">
        <div className="characterInfo">
          <h1>{selectedCharacter?.name}</h1>
          <p className="characterDescription">
            {selectedCharacter?.description}
          </p>
          {selectedCharacter && (
            <div className="powersList">
              <h2>Powers</h2>
              {selectedCharacter.powers.map((power) => (
                <p className="characterPower">- {power}</p>
              ))}
            </div>
          )}
        </div>
        <div className="comicsList">
          <h2>Comics</h2>
          {selectedCharacter?.comics.map((comic) => (
            <Link
              to={"/comics/" + comic.id}
              key={comic.id}
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
