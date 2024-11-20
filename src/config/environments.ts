const envs = import.meta.env;

export default {
  apiKey: envs.VITE_API_KEY,
  baseApiUrl: envs.VITE_BASE_API_URL,
  privateKey: envs.VITE_API_PRIVATE_KEY,
};
