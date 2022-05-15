import authHeader from "./auth-header";
const API_URL = "http://localhost:8082/";


const getPublicContent = () => {
    return axios.get(API_URL + "dashboard");
  };

  export default {
    getPublicContent,
  
  };