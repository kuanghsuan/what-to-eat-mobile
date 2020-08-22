import axios from "axios";

const ORIGIN = "https://what-to-eat-ml-backend.herokuapp.com/api";
const SESSION_URL = `${ORIGIN}/session`;
const PREFERENCE_URL = `${ORIGIN}/preferences/`;

export const fetchRestaurantsData = (user_id, page_size) =>
  axios
    .get(SESSION_URL, {
      params: { user_id: user_id, page_size: page_size },
    })
    .catch(function (error) {
      console.log(error);
    });

export const createPreference = (user_id, restaurant_id, type) => {
  const params = new URLSearchParams();
  params.append("user", user_id);
  params.append("restaurant_id", restaurant_id);
  params.append("type", type);
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
