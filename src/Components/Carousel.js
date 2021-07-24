import React from 'react';
import '../MyCSS.css';
import first from '../images/1off.jpg';
import second from '../images/2.jpg';
import third from '../images/3.png';




export default function Carousel() {

 
    return (
   
        <div  id="carouselExampleCaptions" class="wi carousel slide carousel-fade" data-bs-ride="carousel">
        <div  class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={first}class="imgclass d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h2 id="wel">Welcome to CourseFlix!!</h2>
              <p>Technology,News,Innovations and Trends.</p>
              <button class="btn1 btn btn-danger">Technology</button>
              <button class="btn1 btn btn-primary">Web Developement</button>
              <button class="btn1 btn btn-success">Tech Fun</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src={second} class="imgclass d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h2>Welcome to CourseFlix!!</h2>
              <p>Technology,News,Innovations and Trends.</p>
              <button class="btn1 btn btn-danger">Technology</button>
              <button class="btn1 btn btn-primary">Web Developement</button>
              <button class="btn1 btn btn-success">Tech Fun</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src={third} class="imgclass d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h2>Welcome to CourseFlix!!</h2>
              <p>Technology,News,Innovations and Trends.</p>
              <button class="btn1 btn btn-danger">Technology</button>
              <button class="btn1 btn btn-primary">Web Developement</button>
              <button class="btn1 btn btn-success">Tech Fun</button>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
     
    )
}
