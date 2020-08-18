import axios from "axios";

const SESSION_URL = "https://what-to-eat-ml-backend.herokuapp.com/api/session";

export const fetchRestaurantsData = (user_id, page_size) =>
  axios
    .get(SESSION_URL, {
      params: { user_id: user_id, page_size: page_size },
    })
    .catch(function (error) {
      console.log(error);
    });
