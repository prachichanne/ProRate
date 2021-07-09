import React from 'react';
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

export default function About(){
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
                               <NavLink exact activeClassName="nav-link" to ="/about" class="nav-link active">About Us</NavLink>
                                
                            </li>
                            <li class="nav-item">
                            <NavLink exact activeClassName="nav-link" to ="/contact" class="nav-link ">Contact Us</NavLink>
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
   
   <div class="container my-4 ">
        <div class="row featurette d-flex justify-content-center align-items-center ">
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">It's all started with the Coolcoders initiative. </font>
                    </font><span class="text-muted">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Credit goes to Miss.Chinmayi S.Alshetty</font>
                        </font>
                    </span>
                </h2>
                <p class="lead">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">Every Software Engineering student should always have to be updated with the technologies and innovations of our world of coding.
                        Reading Blogs can Help you out.</font>
                    </font>
                </p>
            </div>
            <div class="col-md-5 order-md-2">
             <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto img-fluid" width="500"
             height="500"src="/1a.jpg" alt=""/>

            </div>
        </div>
    </div>
    <div class="container my-4">
        <div class="row featurette d-flex justify-content-center align-items-center ">
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">We started from Lockdown,</font>
                    </font><span class="text-muted">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Lol it's funny but yeah in 2020 March. </font>
                        </font>
                    </span>
                </h2>
                <p class="lead">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">When we all are at home we really need something that can change our mind perspective to motivate us about our future, Industry So Here We Are.</font>
                    </font>
                </p>
            </div>
            <div class="col-md-5 order-md-1">
                <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto img-fluid" width="500"
                height="500"src="2a.jpg" alt=""/>
   

            </div>
        </div>
    </div>
    <div class="container my-4">
        <div class="row featurette d-flex justify-content-center align-items-center ">
            <div class="col-md-7 order-md-1">
                <h2 class="featurette-heading">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">Oh yeah,It's fine to be Beginner We all Are Beginner at some point.  </font>
                    </font><span class="text-muted">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">But We gare with you.</font>
                        </font>
                    </span>
                </h2>
                <p class="lead">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">When we laugh or cry, we display our emotions, allowing
                            others to peek into our mind while "reading" our faces based on changes in key facial
                            components such as the eyes, eyebrows, eyelids, nose, and lips.</font>
                    </font>
                </p>
            </div>
            <div class="col-md-5 order-md-2">
                <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto img-fluid" width="500"
                height="500"src="3a.jpg" alt=""/>
   

            </div>
        </div>

        <hr/>
    </div>
   <Footer/>
   </>
    

)

}