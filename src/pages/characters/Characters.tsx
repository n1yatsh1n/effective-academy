import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import ItemCard from "../../components/itemCard/ItemCard";
import SearchPanel from "../../components/seachPanel/SearchPanel";
import charactersStore from "../../store/CharactersStore";
import "./Characters.css";

const Characters: FC = () => {
  const { characters, loading } = charactersStore;

  useEffect(() => {
    charactersStore.getCharactersList();
  }, []);
  return (
    <>
      {loading && <h1>Loading...</h1>}
      <div className="titleWrapper">
        <h1>Characters</h1>
        <p>({characters.length})</p>
      </div>
      <SearchPanel placeholder="Search characters" />
      <div className="cardContainer">
        {characters.map((character) => (
          <ItemCard
            key={character.id}
            id={character.id}
            name={character.name}
            description={character.description}
            img={character.thumbnail.path + "." + character.thumbnail.extension}
            type="characters"
          />
        ))}
      </div>
    </>
  );
};

export default observer(Characters);
