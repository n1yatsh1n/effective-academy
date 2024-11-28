import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import ItemCard from "../../components/itemCard/ItemCard";
import SearchPanel from "../../components/seachPanel/SearchPanel";
import comicsStore from "../../store/ComicsStore";

const Comics: FC = () => {
  const { comics, loading } = comicsStore;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    comicsStore.getComicsList();
  }, []);

  const loadMore = () => {
    if (!loading) {
      setOffset(offset + 1);
      comicsStore.params.offset = offset + 1;
      comicsStore.getComicsList();
    }
  };

  return (
    <>
      <div className="titleWrapper">
        <h1>Preview Comics</h1>
        <p>({comics.length})</p>
      </div>
      <SearchPanel placeholder="Search comics" type="comics" />
      {loading && comics.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <VirtuosoGrid
          style={{ height: "100vh", marginTop: 20 }}
          data={comics}
          endReached={loadMore}
          itemContent={(index, comics) => (
            <ItemCard
              key={comics.id}
              id={comics.id}
              name={comics.title}
              description={comics.description}
              img={comics.thumbnail.path + "." + comics.thumbnail.extension}
              type="comics"
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

export default observer(Comics);
