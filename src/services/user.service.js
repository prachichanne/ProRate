
const API_URL = "http://localhost:8080/";


const getPublicContent = () => {
    return axios.get(API_URL + "test");
  };

  export default {
    getPublicContent,
  
  };