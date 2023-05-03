import { getToken } from "../utils/getToken"

export const getGameById = async (id) => {
  const res = await fetch(`http://localhost:8000/games/${id}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
  return await res.json()
}

export const createGame = async (game) => {
  const res = await fetch("http://localhost:8000/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    },
    body: JSON.stringify(game)
  })
  return await res.json()
}

export const getAllGames = async () => {
  const res = await fetch("http://localhost:8000/games", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
  return await res.json()
}

export const searchGamesByStatus = async (status) => {
  const res = await fetch(`http://localhost:8000/games?status=${status}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
  return await res.json()
}

export const updateGame = (game) => {
  return fetch(`http://localhost:8000/games/${game.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    },
    body: JSON.stringify(game)
  })
}

export const deleteGame = (id) => {
  return fetch(`http://localhost:8000/games/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${getToken()}`
    }
  }
  )
}
