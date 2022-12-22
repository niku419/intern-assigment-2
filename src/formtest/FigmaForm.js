import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import '../App.css'
import img from './pic.png'

function FigmaForm() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [details, setdetails] = useState()
  const [insurance, setInsurance] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name, 
      insurance,
      details,
      phone,
      email
    }
    console.log(data)
    setEmail("")
    setName("")
    setPhone("")
    setdetails("")
    setInsurance("Select Insurance")
  }

  return (
    <Container style={{height: "100vh"}} className="d-flex justify-content-center align-items-center">
      <Container className="d-flex justify-content-center align-items-center row main mt-3">
        <Container className="d-flex justify-content-between mt-3">
          <div className='heading'><h4>Request a <p>callback</p> from our team</h4></div>
          <div>
            <img src={img} alt="formImg"/>
          </div>
        </Container>
        <Form className="bootstrap-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3 d-flex justify-content-between">
            <Form.Control id="disabledTextInput" placeholder="+91"style={{width: "20%"}}/>
            <Form.Control type="number" placeholder="Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} style={{width: "80%"}} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select>
              <option>Select Insurance</option>
              <option value="1" onClick={() => setInsurance("Insurance 1")}>Insurance 1</option>
              <option value="2" onClick={() => setInsurance("Insurance 2")}>Insurance 2</option>
              <option value="3" onClick={() => setInsurance("Insurance 3")}>Insurance 3</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder='Details' as="textarea" rows={3} value={details} onChange={(e) => setdetails(e.target.value)}/>
          </Form.Group>
          <div>
            <Button className="color-btn" style={{width: "100%", paddingTop: "0.5rem"}} variant="primary" type="submit">
              <h6 className="fw-bold">REQUEST CALLBACK</h6>
            </Button>
          </div>
        </Form>
        {/* <div style={{color: "white"}}>This is lorem ipsum text. Don't read this.</div> */}
      </Container>
    </Container>
  )
}

export default FigmaForm