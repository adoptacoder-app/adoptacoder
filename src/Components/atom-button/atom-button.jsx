import Button from 'react-bootstrap/Button';
import "./atom-button.css"

function GenericButton() {
  return (
    <>
      <Button variant="primary" className="button">Primary</Button>{' '}
    </>
  );
}

export default GenericButton;