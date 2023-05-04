import { getToken } from "../utils/getToken"

export const getEventById = async (id) => {
  const res = await fetch(`http://localhost:8000/events/${id}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
  return await res.json()
}

export const createEvent = async (event) => {
  const res = await fetch("http://localhost:8000/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    },
    body: JSON.stringify(event)
  })
  return await res.json()
}

export const getAllEvents = async () => {
  const res = await fetch("http://localhost:8000/events", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
  return await res.json()
}

export const searchEventsByOrganizer = async (organizer) => {
  const res = await fetch(`http://localhost:8000/events?organizer=${organizer}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
  return await res.json()
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

export const leaveEvent = eventId => {
  // TODO: Write the DELETE fetch request to leave an event
  return fetch(`http://localhost:8000/events/${eventId}/leave`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${getToken()}`
    }
  }
  )
}

export const joinEvent = (eventId) => new Promise((resolve, reject) => {
  fetch(`http://localhost:8000/events/${eventId}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${getToken()}`
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
