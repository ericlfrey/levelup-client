import { useEffect } from "react";
import { useState } from "react"
import { deleteGame, getAllGames } from "../../managers/GamesManager";
import GameCard from "./GameCard";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


export default function EventsList() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  const getAllTheGames = () => {
    getAllGames().then(setGames);
  }

  const handleDelete = (gameId) => {
    deleteGame(gameId).then(() => {
      getAllTheGames();
    })
  }

  useEffect(() => {
    getAllTheGames();
  }, [])

  return (
    <>
      <h1>GamesList</h1>
      <Button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
          navigate({ pathname: "/games/new" })
        }}
      >Register New Game</Button>
      <div className="d-flex flex-wrap justify-content-center">
        {games.map((game) => (
          <GameCard key={game.id} game={game} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  )
}
