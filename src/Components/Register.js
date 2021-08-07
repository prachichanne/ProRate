import React, { useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import AuthService from "../services/auth.service";

=======
import { Control, LocalForm, Errors } from 'react-redux-form';
>>>>>>> 00f811feeb7d264bbaec73a1a21462b5c0aedd70
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
<<<<<<< HEAD
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


=======
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => (val) && (val.length >= len);
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(val);
    
>>>>>>> 00f811feeb7d264bbaec73a1a21462b5c0aedd70
 

function handleSubmit(values){
  // e.preventDefault();

<<<<<<< HEAD
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
=======
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

         
>>>>>>> 00f811feeb7d264bbaec73a1a21462b5c0aedd70

}
   
    
   
    
    return(
       
       <div class="LoginContainer">
         <h3>Welcome ! Register here ..</h3>
            <LocalForm onSubmit={(values) => handleSubmit(values)}>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
<<<<<<< HEAD
                <input type="email" value={email}  onChange={onChangeEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" style={{color:"white"}} class="form-text">We'll never share your email with anyone else.*</div>
=======
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
>>>>>>> 00f811feeb7d264bbaec73a1a21462b5c0aedd70
              </div>
              <div class="mb-3">
                <label for="exampleInputUsername1" class="form-label">Username</label>

<<<<<<< HEAD
                <input type="text" name="username" value={username}  onChange={onChangeUsername}  class="form-control" id="exampleInputUsername1"/>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" value={password}  onChange={onChangePassword} class="form-control" id="exampleInputPassword1"/>
=======
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
>>>>>>> 00f811feeb7d264bbaec73a1a21462b5c0aedd70
              </div>
              
            <div class="input-group">
              <span class="input-group-text">First and last name</span>
<<<<<<< HEAD
              <input type="text" name="firstname" value={firstname} onChange={onChangeFirstname} aria-label="First name" class="form-control"/>
              <input type="text" name="lastname" value={lastname}  onChange={onChangeLastname} aria-label="Last name" class="form-control"/>
=======
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
>>>>>>> 00f811feeb7d264bbaec73a1a21462b5c0aedd70
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