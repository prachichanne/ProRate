import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8082/tutor",
  headers: {
    "Content-type": "application/json"
  }
});