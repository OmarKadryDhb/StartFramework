import React, { Component } from 'react'
import '../Home/Home.css'
import img from './images/avataaars.svg'
export default class Home extends Component {
  render() {
    return    <>
      <main id='Home-comp' className='main d-flex justify-content-center align-items-center'>
      <div className='container pt-2 d-flex justify-content-center align-items-center'>
        <div className="main-img">
          <img src={img} alt="" className="mb-3" />
            
            <h1 className='text-white'>START FRAMEWORK</h1>
            <i className='fa-solid fa-star fs-5 text-white mb-2'></i>
            <p className='text-center text-white'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        </div>
    </main>

    </>
  }
}
