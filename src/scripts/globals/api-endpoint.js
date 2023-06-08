import config from "./config";

const API_ENDPOINT = {
  RESTAURANT_LIST: `${config.BASE_URL}list`,
  DETAIL: (id) => `${config.BASE_URL}detail/${id}`,
};
export default API_ENDPOINT;