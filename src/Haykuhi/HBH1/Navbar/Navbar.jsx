import React from 'react'
import navbar from './Navbar.module.css'
import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
        <nav className={navbar.nav}>
        <ul>
          <li><Link to={{
<<<<<<< HEAD:src/Haykuhi/HBH1/Navbar/Navbar.jsx
          pathname:"/",
          mydata:{name: "abcd"}
=======
            pathname:"/",
            mydata:{name: "abcd"}
>>>>>>> 20241f3bb1ccfe958f9b3147d53e9f5db776846f:src/Henrik/Navbar/Navbar.jsx
          }}>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/services'>Our Services</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    )
}