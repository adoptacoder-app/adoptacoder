import React from 'react'
import AtomNavbar from '../../Components/atom-navbar/AtomNavbar'
import Card from '../../Components/atom-card/atom-card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ContactStyle.css'


function Contact() {
  return (
    <>
    <header>
     <AtomNavbar/>
     <h1>¿Quieres Hablar conmigo? </h1>
    </header>
    <main>

    <Card/>
    <Form>  
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} className="placeholderStyle"
          placeholder="Escribe aquí tu mensaje"/>
      </Form.Group></Form>
  

    <Button variant="primary" type="submit" className="submitButton"> Envia el mensaje  </Button>
    </main>
    </>
    
  )
}

export default Contact
