import ItemCard from "../../components/itemCard/ItemCard";
import SearchPanel from "../../components/seachPanel/SearchPanel";
import comics from "../../constants/comicsShortInfo.json";
const Comics = () => {
  return (
    <>
      <div className="titleWrapper">
        <h1>Preview Comics</h1>
        <p>({comics.length})</p>
      </div>
      <SearchPanel placeholder="Search comics" />
      <div className="cardContainer">
        {comics.map((comics) => (
          <ItemCard
            key={comics.id}
            id={comics.id}
            name={comics.name}
            description={comics.description}
            img={comics.img}
            type="comics"
          />
        ))}
      </div>
    </>
  );
};

export default Comics;
