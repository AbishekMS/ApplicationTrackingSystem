import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Home from './Home'
const Navbar = () => {
    
  return (
    <div className="header">
    <nav>
    <div className='logo'>ATS   </div>
    <div className='menu'>
    <ul>
  <li>  <Link to="/">Home</Link></li>
  <li>   <Link to="/applicantlogin">Login</Link></li>
  <li>   <Link to="/hrlogin">SignUp</Link> </li>
    </ul>
    </div>
    </nav>
    <div className='banner-text'>
       
<Home/>
    </div>
    </div>
  )
}

export default Navbar;