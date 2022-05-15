import React from 'react'
import Review from './Review';
import { useHistory } from "react-router-dom";

import '../MyCSS1.css';
import im1 from '../images/im1.jpg';
import im2 from '../images/im2.jpg';
import im3 from '../images/im3.jpg';
import im4 from '../images/im4.jpg';
import im5 from '../images/im5.jpg';
import im6 from '../images/im6.jpg';

export default function Fashion() {


    const history = useHistory();

    const routeChange = () => {
        let path = `\addcomment`;
        history.push(path);
    }
    return (
        <section class="pt-5 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h3 class="mb-3">Top in Fashion </h3>
            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
            <div class="col-6 text-right">
            <a class="btn btn-primary mb-3 " data-bs-target="#carouselExampleIndicators2" role="button" data-bs-slide="prev">
                <i class="fa fa-arrow-left"></i>
                </a>
               
                <a class="btn btn-primary mb-3 " data-bs-target="#carouselExampleIndicators2" role="button" data-bs-slide="next">
                <i class="fa fa-arrow-right"></i>
                </a>
            </div>
            <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img onClick={routeChange} class="img-fluid" alt="100%x280" src={im1}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                    <img class="img-fluid" alt="100%x280" src={im2}/>                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                    <img class="img-fluid" alt="100%x280" src={im3}/>                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                    <img class="img-fluid" alt="100%x280" src={im4}/>                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                    <img class="img-fluid" alt="100%x280" src={im5}/>                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                    <img class="img-fluid" alt="100%x280" src={im6}/>                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
   
    )
}
