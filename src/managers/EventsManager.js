import { getToken } from "../utils/getToken"

export const getEventById = (id) => {
  return fetch(`http://localhost:8000/events/${id}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const addEvent = (event) => {
  return fetch("http://localhost:8000/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    },
    body: JSON.stringify(event)
  })
    .then(res => res.json())
}

export const getAllEvents = () => {
  return fetch("http://localhost:8000/events", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const searchEventsByOrganizer = (organizer) => {
  return fetch(`http://localhost:8000/events?organizer=${organizer}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const updateEvent = (event) => {
  return fetch(`http://localhost:8000/events/${event.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    },
    body: JSON.stringify(event)
  })
}

export const deleteEvent = (id) => {
  return fetch(`http://localhost:8000/events/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${getToken()}`
    }
  }
  )
}
