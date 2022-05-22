import axios from "axios";

const instance = axios.create({
  baseURL: "https://7bc4-103-220-40-235.in.ngrok.io",
});

export default instance;
