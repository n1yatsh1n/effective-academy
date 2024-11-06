import { makeAutoObservable, runInAction } from "mobx";
import api from "../api";
import { IComic, IComicSearchParams } from "../types/types";

class ComicsStore {
  comics: IComic[] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getComicsList = async (params: IComicSearchParams): Promise<void> => {
    try {
      this.loading = true;
      const comicsData = await api.comics.getComicsList(params);
      const comics = comicsData.data.results;
      runInAction(() => {
        this.comics = comics;
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

const comicsStore = new ComicsStore();
export default comicsStore;
