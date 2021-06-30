// type rfc
import React from 'react';
import c1 from '../images/bgf.jpg';
import c2 from '../images/2bg.jpg';
import c3 from '../images/bg4.png';
import c4 from '../images/bg3.png';


export default function Courses() {
    return (
        <div>
            <div class="container my-5">
                <div class="row mb-2">
                    <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary">World</strong>
                                <h3 class="mb-0"> Coding World</h3>
                                <div class="mb-1 text-muted">Nov 12</div>
                                <p class="card-text mb-auto">Global Coding Conferences all updates ,innovations,tactics,updates in coding
                                    world.</p>
                                <button class="btn1 btn btn-success">Enroll</button>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <img class="bd-placeholder-img" width="200" height="250" src={c1} alt=""/>

          </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column position-static">
                                    <strong class="d-inline-block mb-2 text-success">Design</strong>
                                    <h3 class="mb-0">Learn Designing</h3>
                                    <div class="mb-1 text-muted">Nov 11</div>
                                    <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <button class="btn1 btn btn-success">Enroll</button>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <img class="bd-placeholder-img" width="200" height="250" src={c2} alt=""/>
          </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container my-4">
                        <div class="row mb-2">
                            <div class="col-md-6">
                                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div class="col p-4 d-flex flex-column position-static">
                                        <strong class="d-inline-block mb-2 text-primary">World</strong>
                                        <h3 class="mb-0"> Data Science</h3>
                                        <div class="mb-1 text-muted">Nov 12</div>
                                        <p class="card-text mb-auto">Global Coding Conferences all updates ,innovations,tactics,updates in coding
                                            world.</p>
                                        <button class="btn1 btn btn-success">Enroll</button>
                                    </div>
                                    <div class="col-auto d-none d-lg-block">
                                        <img class="bd-placeholder-img" width="200" height="250" src={c3} alt=""/>

          </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div class="col p-4 d-flex flex-column position-static">
                                            <strong class="d-inline-block mb-2 text-success">Design</strong>
                                            <h3 class="mb-0">Learn Python</h3>
                                            <div class="mb-1 text-muted">Nov 11</div>
                                            <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional
                                                content.</p>
                                            <button class="btn btn-success btn1">Enroll</button>
                                        </div>
                                        <div class="col-auto d-none d-lg-block">
                                            <img class="bd-placeholder-img" width="200" height="250" src={c4} alt=""/>
          </div>
                                        </div>
                                    </div>
                                </div>

                                <hr/>
  </div>
                            </div>
                            )
}
