import React, { useState } from 'react'
import './InputComponent.css'
import { FormControl, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const InputComponent = (props) => {
  var Data = props.inpContent,
    MakeItem = function (X) {
      return <option>{X}</option>
    }

  const [select, setSelect] = useState('')
  return (
    <>
      <div className="inpContainer">
        <div className="inpLabel">
          <span>{props.inpLabel}</span>
        </div>
        <Form.Group>
          <Form.Control
            as="select"
            custom
            onChange={this.onChangeColor.bind(this)}
          >
            {Data.map(MakeItem)}
          </Form.Control>
        </Form.Group>
      </div>
    </>
  )
}

export default InputComponent
