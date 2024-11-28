import { makeAutoObservable, runInAction } from "mobx";
import api from "../api";
import {
  IComic,
  IComicDataContainer,
  IComicSearchParams,
} from "../types/types";

class ComicsStore {
  comics: IComic[] = [];
  comicsDataContainer: IComicDataContainer = {
    offset: 0,
    limit: 0,
    total: 0,
    count: 0,
    results: [],
  };
  loading: boolean = false;
  params: IComicSearchParams = {};

  constructor() {
    makeAutoObservable(this);
  }

  getComicsList = async (): Promise<void> => {
    try {
      this.loading = true;
      const comicsDataWrapper = await api.comics.getComicsList(this.params);
      const comics = comicsDataWrapper.data.results;
      const comicsDataContainer = comicsDataWrapper.data;
      runInAction(() => {
        this.comics = [...this.comics, ...comics];
        this.comicsDataContainer = comicsDataContainer;
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
