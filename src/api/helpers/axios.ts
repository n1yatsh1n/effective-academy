import axios from "axios";
import envs from "../../config/environments";
import md5 from "md5";

const instance = axios.create({
  baseURL: envs.baseApiUrl,
  params: {
    ts: Date.now().toString(),
    apikey: envs.apiKey,
    hash: md5(Date.now().toString() + envs.privateKey + envs.apiKey),
  },
});

export default instance;

//https://gateway.marvel.com:443/v1/public/characters?apikey=3dbcf9b60e56a5fe5e322b5cd7a4449c

//https://gateway.marvel.com/v1/public/characters?apikey=3dbcf9b60e56a5fe5e322b5cd7a4449c
