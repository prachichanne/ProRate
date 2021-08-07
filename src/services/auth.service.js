import axios from "axios";

const API_URL = "http://localhost:8082/";

const register = (username, email, password,firstname,lastname) => {
    return axios.post(API_URL + "subs", {
        username,
        email,
        password,
         firstname,
         lastname,
      }).then((response) => {console.log(response)});
};

const login = (username, password) => {
    return axios
      .post(API_URL + "auth", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.response) {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("username",username);
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