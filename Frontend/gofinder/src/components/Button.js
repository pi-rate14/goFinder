import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <>
      <div className="primaryBtn">
        <div className="btnText">{props.btnValue}</div>
      </div>
    </>
  )
}

export default Button
