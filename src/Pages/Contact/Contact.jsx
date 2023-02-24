import AtomNavbar from '../../Components/atom-navbar/AtomNavbar'
import CoderSnippet from '../../Components/atom-coderSnippet/atom-coderSnippet';
import { Link, useParams } from 'react-router-dom';import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ContactStyle.css'
import React, { useState, useEffect } from 'react';



function Contact() {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://63f6400d59c944921f706c26.mockapi.io/api/user/${id}`)
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => console.error(error));
  }, [id]);


  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    
    <>
     <AtomNavbar/>
    <main>
    <div className='titleContact'>
      <h1>¿Quieres Hablar conmigo? </h1>
    </div>
    <div className='CenterSnippet'>
      <CoderSnippet className="coder-card"
        img={item.avatar} 
        firstName={item.firstName} 
        lastName={item.lastName} 
        area={item.backEnd ? "Backend Developer" : item.frontEnd ? "Frontend developer" : "Full Stack Developer"} 
        experience={item.junior ? "Junior Developer" : item.senior ? "Senior Developer" : "Mid Developer"}
        github={item.github}
      />
    </div>
    
    <Form className='formCenter'>  
      <Form.Group className="mb-3 contactForm" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} className="placeholderStyle inputForm"
          placeholder="Escribe aquí tu mensaje"/>
      </Form.Group>
    </Form>
    <div className='centerButton'>
      <Link to='/'>
        <Button variant="primary" type="submit" className="submitButton"> Envia el mensaje  </Button>
      </Link>
    </div>
    
    </main>
    </>
    
  )
}

export default Contact
