import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


import logoImage from '../assets/goFinderlogo.svg'
const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div  className="navLogo">
        <Link to="/">
          <img href="/" src={logoImage}></img></Link>
        </div>
      </div>
    </>
  )
}

export default NavBar
