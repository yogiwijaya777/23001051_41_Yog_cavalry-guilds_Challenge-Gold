import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = JSON.parse(localStorage.getItem("tokens"))?.access
      ?.token;

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    // config.headers["Cache-Control"] = "no-cache";

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    try {
      if (error.response.status === 401 && !error.config._refreshing) {
        const refreshToken = JSON.parse(localStorage.getItem("tokens"))?.refresh
          ?.token;

        error.config._refreshing = true;
        const refreshResponse = await instance.post("/auth/refresh-tokens", {
          refresh_token: refreshToken,
        });

        localStorage.setItem("tokens", refreshResponse.data.data.tokens);

        return instance(error.config);
      }
      return Promise.reject(error);
    } catch (e) {
      return Promise.reject(error);
    }
  }
);

export default instance;
