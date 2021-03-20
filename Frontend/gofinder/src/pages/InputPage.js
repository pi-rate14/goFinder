import React, { Component, useState, useEffect } from 'react'
//import InputComponent from '../components/InputComponent'
import NavBar from '../components/Navbar'
import '../components/InputComponent.css'
import { FormControl, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { categories, companies, positions } from './Data'
import OutputPage from './OutputPage'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import img1 from '../assets/Frame.png'
import img2 from '../assets/Frame2.png'
import img3 from '../assets/Vector.png'

function InputPage() {
  const [category, setCategory] = useState(categories[0])
  const [company, setCompany] = useState([companies[category]])
  console.log(category)
  console.log(company)
  console.log(companies[category])
  return (
    <>
      <NavBar />
      <div className="backgroundSvg1">
        <img src={img1}></img>
      </div>
      <div className="backgroundSvg2">
        <img src={img2}></img>
      </div>
      <div className="backgroundSvg3">
        <img src={img3}></img>
      </div>
      <div className="dropdownContainer">
        <InputComponent
          inpLabel="Category"
          inpContent={categories}
          passData={setCategory}
        />
        <InputComponent
          inpLabel="Company"
          inpContent={companies[category]}
          passData={setCompany}
        />
      </div>

      <OutputPage company={company}></OutputPage>
    </>
  )
}

function InputComponent(props) {
  var Data = props.inpContent,
    MakeItem = function (X) {
      return <option className="option">{X}</option>
    }

  const [select, setSelect] = useState(props.inpContent[0])

  const handleChange = (e) => {
    props.passData(e.target.value)
  }

  return (
    <>
      <div className="inpContainer">
        <div className="inpLabel">
          <span>{props.inpLabel}</span>
        </div>
        <Form.Group>
          <Form.Control
            as="select"
            onClick={handleChange}
            className="inpDropdown"
          >
            {Data.map(MakeItem)}
          </Form.Control>
        </Form.Group>
      </div>
    </>
  )
}

export default InputPage
