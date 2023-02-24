import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./atom-card.css"

function GenericCard({img, name, id}) {
  return (
    <Card className="card">
      <div className='cardImg'>
        <img src={img} alt="" />
      </div>
      <Card.Body className="cardBody">
        <Card.Title><h4>{name}</h4></Card.Title>
        <Card.Text>
         <h6>Developer</h6> 
        </Card.Text>
        <Card.Text>
          Full Stack
        </Card.Text>
        <Link to={`/detailsProfile/${id}`}>
          <Button variant="primary" className="button">¡Adóptame!</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default GenericCard;