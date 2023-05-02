import { useEffect } from "react";
import { useState } from "react"
import { getAllGames } from "../../managers/GamesManager";
import GameCard from "./GameCard";


export default function EventsList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllGames().then(setGames);
  }, [])
  return (
    <>
      <h1>GamesList</h1>
      <div>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  )
}
