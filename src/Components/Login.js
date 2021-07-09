import React from 'react';
import { useHistory } from "react-router-dom";
import '../MyCSS.css';

export default function Login(){
    
        const history = useHistory();
    
        const routeChange = () =>{ 
        let path = '/'; 
        history.push(path); 
        }
return(


     
    <div className="login" class="LoginContainer">

         <h3>Welcome Back ! Login To Continue..</h3>
               <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      <div style={{color:"white"}}id="emailHelp" class="form-text">We'll never share your email with anyone else.*</div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                      <label class="form-check-label" for="exampleCheck1">Login me</label>
                    </div>
                    <button style={{backgroundColor:"green"}} type="submit" class="btn btn-primary">Submit</button>
                  
                </form>
                
                <div class="modal-footer">
                  <button style={{backgroundColor:"red"}} type="button" class="btn btn-success" onClick={routeChange}>Close</button>

                </div>
            
                
   
    
    </div>

)

}

