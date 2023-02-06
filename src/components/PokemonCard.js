import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name,hp,sprites }) {

  const [spriteToggle, setSprite] = useState(false)

function handleClick(){
  setSprite(spriteToggle => !spriteToggle)
}

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img alt="oh no!" src={spriteToggle? sprites.back:sprites.front} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
