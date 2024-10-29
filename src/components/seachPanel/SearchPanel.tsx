import searchImg from "../../assets/search.svg";
import "./SearchPanel.css";

interface SearchPanelProps {
  placeholder: string;
}

const SearchPanel = ({ placeholder }: SearchPanelProps) => {
  return (
    <form className="inputWrapper">
      <input type="text" placeholder={placeholder} />
      <button type="submit">
        <img src={searchImg} style={{ height: "25px", width: "25px" }} />
      </button>
    </form>
  );
};

export default SearchPanel;
