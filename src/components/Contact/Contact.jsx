import React, { Component} from 'react'
import '../Contact/Contact.css';
export default class Contact extends Component {
  render() {
    return <>
     <main id='Contact-comp' className='main'>
      <div className='container mt-4'>
        <h1 className='text-center'>CONTACT SECTION</h1>
        <i className='fa-solid fa-star'></i>
        <input class="form-control form-control-lg mb-2 p-3" type="text" placeholder="userName" aria-label=".form-control-lg example"/>
        <input class="form-control form-control-lg mb-2 p-3" type="text" placeholder="userAge" aria-label=".form-control-lg example"/>
        <input class="form-control form-control-lg mb-2 p-3" type="text" placeholder="userEmail" aria-label=".form-control-lg example"/>
        <input class="form-control form-control-lg mb-2 p-3" type="text" placeholder="userEmail" aria-label=".form-control-lg example"/>
        <input class="form-control form-control-lg mb-2 p-3" type="text" placeholder="userPassword" aria-label=".form-control-lg example"/>
        <button className='btn text-white mt-1'>send Message</button>
      </div>
    </main>
    </>
  }
}
