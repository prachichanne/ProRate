import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  
  const currentUser = AuthService.getCurrentUser();
  const getCurrentUsername = () => {
    return JSON.parse(localStorage.getItem('username'));
  };
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{getCurrentUsername}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.response.substring(0, 20)} ...{" "}
        {currentUser.response.substr(currentUser.response.length - 20)}
      </p>
      {/* <p>
        <strong>Id:</strong> {currentUser.id}
      </p> */}
      <p>
        <strong>Email:</strong> {currentUser.usn}
      </p>
      {/* <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
    </div>
  );
};

export default Profile;