import { getToken } from "../utils/getToken"

export const getGameTypes = async () => {
  const res = await fetch("http://localhost:8000/gametypes", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
  return await res.json()
}
