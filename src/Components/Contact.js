import React from 'react';
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

export default function Contact(){
    const history = useHistory();

    const routeChange = () =>{ 
    let path = `\login`; 
    history.push(path); 
    }
    const routeChange1 = () =>{ 
        let path1= '/register'; 
        history.push(path1); 
        }
return(
    <>
     <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">CourseFlix</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <NavLink exact activeClassName="nav-link" to ="/" class="nav-link">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Make me Instructor</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Courses
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                               <NavLink exact activeClassName="nav-link" to ="/about" class="nav-link">About Us</NavLink>
                                
                            </li>
                            <li class="nav-item">
                            <NavLink exact activeClassName="nav-link" to ="/contact" class="nav-link active">Contact Us</NavLink>
                            </li>


                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div class="mx-2">
                            <button class="btn btn-success"  onClick={routeChange}>
                                Login
                            </button>
                            <button class="btn btn-danger signupbutton" onClick={routeChange1}>
                                Register

                            </button>

                           
                               
                       </div>        
                    </div>
                </div>
            </nav>
        </div>
    
     <div class="container my-4">
     <h1>Contact Us</h1>
     <form>
         <div class="mb-3">
             <label for="exampleFormControlInput1" class="form-label">Email address</label>
             <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
         </div>
         <div class="mb-3">
             <label for="exampleFormControlTextarea1" class="form-label">Write your Query Here.</label>
             <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
         </div>

         <div class="mb-3 form-check">
             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
             <label class="form-check-label" for="exampleCheck1">I am agree with terms and conditions.</label>
         </div>
         <button type="submit" class="btn btn-primary">Submit</button>
     </form>

     <hr/>
 </div>
<Footer/>
   </>
    
   
)

}