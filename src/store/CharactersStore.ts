import { makeAutoObservable, runInAction } from "mobx";
import api from "../api";
import {
  ICharacter,
  ICharacterDataContainer,
  ICharacterSearchParams,
} from "../types/types";

class CharactersStore {
  characters: ICharacter[] = [];
  characterDataContainer: ICharacterDataContainer = {
    offset: 0,
    limit: 0,
    total: 0,
    count: 0,
    results: [],
  };
  loading: boolean = false;
  params: ICharacterSearchParams = {};

  constructor() {
    makeAutoObservable(this);
  }

  getCharactersList = async (): Promise<void> => {
    try {
      this.loading = true;
      const charactersDataWrapper = await api.characters.getCharactersList(
        this.params
      );
      const characters = charactersDataWrapper.data.results;
      const characterDataContainer = charactersDataWrapper.data;
      runInAction(() => {
        this.characters = characters;
        this.characterDataContainer = characterDataContainer;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

const charactersStore = new CharactersStore();
export default charactersStore;
