import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import '../MyCSS.css';
import AuthService from "../services/auth.service";

// import { useEffect } from 'react';

export default function Login(){
    
        const history = useHistory();
        
        const routeChange = () =>{ 
        let path = '/'; 
        history.push(path); 
        }

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [loading, setLoading] = useState(false);
        const [message, setMessage] = useState("");

        const onChangeUsername = (e) => {
          const username = e.target.value;
          setUsername(username);
        };

        const onChangePassword = (e) => {
          const password = e.target.value;
          setPassword(password);
        };
      
      
         function handleSubmit(e){
          e.preventDefault();
        
          // const postData = {
          //          username,
          //          password,
        
          // }
        
          // axios.post("http://localhost:8082/auth",postData)
          //         .then(response => {
          //             localStorage.setItem('response',response.username.response);
          //         }).catch(err => {
          //           console.log(err);
          //         })
        
           setMessage("");
           setLoading(true);

          
          

           AuthService.login(username,password).then(
             () =>{
               history.push("/");
               window.location.reload();
             },
             (error) => {
               const resMessage = (error.response &&
                error.response.data &&
                error.response.data.message)||
                error.message ||
                error.toString();
    
              setLoading(false);
              setMessage(resMessage);

             }
             
           )

          
                
        }

        
           
return(


     
    <div className="login" class="LoginContainer">

         <h3>Welcome Back ! Login To Continue..</h3>
               <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="text" value={username}  onChange={onChangeUsername} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      <div style={{color:"white"}}id="emailHelp" class="form-text">We'll never share your email with anyone else.*</div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" value={password}  onChange={onChangePassword} class="form-control" id="exampleInputPassword1"/>
                    </div>
            
                    <button style={{backgroundColor:"green"}} type="submit" class="btn btn-primary" >Login</button>
                  
                </form>

              
                
                <div class="modal-footer">
                  <button style={{backgroundColor:"red"}} type="button" class="btn btn-success"  onClick={routeChange}>Close</button>

                </div>
            
                
   
    
    </div>

)

}

