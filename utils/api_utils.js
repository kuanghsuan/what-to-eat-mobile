import defaultAxios from "axios";
import * as AxiosLogger from "axios-logger";

const SESSION_URL = "/session";
const PREFERENCE_URL = "/preferences/";

const axios = defaultAxios.create({
  baseURL: "https://what-to-eat-ml-backend.herokuapp.com/api",
});

axios.interceptors.request.use(
  AxiosLogger.requestLogger,
  AxiosLogger.errorLogger
);
axios.interceptors.response.use(
  AxiosLogger.responseLogger,
  AxiosLogger.errorLogger
);

export const fetchRestaurantsData = (user_id, page_size) =>
  axios
    .get(SESSION_URL, {
      params: { user_id: user_id, page_size: page_size },
    })
    .catch(function (error) {
      console.log(error);
    });

export const createPreference = (user_id, restaurant_id, type) => {
  const params = new URLSearchParams({
    user: user_id,
    restaurant_id: restaurant_id,
    type: type,
  });
  return axios.post(PREFERENCE_URL, params).catch(function (error) {
    console.log(error);
  });
};

export const fetchFavoritesList = (user_id) =>
  axios
    .get(PREFERENCE_URL, {
      params: { user: user_id },
    })
    .catch(function (error) {
      console.log(error);
    });
