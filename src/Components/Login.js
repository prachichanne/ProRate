import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import '../MyCSS.css';
import { useEffect } from 'react';

export default function Login(){
    
        const history = useHistory();
        // const routeChange = () =>{ 
        // let path = '/'; 
        // history.push(path); 
        // }

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

      
         function handleSubmit(e){
          e.preventDefault();
        
          const postData = {
                   username,
                   password,
        
          }
        
          axios.post("http://localhost:8082/auth",postData)
                  .then(response => {
                      console.log(response);
                  })
        
                
        }

        
           
return(


     
    <div className="login" class="LoginContainer">

         <h3>Welcome Back ! Login To Continue..</h3>
               <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="text" value={username}  onChange={(e) => setUsername(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      <div style={{color:"white"}}id="emailHelp" class="form-text">We'll never share your email with anyone else.*</div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
                    </div>
            
                    <button style={{backgroundColor:"green"}} type="submit" class="btn btn-primary" >Login</button>
                  
                </form>

              
                
                <div class="modal-footer">
                  <button style={{backgroundColor:"red"}} type="button" class="btn btn-success"  >Close</button>

                </div>
            
                
   
    
    </div>

)

}

