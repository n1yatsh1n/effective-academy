import { useCallback, useEffect, useState } from "react";
import charactersStore from "../../store/CharactersStore";
import "./SearchPanel.css";
import useDebounce from "../../hooks/useDebounce";
import comicsStore from "../../store/ComicsStore";

interface SearchPanelProps {
  placeholder: string;
  type: string;
}

const SearchPanel = ({ placeholder, type }: SearchPanelProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedQuery = useDebounce<string>(searchTerm, 1500);
  const [isChange, setIsChange] = useState(false);

  const sendRequest = useCallback(
    (searchQuery: string): void => {
      if (type === "characters") {
        charactersStore.getCharactersList(
          searchQuery ? { nameStartsWith: searchQuery } : {}
        );
      } else if (type === "comics") {
        comicsStore.getComicsList({
          titleStartsWith: searchQuery,
        });
      }
    },
    [type]
  );

  useEffect(() => {
    if (isChange) {
      sendRequest(debouncedQuery);
    }
  }, [debouncedQuery, sendRequest, isChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChange(true);
    setSearchTerm(e.target.value);
  };

  return (
    <form className="inputWrapper">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchPanel;
