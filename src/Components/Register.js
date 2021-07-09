import React from 'react';
import { useHistory } from "react-router-dom";
export default function Login(){
    const history = useHistory();

    const routeChange = () =>{ 
    let path = '/'; 
    history.push(path); 
    }
    
    
    return(
       
       <div class="LoginContainer">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>

                <input type="password" class="form-control" id="exampleInputPassword1"/>
              </div>


            </form>
            <div class="input-group">
              <span class="input-group-text">First and last name</span>
              <input type="text" aria-label="First name" class="form-control"/>
              <input type="text" aria-label="Last name" class="form-control"/>
            </div>
             <button type="submit" class="btn btn-success my-4">Create Account</button>
             <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onClick={routeChange}>Close</button>
            <button type="button" class="btn btn-primary" onClick={routeChange}>Save changes</button>
          </div>
      
            </div>

                
       
        
    
    )
    
    }