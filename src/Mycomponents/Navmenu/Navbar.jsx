import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/service'>Service</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><a href='/gallery'>Gallery</a></li>
        </ul>

    
    </div>
  )
}

export default Navbar;