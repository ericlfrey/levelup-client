import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { createGame } from '../../managers/GamesManager.js'
import { getGameTypes } from "../../managers/GameTypesManager.js"
import { Button, Form } from "react-bootstrap"
import "./GameForm.css"
import { getGameById } from "../../managers/GamesManager.js"
import { updateGame } from "../../managers/GamesManager.js"


export const GameForm = () => {
  const initialState = {
    skillLevel: '',
    numberOfPlayers: '',
    title: "",
    maker: "",
    gameTypeId: 0
  }
  const [gameTypes, setGameTypes] = useState([]);
  const [currentGame, setCurrentGame] = useState(initialState);
  const navigate = useNavigate();
  const { gameId } = useParams();

  useEffect(() => {
    getGameTypes().then(setGameTypes);
    if (gameId) {
      getGameById(gameId).then((gameObj) => {
        const gameType = gameObj.game_type.id;
        setCurrentGame((prevState) => ({
          ...prevState,
          skillLevel: gameObj.skill_level,
          numberOfPlayers: gameObj.number_of_players,
          title: gameObj.title,
          maker: gameObj.maker,
          gameTypeId: gameType
        }))
      })
    }
  }, [gameId])

  const changeGameState = (domEvent) => {
    const { name, value } = domEvent.target;
    setCurrentGame((prevState) => ({
      ...prevState,
      [name]: value,
    }))

  }

  return (
    <Form className="gameForm">
      <h2 className="gameForm__title">Register New Game</h2>
      <Form.Group >
        <Form.Label htmlFor="title">Title: </Form.Label>
        <Form.Control type="text" name="title" required autoFocus
          value={currentGame.title}
          onChange={changeGameState}
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label htmlFor="maker">Maker: </Form.Label>
        <Form.Control type="text" name="maker" required
          value={currentGame.maker}
          onChange={changeGameState}
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label htmlFor="numberOfPlayers">Number of Players: </Form.Label>
        <Form.Control type="number" name="numberOfPlayers" min="1" required className="form-control"
          value={currentGame.numberOfPlayers}
          onChange={changeGameState}
        />
      </Form.Group>
      <Form.Group >
        <Form.Label htmlFor="skillLevel">Skill Level: </Form.Label>
        <Form.Control type="number" name="skillLevel" min="1" max="5" required className="form-control"
          value={currentGame.skillLevel}
          onChange={changeGameState}
        />
      </Form.Group>
      <Form.Group >
        <Form.Label>Select Game Type</Form.Label>
        <Form.Select
          name="gameTypeId"
          onChange={changeGameState}
          value={currentGame.gameTypeId}
          required
        >
          <option value=''>Choose</option>
          {
            gameTypes.map((gameType) => (
              <option
                key={gameType.id}
                value={gameType.id}
              >
                {gameType.label}
              </option>
            ))
          }
        </Form.Select>
      </Form.Group>

      <Button type="submit"
        onClick={evt => {
          // Prevent form from being submitted
          evt.preventDefault()

          if (gameId) {
            const payload = {
              id: gameId,
              maker: currentGame.maker,
              title: currentGame.title,
              number_of_players: parseInt(currentGame.numberOfPlayers),
              skill_level: parseInt(currentGame.skillLevel),
              game_type: parseInt(currentGame.gameTypeId)
            }
            updateGame(payload).then(() => navigate("/games"))
          } else {
            const game = {
              maker: currentGame.maker,
              title: currentGame.title,
              number_of_players: parseInt(currentGame.numberOfPlayers),
              skill_level: parseInt(currentGame.skillLevel),
              game_type: parseInt(currentGame.gameTypeId)
            }

            // Send POST request to your API
            createGame(game)
              .then(() => navigate("/games"))
          }
        }}
        className="btn btn-primary">{gameId ? 'Update' : 'Create'}</Button>
    </Form>
  )
}
