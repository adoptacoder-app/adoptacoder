import './form.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GenericDropdown from "../../Components/atom-dropdown/atom-dropdown"
import { Icon } from '@iconify/react';

function AdoptMeForm() {
  return (
    <div className="form">
        <div className="avatarContainer">
            <div className="avatar"><Icon icon="material-symbols:person" width="60%"/></div>
        </div>
        <br></br>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Selecciona tu foto de perfil</Form.Label>
        <Form.Control type="file" className="placeholderStyle"/>
        <br></br>
        <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            className="placeholderStyle"
          />
           <br></br>
        <Form.Label>Apellidos</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellidos"
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
        <Form.Label>¡Preséntate!</Form.Label>
        <Form.Control as="textarea" rows={3} className="placeholderStyle"
          placeholder="¡Conquista a las empresas!"/>
      </Form.Group>
      <h5>Tu stack</h5>
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
    <br></br>
    <h5>Otras características</h5>
    <Form.Group className="mb-3" controlId="formBasicCheckbox" id="formChecks">
        <Form.Check type="checkbox" label="Metodologías Ágiles" className="formChecksBg"/>
        <Form.Check type="checkbox" label="Testing"className="formChecksBg"/>
    </Form.Group>
    <br></br>
      <div className="submitButtonContainer">
      <Button variant="primary" type="submit" className="submitButton">
        ¡Adóptame!
      </Button>
      </div>
    </Form>
    <br></br>
    </div>
  );
}

export default AdoptMeForm;