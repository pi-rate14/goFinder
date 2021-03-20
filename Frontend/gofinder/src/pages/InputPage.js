import React, { Component, useState, useEffect } from 'react'
//import InputComponent from '../components/InputComponent'
import NavBar from '../components/Navbar'
import '../components/InputComponent.css'
import { FormControl, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { categories, companies, positions } from './Data'
import OutputPage from './OutputPage'

function InputPage() {
  const [category, setCategory] = useState(categories[0])
  const [company, setCompany] = useState([companies[category]])
  console.log(category)
  console.log(companies[category])
  return (
    <>
      <NavBar />
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
      <OutputPage category={category} company={company} />
    </>
  )
}

function InputComponent(props) {
  var Data = props.inpContent,
    MakeItem = function (X) {
      return <option>{X}</option>
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
          <Form.Control as="select" onChange={handleChange}>
            {Data.map(MakeItem)}
          </Form.Control>
        </Form.Group>
      </div>
    </>
  )
}

export default InputPage
