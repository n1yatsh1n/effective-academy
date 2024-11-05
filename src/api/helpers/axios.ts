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
