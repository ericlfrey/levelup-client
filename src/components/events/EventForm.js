import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getAllGames } from "../../managers/GamesManager";
import "./Events.css"
import { createEvent, getEventById, updateEvent } from "../../managers/EventsManager";

export default function EventForm() {
  const initialState = {
    description: "",
    date: "",
    time: "",
    gameId: 0
  }
  const [formInput, setFormInput] = useState(initialState);
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const { eventId } = useParams();

  useEffect(() => {
    getAllGames().then(setGames);
    if (eventId) {
      getEventById(eventId).then((eventObj) => {
        const game = eventObj.game.id;
        setFormInput((prevState) => ({
          ...prevState,
          description: eventObj.description,
          date: eventObj.date,
          time: eventObj.time,
          gameId: game
        }));
      })
    }
  }, [eventId])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (eventId) {
      const payload = {
        id: eventId,
        description: formInput.description,
        date: formInput.date,
        time: formInput.time,
        game: parseInt(formInput.gameId)
      }
      updateEvent(payload).then(() => navigate("/events"));
    } else {
      const event = {
        description: formInput.description,
        date: formInput.date,
        time: formInput.time,
        game: parseInt(formInput.gameId)
      }
      createEvent(event)
        .then(() => navigate("/events"))
    }
  }

  return (
    <Form className="eventForm" onSubmit={handleSubmit}>
      <h2 className="eventForm__title">Register New Event</h2>
      <Form.Group >
        <Form.Label htmlFor="description">Description: </Form.Label>
        <Form.Control
          type="textarea"
          name="description"
          required
          autoFocus
          value={formInput.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group >
        <Form.Label htmlFor="date">Date: </Form.Label>
        <Form.Control
          type="date"
          name="date"
          required
          autoFocus
          value={formInput.date}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group >
        <Form.Label htmlFor="time">Time: </Form.Label>
        <Form.Control
          type="time"
          name="time"
          required
          autoFocus
          value={formInput.time}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Label htmlFor="time">Choose a Game: </Form.Label>
      <Form.Select
        name="gameId"
        onChange={handleChange}
        value={formInput.gameId}
        required
      >
        <option value="">Choose</option>
        {
          games.map((game) => (
            <option
              key={game.id}
              value={game.id}
            >
              {game.title}
            </option>
          ))
        }
      </Form.Select>
      <Button type="submit">{eventId ? 'Edit' : 'Create'}</Button>
    </Form>
  )
}
