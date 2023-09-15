import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../Navbar/Navbar.css';
import $ from 'jquery' ;

export default class Navbar extends Component {
  componentDidMount(){


      $(window).scroll(function(){
        console.log("Hh");
      let secOffset=$(".main").offset().top;
    
        let windowScroll=$(window).scrollTop();
        if (windowScroll<secOffset) {
           $("nav").css("padding","30px");
        }
        else{
          $("nav").css("padding","20px");

        }
     })
     } 
  

  
  render() {
    
    return <>
    
    <nav id='navId' className="navbar navbar-expand-lg position-sticky z-3 top-0 start-0 end-0">
  <div className="container">
    <Link className="navbar-brand h1 fs-2 fw-bold text-white" to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white fw-bold" aria-current="page" to="about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-bold" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-bold" to="contact">CONTACT</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  }
}
