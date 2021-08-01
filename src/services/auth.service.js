import axios from "axios";

const API_URL = "http://localhost:8082/";

const register = (username, email, password) => {
    return axios.post(API_URL + "subs", {
        username,
        email,
        password,
      });
};

const login = (username, password) => {
    return axios
      .post(API_URL + "auth", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  
  export default {
    register,
    login,
    logout,
    getCurrentUser,
  };