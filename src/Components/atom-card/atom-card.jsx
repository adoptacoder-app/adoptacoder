import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./atom-card.css"

function GenericCard({img, name, bio, id}) {
  return (
    <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={img} />
      <Card.Body className="cardBody">
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Developer
        </Card.Text>
        <Card.Text>
          {bio}
        </Card.Text>
        <Link to={`/detailsProfile/${id}`}><Button variant="primary" className="button">¡Adopta!</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default GenericCard;