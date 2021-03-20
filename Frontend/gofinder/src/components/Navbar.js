import React from 'react'
import './Navbar.css'

import logoImage from '../assets/goFinderlogo.svg'
const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div  className="navLogo">
          <img href="/" src={logoImage}></img>
        </div>
      </div>
    </>
  )
}

export default NavBar
