import { Button, Card } from "react-bootstrap";
import { deleteEvent, joinEvent, leaveEvent } from "../../managers/EventsManager";

export default function EventCard({ event, refreshPage }) {
  const join = () => {
    joinEvent(event.id).then(() => refreshPage());
  }
  const leave = () => {
    leaveEvent(event.id).then(() => refreshPage());
  }
  const handleDelete = () => {
    deleteEvent(event.id).then(() => {
      refreshPage();
    })
  }

  return (
    <>
      <Card style={{ width: '18rem', margin: '5px' }}>
        <Card.Body>
          <Card.Title>{event.description}</Card.Title>
          <Card.Text>{event.date}</Card.Text>
          <Card.Text>{event.time}</Card.Text>
          <Card.Text>Game: {event.game.title}</Card.Text>
          <Card.Link href={`/edit_event/${event.id}`}>Edit</Card.Link>
          <Card.Link onClick={handleDelete} href="#">Delete</Card.Link>
          <Card.Body>
            {
              event.joined ?
                <Button className="btn-danger" onClick={leave}>Leave</Button>
                : <Button className="btn-success" onClick={join}>Join</Button>
            }
          </Card.Body>
        </Card.Body>
      </Card>
    </>

  )
}
