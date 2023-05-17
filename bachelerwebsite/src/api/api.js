import axios from "axios";

const apiURL =
  process.env.REACT_APP_API_URL ||
  "http://kamtjatkaapi.cegegch4h0a4aea6.northeurope.azurecontainer.io/api";

const api = axios.create({
  baseURL: apiURL, // Replace this with your API base URL
});

export default api;
