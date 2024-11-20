import { IComicSearchParams, IComicDataWrapper } from "../types/types";
import axios from "./helpers/axios";

export default {
  async getComicsList(params: IComicSearchParams): Promise<IComicDataWrapper> {
    const response = await axios.get("/comics", {
      params,
    });
    return response.data;
  },

  async getComic(id: number) {
    const response = await axios.get(`/comics/${id}`);
    return response.data;
  },
};
