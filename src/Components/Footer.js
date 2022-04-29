import React from 'react'

export default function Footer() {
  return (
   
         
    <footer class="bg-dark text-center text-white">
      <div class="container p-4">
    <section class="mb-4">
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-google"></i></a>
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-instagram"></i></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-github"></i></a>
    </section>

    <section class="">
      <form action="">
        <div class="row d-flex justify-content-center">
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div class="col-md-5 col-12">
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example21"placeholder='Email address' class="form-control" />
            </div>
          </div>
         
          <div class="col-auto">
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
    <section class="mb-4">
    
    </section>
    <section class="">
      {/* <!--Grid row--> */}
      <div class="row">
        {/* <!--Grid column--> */}
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Fashion</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Amazon</a>
            </li>
            <li>
              <a href="#!" class="text-white">Flipkart</a>
            </li>
           
          </ul>
        </div>
        {/* <!--Grid column-->

        <!--Grid column--> */}
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Mobiles</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">OPPO</a>
            </li>
            <li>
              <a href="#!" class="text-white">Apple</a>
            </li>
            
          </ul>
        </div>
        {/* <!--Grid column-->

        <!--Grid column--> */}
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Books</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Literature</a>
            </li>
            <li>
              <a href="#!" class="text-white">Academics</a>
            </li>
           
          </ul>
        </div>
        {/* <!--Grid column-->

        <!--Grid column--> */}
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Music</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Ear Buds</a>
            </li>
            <li>
              <a href="#!" class="text-white">BlueTooth Speakers</a>
            </li>
           
          </ul>
        </div>
        {/* <!--Grid column--> */}
      </div>
    </section>
    <div class="text-center p-3">
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
    
      </div>
      </footer>
  )
}
