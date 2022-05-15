import React from 'react';
import '../MyCSS1.css';
import c1 from '../images/img1.jpg';
import c2 from '../images/img2.jpg';
import c3 from '../images/img3.jpg';




export default function Carousel() {

 
    return (
   
      <div class="banner">
         <div class="title"> 
              <p>Welcome to ProRate !!</p>
              <h2>Authentic Product Rating Website</h2>
              <button class="btn1 btn btn-danger">Technology</button>
              <button class="btn1 btn btn-primary">Fashion</button>
              <button class="btn1 btn btn-success">Social</button>
          
      </div>
      <div class="b1">
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
            <img src={c1}class="imgclass d-block w-100" alt="..."/>
            
          </div>
          <div class="carousel-item">
            <img src={c2} class="imgclass d-block w-100" alt="..."/>
            
          </div>
          <div class="carousel-item">
            <img src={c3} class="imgclass d-block w-100" alt="..."/>
            
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
      </div>
      </div>
    )
}
