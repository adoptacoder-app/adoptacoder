import './form.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdoptMeForm() {
  return (
    <div className="form">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Selecciona tu foto de perfil</Form.Label>
        <Form.Control type="file" />
        <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="¿Lucía? ¿Marcos?"
          />
        <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="¿Pérez?"
          />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Tranquil@, no compartiremos tu mail con nadie más.<br></br>
        </Form.Text>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        ¡Adóptame!
      </Button>
    </Form>
    </div>
  );
}

export default AdoptMeForm;