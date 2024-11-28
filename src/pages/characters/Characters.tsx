import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import ItemCard from "../../components/itemCard/ItemCard";
import SearchPanel from "../../components/seachPanel/SearchPanel";
import charactersStore from "../../store/CharactersStore";
import "./Characters.css";

const Characters: FC = () => {
  const { characters, loading, getCharactersList } = charactersStore;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getCharactersList();
  }, []);

  const loadMore = () => {
    if (!loading) {
      setOffset(offset + 1);
      charactersStore.params.offset = offset + 1;
      getCharactersList();
    }
  };

  return (
    <>
      <div className="titleWrapper">
        <h1>Characters</h1>
        <p>({characters.length})</p>
      </div>
      <SearchPanel placeholder="Search characters" type="characters" />

      {!loading && characters.length === 0 && <h1>No characters found</h1>}
      {loading && characters.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <VirtuosoGrid
          style={{
            minHeight: 440,
            marginTop: 20,
          }}
          increaseViewportBy={200}
          data={characters}
          endReached={loadMore}
          itemContent={(index, character) => (
            <ItemCard
              key={character.id}
              id={character.id}
              name={character.name}
              description={character.description}
              img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              type="characters"
            />
          )}
          components={{
            Footer: () => (loading ? <h1>Loading more...</h1> : null),
          }}
          listClassName="cardContainer"
        />
      )}
    </>
  );
};

export default observer(Characters);
