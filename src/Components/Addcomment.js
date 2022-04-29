import axios from 'axios';
import React, { useState, useRef } from "react";
import Footer from "./Footer";
import Review from './Review';
import rating from "./rating";
const Addcomment = (props) => {


  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");

  const handleChangename = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handleChangereview = (e) => {
    const review = e.target.value;
    setReview(review);
  };

  const handleChangestars = (e) => {
    const stars = e.target.value;
    setStars(stars);

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:4000/comment/create-comment`, { name, review, stars })
      .then(res => {
        console.log(res);
        console.log(res.data);

      })

    setName("");
  }
  return (
    <div>
      <div class="container my-4">
        <h1>Review Product</h1>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="name" name="name" onChange={handleChangename} class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Write comment.</label>
            <input name="review" onChange={handleChangereview} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="write review here" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Give stars</label>
            {/* <input name="stars" class="form-control" id="exampleFormControlInput2"  onChange={handleChangestars} type='text' /> */}
            <div class="txt-center">
              
                <div class="rating">
                  <input id="star5" name="star" type="radio" value="5" class="radio-btn hide" onChange={handleChangestars} />
                  <label for="star5" >☆</label>
                  <input id="star4" name="star" type="radio" value="4" class="radio-btn hide" onChange={handleChangestars} />
                  <label for="star4" >☆</label>
                  <input id="star3" name="star" type="radio" value="3" class="radio-btn hide" onChange={handleChangestars} />
                  <label for="star3" >☆</label>
                  <input id="star2" name="star" type="radio" value="2" class="radio-btn hide" onChange={handleChangestars} />
                  <label for="star2" >☆</label>
                  <input id="star1" name="star" type="radio" value="1" class="radio-btn hide" onChange={handleChangestars} />
                  <label for="star1" >☆</label>
                  <div class="clear"></div>
                </div>
             
            </div>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        <hr />
      </div>
      <Footer />
    </div>
  );
};
export default Addcomment;