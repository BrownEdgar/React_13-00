import React from 'react'
import navbar from './Navbar.module.css'
import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
        <nav className={navbar.nav}>
        <ul>
          <li><Link to={{
          pathname:"/",
          mydata:{name: "abcd"}
          }}>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/services'>Our Services</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    )
}