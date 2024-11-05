import { ICharacterDataWrapper, ICharacterSearchParams } from "../types/types";
import axios from "./helpers/axios";

export default {
  async getCharactersList(
    params: ICharacterSearchParams
  ): Promise<ICharacterDataWrapper> {
    const response = await axios.get("/characters", {
      params,
    });
    return response.data;
  },

  async getCharacter(id: number) {
    const response = await axios.get(`/characters/${id}`);
    console.log(response.data);
    return response.data;
  },
};
