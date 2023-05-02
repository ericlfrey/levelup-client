import { Card } from "react-bootstrap";

export default function EventCard({ event }) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{event.description}</Card.Title>
          <Card.Text>{event.date}</Card.Text>
          <Card.Text>{event.time}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </>

  )
}
