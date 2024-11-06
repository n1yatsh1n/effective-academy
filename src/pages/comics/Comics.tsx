import { FC, useEffect } from "react";
import ItemCard from "../../components/itemCard/ItemCard";
import SearchPanel from "../../components/seachPanel/SearchPanel";
import { observer } from "mobx-react-lite";
import comicsStore from "../../store/ComicsStore";

const Comics: FC = () => {
  const { comics, loading } = comicsStore;

  useEffect(() => {
    comicsStore.getComicsList({});
  }, []);

  return (
    <>
      <div className="titleWrapper">
        <h1>Preview Comics</h1>
        <p>({comics.length})</p>
      </div>
      <SearchPanel placeholder="Search comics" type="comics" />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="cardContainer">
          {comics.map((comics) => (
            <ItemCard
              key={comics.id}
              id={comics.id}
              name={comics.title}
              description={comics.description}
              img={comics.thumbnail.path + "." + comics.thumbnail.extension}
              type="comics"
            />
          ))}
        </div>
      )}
    </>
  );
};

export default observer(Comics);
