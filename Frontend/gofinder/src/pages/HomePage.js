import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import logoImage from '../assets/goFinderlogo.svg'
const HomePage = () => {
  return (
    <>
      <svg
        className="rightCircle"
        width="354"
        height="325"
        viewBox="0 0 354 325"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.5" cx="218" cy="107" r="218" fill="#87C8FF" />
      </svg>
      <svg
        className="leftCircle"
        width="213"
        height="426"
        viewBox="0 0 213 426"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.5" cy="213" r="213" fill="#D2EAFF" />
      </svg>
      <div className="DashboardContainer">
        <div className="logoContainer">
          <img className="logoImage" src={logoImage} alt="logo"></img>
          <div className="btnContainer">
            <Link to="/input">
              <Button btnValue="Start Searching"></Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
