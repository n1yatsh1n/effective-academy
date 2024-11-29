import axios from "axios";
import envs from "../../config/environments";
import md5 from "md5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const instance = axios.create({
  baseURL: envs.baseApiUrl,
  params: {
    ts: Date.now().toString(),
    apikey: envs.apiKey,
    hash: md5(Date.now().toString() + envs.privateKey + envs.apiKey),
  },
});

instance.interceptors.request.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("error", error);
    toast.error(error.message);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("error", error);
    toast.error(error.message);
    return Promise.reject(error);
  }
);

export default instance;
