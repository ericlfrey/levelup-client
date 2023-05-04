import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <>
      <Card style={{ width: '18rem', margin: '5px' }}>
        <Card.Body>
          <Card.Title>{event.description}</Card.Title>
          <Card.Text>{event.date}</Card.Text>
          <Card.Text>{event.time}</Card.Text>
          <Card.Text>Game: {event.game.title}</Card.Text>
          <Link key={`event--${event.id}`} to={`/edit_event/${event.id}`} >
            <Card.Text>Edit</Card.Text>
          </Link>
        </Card.Body>
      </Card>
    </>

  )
}
