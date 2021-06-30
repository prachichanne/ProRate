import React from 'react';
import fb from '../images/fb.jpg';
import insta from '../images/insta.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';


export default function Footer() {
    return (
    
    <footer class="container">
    <p class="float-end"><a href="#">
        <font style={"vertical-align: inherit;"}>
          <font style={"vertical-align: inherit;"}>back to top</font>
        </font>
      </a></p>
    
    <ul class="con">
      <li><a href="https://facebook.com" target="_blank"><img src={fb} alt=""/></a></li>
      <li><a href="https://facebook.com" target="_blank"><img src={insta}alt=""/></a></li>
      <li><a href="https://facebook.com" target="_blank"><img src={twitter} alt=""/></a></li>
      <li><a href="https://facebook.com" target="_blank"><img src={linkedin} alt=""/></a></li>

    </ul>
    <font style={"vertical-align: inherit;"}>
      <font style={"vertical-align: inherit;"}>© 2020–2021 CoolCoders, Inc. </font>
      <font style={"vertical-align: inherit;"}>· </font>
    </font><a href="#"/>
      <font style={"vertical-align: inherit;"}/>
  </footer>
  
        
    );
}
