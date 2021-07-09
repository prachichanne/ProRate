import React from 'react';
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../MyCSS.css';

export default function Header() {

    const mystyle = {
        textDecoration:'none',
      };
    const mystyle1 = {
        width:"80px",
        height:"50px",
        backgroundcolor:"#3FC1C9",
        marginright: "2px",
    };
    const history = useHistory();

const routeChange = () =>{ 
let path = `\login`; 
history.push(path); 
}
const routeChange1 = () =>{ 
    let path1= '/register'; 
    history.push(path1); 
    }
    return (
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
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Make me Instructor </a>
                            </li>

                            <li className="nav-item dropdown has-megamenu">
                                <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Courses
                                </a>
                                <div className="dropdown-menu megamenu" role="menu">
                                    <div className="row g-3">
                                        <div className="col-lg-3 col-6">
                                            <div className="col-megamenu">
                                            <h6 class="title">Academics</h6>
                                                <ul class="list-unstyled">
                                                <li><a  style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                    <li><a  style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                </ul>

                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6">
                                            <div className="col-megamenu">
                                            <h6 class="title">Data Analysis</h6>
                                                <ul class="list-unstyled">
                                                <li><a  style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                    <li><a  style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                </ul>

                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6">
                                            <div className="col-megamenu">
                                            <h6 class="title">Buissness</h6>
                                                <ul class="list-unstyled">
                                                    <li><a  style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                    <li><a  style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                </ul>

                                            </div>
                                        

                                    </div>
                                    <div className="col-lg-3 col-6">
                                            <div className="col-megamenu">
                                            <h6 class="title">Programming</h6>
                                                <ul class="list-unstyled">
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>
                                                    <li><a style={mystyle}  >Option1</a></li>

                                                </ul>

                                            </div>
                                        

                                    </div>
                                    </div>
                                    </div>
                                    
                                
                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" >Action</a></li>
                                    <li><a className="dropdown-item" >Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" >Something else here</a></li>
                                </ul> */}
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Courses
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            <li class="nav-item">
                               <NavLink exact activeClassName="nav-link" to ="/about" class="nav-link">About Us</NavLink>
                                
                            </li>
                            <li class="nav-item">
                            <NavLink exact activeClassName="nav-link" to ="/contact" class="nav-link">Contact Us</NavLink>
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
    )
}
