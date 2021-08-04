import React, { useState } from 'react';
import axios from 'axios';
import { Control, LocalForm, Errors } from 'react-redux-form';
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
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => (val) && (val.length >= len);
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(val);
    
 

function handleSubmit(values){
  // e.preventDefault();

  const postData = {
           email,
           password,
           username,
           firstname,
           lastname,

  };

  axios.post("http://localhost:8082/api/create",postData)
          .then(response => {
              console.log(response);
          });

          setEmail("");
          setPassword("");
          setUsername("");
          setFname("");
          setLname("");

          alert("You have been registered successfully !!")

         

}
   
    
   
    
    return(
       
       <div class="LoginContainer">
         <h3>Welcome ! Register here ..</h3>
            <LocalForm onSubmit={(values) => handleSubmit(values)}>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <Control.text type="email" 
                value={email}  
                onChange={(e) => setEmail(e.target.value)} 
                class="form-control" 
                model=".exampleInputEmail1" 
                id="exampleInputEmail1" aria-describedby="emailHelp"
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
                <div model=".emailHelp" id="emailHelp" style={{color:"white"}} class="form-text">We'll never share your email with anyone else.*</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputUsername1" class="form-label">Username</label>

                <Control.text type="text" 
                name="username" 
                value={username}  
                onChange={(e) => setUsername(e.target.value)}  
                class="form-control" 
                model=".exampleInputUsername1" 
                id="exampleInputUsername1"
                validators={{
                  required, minLength: minLength(4), maxLength: maxLength(18)
                }}
    
              />
              <Errors
                      class="text-danger"
                      model=".exampleInputUsername1"
                      show="touched"
                      messages={{
                        required: 'Required Field!',
                        minLength: ' Must contain atleast 4 characters, numbers or symbols',
                        maxLength: 'Must contain atmost 16 characters, numbers or symbols',
                       
                      }} 
                  />
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
              
            <div class="input-group">
              <span class="input-group-text">First and last name</span>
              <Control.text type="text" 
              name="firstname" 
              value={firstname} 
              onChange={(e) => setFname(e.target.value)} 
              aria-label="First name" 
              model=".firstname1" 
              id="firstname1" 
              class="form-control"
              validators={{
                required, minLength: minLength(3), maxLength: maxLength(15)
              }}
            />
            <Errors
                class="text-danger"
                model=".firstname1"
                show="touched"
                messages={{
                  required: 'Required Field!',
                  minLength: ' Must be greater than 2 characters',
                  maxLength: 'Must be 15 characters or less'
                }} 
            />
              <Control.text type="text" 
              name="lastname" 
              value={lastname}  
              onChange={(e) => setLname(e.target.value)} 
              aria-label="Last name" 
              model=".lastname1" 
              id="lastname1" 
              class="form-control"
              validators={{
                required, minLength: minLength(3), maxLength: maxLength(15)
              }}
            />
                <Errors
                class="text-danger"
                model=".lastname1"
                show="touched"
                messages={{
                  required: 'Required Field!',
                  minLength: ' Must be greater than 2 characters',
                  maxLength: 'Must be 15 characters or less'
                }} 
            />
            </div>
          
            <div class="crete"><button style={{backgroundColor:"green"}} type="submit" class="btn btn-success my-4" >Create Account</button></div> 
             <div class="modal-footer">
               
            <button style={{backgroundColor:"red"}} type="button" class="btn btn-secondary" onClick={routeChange}>Close</button>
            {/* <button type="button" class="btn btn-primary" onClick={routeChange}>Save changes</button> */}
          </div>
          </LocalForm>
      
            </div>

                
       
        
    
    )
    
    }