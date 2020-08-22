import * as AxiosLogger from "axios-logger";

import defaultAxios from "axios";

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
  (response) => AxiosLogger.responseLogger(response, { data: false }),
  AxiosLogger.errorLogger
);

export const fetchRestaurantsData = (userId, pageSize) =>
  axios
    .get(SESSION_URL, {
      params: { user_id: userId, page_size: pageSize },
    })
    .catch(function (error) {
      console.log(error);
    });

export const createPreference = (userId, restaurantId, type) => {
  const params = new URLSearchParams({
    user: userId,
    restaurant_id: restaurantId,
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
