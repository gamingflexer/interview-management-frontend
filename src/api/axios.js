import axios from "axios";

const instance = axios.create({
  baseURL: "https://53a1-103-220-40-235.in.ngrok.io/",
});

export default instance;
