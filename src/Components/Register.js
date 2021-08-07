import React, { useState } from 'react';
import axios from 'axios';
import AuthService from "../services/auth.service";

import { useHistory } from "react-router-dom";


export default function Login(){
    const history = useHistory();

    const routeChange = () =>{ 
    let path = '/'; 
    history.push(path); 
    }

   


    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
  

    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
  
    const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };

    const onChangeFirstname = (e) => {
      const firstname = e.target.value;
      setFname(firstname);
    };

    const onChangeLastname = (e) => {
      const lastname = e.target.value;
      setLname(lastname);
    };


 

function handleSubmit(e){
  e.preventDefault();

  setMessage("");
  setSuccessful(false);

  // const postData = {
  //          email,
  //          password,
  //          username,
  //          firstname,
  //          lastname,

  // };

  // axios.post("http://localhost:8082/subs",postData)
  //         .then(response => {
  //             console.log(response);
  //         }).catch(err => {console.log(err)});

  //         setEmail("");
  //         setPassword("");
  //         setUsername("");
  //         setFname("");
  //         setLname("");

  //         alert("You have been registered successfully !!")

         AuthService.register(username,email,password,firstname,lastname).then(
          //  (response)=>{
          //    setMessage(response.data.message);
          //    setSuccessful(true);
          //  },
          //  (error)=>{
          //   const resMessage =
          //   (error.response &&
          //   //  error.response.data &&
          //     error.response.data.message) ||
          //   error.message ||
          //   error.toString();

          // setMessage(resMessage);
          // setSuccessful(false);
          //  }
         );

}
   
    
   
    
    return(
       
       <div class="LoginContainer">
         <h3>Welcome ! Register here ..</h3>
            <form onSubmit={handleSubmit}>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" value={email}  onChange={onChangeEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" style={{color:"white"}} class="form-text">We'll never share your email with anyone else.*</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputUsername1" class="form-label">Username</label>

                <input type="text" name="username" value={username}  onChange={onChangeUsername}  class="form-control" id="exampleInputUsername1"/>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" value={password}  onChange={onChangePassword} class="form-control" id="exampleInputPassword1"/>
              </div>
              
            <div class="input-group">
              <span class="input-group-text">First and last name</span>
              <input type="text" name="firstname" value={firstname} onChange={onChangeFirstname} aria-label="First name" class="form-control"/>
              <input type="text" name="lastname" value={lastname}  onChange={onChangeLastname} aria-label="Last name" class="form-control"/>
            </div>
          
            <div class="crete"><button style={{backgroundColor:"green"}} type="submit" class="btn btn-success my-4" >Create Account</button></div> 
             <div class="modal-footer">
               
            <button style={{backgroundColor:"red"}} type="button" class="btn btn-secondary" onClick={routeChange}>Close</button>
            {/* <button type="button" class="btn btn-primary" onClick={routeChange}>Save changes</button> */}
          </div>
          </form>
      
            </div>

                
       
        
    
    )
    
    }