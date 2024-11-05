import { makeAutoObservable, runInAction } from "mobx";
import api from "../api";
import { ICharacter, ICharacterSearchParams } from "../types/types";

class CharactersStore {
  characters: ICharacter[] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getCharactersList = async (params: ICharacterSearchParams): Promise<void> => {
    try {
      this.loading = true;
      const charactersData = await api.characters.getCharactersList(params);
      const characters = charactersData.data.results;
      console.log(characters);
      runInAction(() => {
        this.characters = characters;
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
