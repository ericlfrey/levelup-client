import { Card } from "react-bootstrap";

export default function GameCard({ game }) {
  return (
    <>
      <Card style={{ width: '18rem', margin: '5px' }}>
        <Card.Body>
          <Card.Title>{game.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{game.maker}</Card.Subtitle>
          <Card.Text>Number of Players: {game.number_of_players}</Card.Text>
          <Card.Text>Skill Level: {game.skill_level}</Card.Text>
        </Card.Body>
      </Card>
    </>

  )
}
