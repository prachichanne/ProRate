import axios from 'axios';
import React, { useState } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
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
        const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => (val) && (val.length >= len);
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(val);

        function handleSubmit(values){
          // e.preventDefault();
        
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
                  alert("You have been Logged In successfully !!")
        }

        
           
return(


     
    <div className="login" class="LoginContainer">

         <h3>Welcome Back ! Login To Continue..</h3>
               <LocalForm onSubmit={(values) => handleSubmit(values)}>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <Control.text type="email" 
                      value={email}  
                      onChange={(e) => setEmail(e.target.value)} 
                      class="form-control"
                      model=".exampleInputEmail1" 
                      id="exampleInputEmail1" 
                      aria-describedby="emailHelp"
                      validators={{
                        required, validEmail
                      }}
          
                    />
                    <Errors
                            class="text-danger"
                            model=".exampleInputEmail1"
                            show="touched"
                            messages={{
                              required: 'Required Field!',
                              validEmail:' Invalid Email Address. Please Enter Valid Email address'
                            }} 
                        />
                      <div style={{color:"white"}}id="emailHelp" class="form-text">We'll never share your email with anyone else.*</div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <Control.text type="password" 
                      value={password}  
                      onChange={(e) => setPassword(e.target.value)} 
                      class="form-control" 
                      model=".exampleInputPassword1"
                      id="exampleInputPassword1"
                      validators={{
                        required, minLength: minLength(4), maxLength: maxLength(18)
                      }}
          
                    />
                    <Errors
                            class="text-danger"
                            model=".exampleInputPassword1"
                            show="touched"
                            messages={{
                              required: 'Required Field!',
                              minLength: ' Must contain atleast 4 characters, numbers or symbols',
                              maxLength: 'Must contain atmost 16 characters, numbers or symbols',
                             
                            }} 
                        />
                    </div>
            
                    <button style={{backgroundColor:"green"}} type="submit" class="btn btn-primary">Submit</button>
                  
                </LocalForm>
                
                <div class="modal-footer">
                  <button style={{backgroundColor:"red"}} type="button" class="btn btn-success" onClick={routeChange}>Close</button>

                </div>
            
                
   
    
    </div>

)

}

