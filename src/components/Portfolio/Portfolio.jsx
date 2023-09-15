import React, { Component } from 'react'
import '../Portfolio/Portfolio.css'
import img1 from '../Portfolio/images/poert1.png';
import img2 from '../Portfolio/images/port2.png';
import img3 from '../Portfolio/images/port3.png';
import $ from 'jquery' ;

export default class Portfolio extends Component {
  componentDidMount(){
    $(".card").click(function (e) {
      let imgSrc=e.target.getAttribute('src');
      $(".big-layer").css("dispaly","block");
      $(".main-img img").css("src",`${imgSrc}`)
  })
  }
  render() {
    return <>
      <section className='big-layer d-none position-fixed z-1 bg-opacity-50 start-0 end-0 h-100 bg-info'>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="main-img d-flex justify-content-center">
          <img src="" alt="" className='w-75' />
        </div>
      </div>  
      </section>    
      <section class="main portfolio mb-5 mt-3" id="work">
      <div class="section-header">
        <h1 class="fw-bold">PORTFOLIO COMPONENT</h1>
        <i className='fa-solid fa-star mb-1'></i>
      </div>
      
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-5 ">
          {/*  1  */}
          <div class="col-lg-4 col-md-6 ">
          <div class="card border-0 shadow-sm"> 
          <div class="card-img overflow-hidden position-relative">
              <img src={img1} class="card-img-top" alt="..."/>
              <div className="layer h-100 w-100 position-absolute">
                <div className="layer-content h-100 d-flex justify-content-center align-items-center">
                  <i className='fa-solid fa-plus'></i>
              </div>
        </div>
        </div>
        </div>
        </div>
      {/* 2 */}
      <div class="col-lg-4 col-md-6 ">
          <div class="card border-0 shadow-sm"> 
          <div class="card-img overflow-hidden position-relative">
              <img src={img2} class="card-img-top" alt="..."/>
              <div className="layer h-100 w-100 position-absolute">
                <div className="layer-content h-100 d-flex justify-content-center align-items-center">
                  <i className='fa-solid fa-plus'></i>
              </div>
        </div>
        </div>
        </div>
        </div>
      {/*  3  */}
      <div class="col-lg-4 col-md-6 ">
          <div class="card border-0 shadow-sm"> 
          <div class="card-img overflow-hidden position-relative">
              <img src={img3} class="card-img-top" alt="..."/>
              <div className="layer h-100 w-100 position-absolute">
                <div className="layer-content h-100 d-flex justify-content-center align-items-center">
                  <i className='fa-solid fa-plus'></i>
              </div>
        </div>
        </div>
        </div>
        </div>
      {/* 4  */}
      <div class="col-lg-4 col-md-6 ">
          <div class="card border-0 shadow-sm"> 
          <div class="card-img overflow-hidden position-relative">
              <img src={img1} class="card-img-top" alt="..."/>
              <div className="layer h-100 w-100 position-absolute">
                <div className="layer-content h-100 d-flex justify-content-center align-items-center">
                  <i className='fa-solid fa-plus'></i>
              </div>
        </div>
        </div>
        </div>
        </div>
      {/*  5  */}
      <div class="col-lg-4 col-md-6 ">
          <div class="card border-0 shadow-sm"> 
          <div class="card-img overflow-hidden position-relative">
              <img src={img2} class="card-img-top" alt="..."/>
              <div className="layer h-100 w-100 position-absolute">
                <div className="layer-content h-100 d-flex justify-content-center align-items-center">
                  <i className='fa-solid fa-plus'></i>
              </div>
        </div>
        </div>
        </div>
        </div>
      {/* 6 */}
      <div class="col-lg-4 col-md-6 ">
          <div class="card border-0 shadow-sm"> 
          <div class="card-img overflow-hidden position-relative">
              <img src={img3} class="card-img-top" alt="..."/>
              <div className="layer h-100 w-100 position-absolute">
                <div className="layer-content h-100 d-flex justify-content-center align-items-center">
                  <i className='fa-solid fa-plus'></i>
              </div>
        </div>
        </div>
        </div>
        </div>
    </div>
       
    </div>
      </section>
    </>
  }
}
