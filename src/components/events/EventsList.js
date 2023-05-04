import { useEffect } from "react";
import { useState } from "react"
import { deleteEvent, getAllEvents } from "../../managers/EventsManager";
import EventCard from "./EventCard";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function EventsList() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const getAllTheEvents = () => {
    getAllEvents().then(setEvents);
  }

  useEffect(() => {
    getAllTheEvents();
  }, [])
  const handleDelete = (eventId) => {
    deleteEvent(eventId).then(() => {
      getAllTheEvents();
    })
  }

  return (
    <>
      <h1>EventsList</h1>
      <Button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
          navigate({ pathname: "/events/new" })
        }}
      >Register New Event</Button>
      <div className="d-flex flex-wrap justify-content-center">
        {events.map((event) => (
          <EventCard key={event.id} event={event} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  )
}
