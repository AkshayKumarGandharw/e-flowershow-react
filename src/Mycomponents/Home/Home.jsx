import React from 'react';
import './home.css';
import { Bootstrap } from "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className='Home'>
      <div className='form-div'>
        <h2>Login Form</h2>
        <form className='form'>
          <div className='mt-3'>
            <label>User Name:</label>
            <input type="text" className='form-control' />
          </div>
          <div className='mt-3'>
            <label>Password :</label>
            <input type="password" className='form-control' />
          </div>
          <div className='mt-3'>
            <button className='btn btn-primary form-control'>Login</button>
          </div>
          <div className='mt-3'>
            <button className='btn btn-danger form-control'>Logout</button>
          </div>
          <div className='mt-3'>
            <a href='#'><h6>Register Now</h6></a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home;