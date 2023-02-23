import React from 'react'
import Form from 'react-bootstrap/Form';

function AtomStack() {
  return (
    <Form.Group className="mb-3" controlId="formBasicCheckbox" id="formChecks">
        <Form.Check type="checkbox" label="HTML" className="formChecksBg"/>
        <Form.Check type="checkbox" label="CSS"className="formChecksBg"/>
        <Form.Check type="checkbox" label="JavaScript" className="formChecksBg"/>
        <Form.Check type="checkbox" label="Php"className="formChecksBg"/>
        <Form.Check type="checkbox" label="Laravel" className="formChecksBg"/>
        <Form.Check type="checkbox" label="Vue"className="formChecksBg"/>
        <Form.Check type="checkbox" label="Angular" className="formChecksBg"/>
        <Form.Check type="checkbox" label="SQL"className="formChecksBg"/>
    </Form.Group>
  )
}

export default AtomStack
