import React from 'react'
import './Navbar.css'

import logoImage from '../assets/goCometlogo2.png'
const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navLogo">
          <img src={logoImage}></img>
        </div>
      </div>
    </>
  )
}

export default NavBar
