import './form.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GenericDropdown from '../atom-dropdown/atom-dropdown';

function AdoptMeForm() {
  return (
    <div className="form">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Selecciona tu foto de perfil</Form.Label>
        <Form.Control type="file" className="placeholderStyle"/>
        <br></br>
        <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="¿Lucía? ¿Marcos?"
            className="placeholderStyle"
          />
           <br></br>
        <Form.Label>Apellidos</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="¿Pérez?"
            className="placeholderStyle"
          />
           <br></br>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className="placeholderStyle"/>
        <br></br>
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" className="placeholderStyle"/>
        <br></br>
        <Form.Label>Github</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Si tienes perfil en Github, ¡compártelo!"
            className="placeholderStyle"
          />
      </Form.Group>
      <br></br>
      <GenericDropdown className="boton" title="¿Qué experiencia tienes?" option1="Junior" option2="Mid" option3="Senior"/><br></br>
      <GenericDropdown title="¿Qué tipo de coder eres?" option1="Frontend" option2="Backend" option3="Fullstack"/><br></br>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Háblanos de ti</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <br></br>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Utilizo metodologías ágiles" /><br></br>
        <Form.Check type="checkbox" label="Controlo de testing (TDD...)" />
      </Form.Group>
      <br></br>
      <div className="submitButtonContainer">
      <Button variant="primary" type="submit" className="submitButton">
        ¡Adóptame!
      </Button>
      </div>
      <br></br>
    </Form>
    </div>
  );
}

export default AdoptMeForm;