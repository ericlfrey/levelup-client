import { useEffect } from "react";
import { useState } from "react"
import { getAllEvents } from "../../managers/EventsManager";
import EventCard from "./EventCard";


export default function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents().then(setEvents);
  }, [])
  return (
    <>
      <h1>EventsList</h1>
      <div>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </>
  )
}
