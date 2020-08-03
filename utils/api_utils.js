import axios from 'axios';

const SESSION_URL = "http://localhost:8000/api/session";

export const fetchRestaurantsData = (user_id, page_size) => axios.get(SESSION_URL, {
    params: { user_id: user_id, page_size: page_size }
}).catch(function (error) {
    console.log(error);
});
