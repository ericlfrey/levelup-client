import { Card } from "react-bootstrap";

export default function EventCard({ event }) {
  return (
    <>
      <Card style={{ width: '18rem', margin: '5px' }}>
        <Card.Body>
          <Card.Title>{event.description}</Card.Title>
          <Card.Text>{event.date}</Card.Text>
          <Card.Text>{event.time}</Card.Text>
          <Card.Text>Game: {event.game.title}</Card.Text>
        </Card.Body>
      </Card>
    </>

  )
}
