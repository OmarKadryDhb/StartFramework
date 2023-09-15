import React, { Component } from 'react'
import '../About/About.css';
export default class About extends Component {
  render() {
    return <>
    
          <main className='main d-flex justify-content-center align-items-center'>
      <div className='container'>
        <div className="main-about d-flex justify-content-center align-items-center">
            <div className="inner">
            <h1 className='text-white fw-bold'>ABOUT COMPONENT</h1>
            <i className='fa-solid fa-star fs-5 text-white mb-2'></i>
        </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-6">
            <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          
        </div>
        </div>
    </main>

    </>
  }
}
