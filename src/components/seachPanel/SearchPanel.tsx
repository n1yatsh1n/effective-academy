import { useCallback, useEffect, useState } from "react";
import charactersStore from "../../store/CharactersStore";
import "./SearchPanel.css";
import useDebounce from "../../hooks/useDebounce";

interface SearchPanelProps {
  placeholder: string;
  type: string;
}

const SearchPanel = ({ placeholder, type }: SearchPanelProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedQuery = useDebounce<string>(searchTerm, 1500);

  const sendRequest = useCallback(
    (searchQuery: string): void => {
      if (type === "characters") {
        charactersStore.getCharactersList(
          searchQuery ? { nameStartsWith: searchQuery } : {}
        );
      }
    },
    [type]
  );

  useEffect(() => {
    sendRequest(debouncedQuery);
  }, [debouncedQuery, sendRequest]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
