import axios from "axios";

const instance = axios.create({
  baseURL: "https://2e12-103-220-40-235.in.ngrok.io/",
});

export default instance;
