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
        if (searchQuery) {
          charactersStore.characters = [];
          charactersStore.params.nameStartsWith = searchQuery;
          charactersStore.params.offset = 1;
        } else {
          charactersStore.params = {};
        }
        charactersStore.getCharactersList();
      } else if (type === "comics") {
        if (searchQuery) {
          comicsStore.comics = [];
          comicsStore.params.titleStartsWith = searchQuery;
          comicsStore.params.offset = 1;
        } else {
          comicsStore.params = {};
        }
        comicsStore.getComicsList();
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
    if (type === "characters") {
      charactersStore.params.offset = undefined;
    } else if (type === "comics") {
      comicsStore.params.offset = undefined;
    }
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
