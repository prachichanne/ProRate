import axios from 'axios';
import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
import '../MyCSS.css';

export default function Login(){
    
        const history = useHistory();
    
        const routeChange = () =>{ 
        let path = '/'; 
        history.push(path); 
        }

        const [email, setEmail] = useState('');
        // const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        function handleSubmit(e){
          e.preventDefault();
        
          const postData = {
                   email,
                   password,
        
          };
        
          axios.post("http://localhost:8082/api/login",postData)
                  .then(response => {
                      console.log(response);
                  });
        
                  setEmail("");
                  setPassword("");
                 
        }

        
           
return(


     
    <div className="login" class="LoginContainer">

         <h3>Welcome Back ! Login To Continue..</h3>
               <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      <div style={{color:"white"}}id="emailHelp" class="form-text">We'll never share your email with anyone else.*</div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
                    </div>
            
                    <button style={{backgroundColor:"green"}} type="submit" class="btn btn-primary">Submit</button>
                  
                </form>
                
                <div class="modal-footer">
                  <button style={{backgroundColor:"red"}} type="button" class="btn btn-success" onClick={routeChange}>Close</button>

                </div>
            
                
   
    
    </div>

)

}

