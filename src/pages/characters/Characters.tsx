import characters from "../../constants/charactersShortInfo.json";
import "./Characters.css";
import ItemCard from "../../components/itemCard/ItemCard";
import SearchPanel from "../../components/seachPanel/SearchPanel";

const Characters = () => {
  return (
    <>
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
            img={character.img}
            type="characters"
          />
        ))}
      </div>
    </>
  );
};

export default Characters;
