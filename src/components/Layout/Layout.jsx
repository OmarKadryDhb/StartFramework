import React, { Component } from 'react'
import Navbar from './../Navbar/Navbar';
import '../Layout/Layout.css'
import { Link, Outlet } from 'react-router-dom';
export default class Layout extends Component {
  render() {
    return <>
    <Navbar/>
    <Outlet/>
    <footer className=''>
    <section className='around-web p-5'>
    <div className="container-fluid text-white">
    <div className="row g-3">  
    <div className="Location col-md-4 text-center">
    <h3>LOCATION</h3>
    <h6>2215 John Daniel Drive</h6>
    <h5>Clark, MO 65243</h5>
    </div>
    
    <div className="social col-md-4 text-center">
    <h2> Around the Web </h2>
    <div className='social-icons d-flex align-items-center justify-content-between w-50 m-auto'>
      <div className="card-icon border border-2 border-white rounded-circle d-flex justify-content-center align-items-center">
      <i className='fa-brands fa-facebook fs-4'></i>
      </div>
      <div className="card-icon border border-2 border-white rounded-circle d-flex justify-content-center align-items-center">
      <i className='fa-brands fa-twitter fs-5'></i>
      </div>
      <div className="card-icon border border-2 border-white rounded-circle d-flex justify-content-center align-items-center">
      <i className='fa-brands fa-linkedin fs-5'></i>
      </div>
      <div className="card-icon border border-2 border-white rounded-circle d-flex justify-content-center align-items-center">
      <i className='fa-solid fa-globe fs-4'></i>
      </div>
    </div>
    </div>

    <div className='about col-md-4 text-center'>
      <h2>ABOUT FREELANCER</h2>
      <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>

    </div>
    </div>
    </section>
    <section className='copy-right bg-dark text-white text-center p-4'>
      <span>Copyright © Your Website 2021</span>
    </section>
    </footer>
    </> 

}
}
