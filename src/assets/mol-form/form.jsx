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
        <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="¿Lucía? ¿Marcos?"
            className="placeholderStyle"
          />
        <Form.Label>Apellidos</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="¿Pérez?"
            className="placeholderStyle"
          />
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className="placeholderStyle"/>
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" className="placeholderStyle"/>
        <Form.Label>Github</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Si tienes perfil en Github, ¡compártelo!"
            className="placeholderStyle"
          />
      </Form.Group>

      <GenericDropdown className="boton" title="¿Qué experiencia tienes?" option1="Junior" option2="Mid" option3="Senior"/><br></br>
      <GenericDropdown title="¿Qué tipo de coder eres?" option1="Frontend" option2="Backend" option3="Fullstack"/><br></br>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Háblanos de ti</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Utilizo metodologías ágiles" />
        <Form.Check type="checkbox" label="Controlo de testing (TDD...)" />
      </Form.Group>
      <div className="submitButtonContainer">
      <Button variant="primary" type="submit" className="submitButton">
        ¡Adóptame!
      </Button>
      </div>
    </Form>
    </div>
  );
}

export default AdoptMeForm;