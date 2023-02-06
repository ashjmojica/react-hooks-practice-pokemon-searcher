import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonToRender}) {
  const pokeArray = pokemonToRender.map(pokemon => {
    return <PokemonCard key={pokemon.id} name={pokemon.name} hp ={pokemon.hp} sprites ={pokemon.sprites} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokeArray}
    </Card.Group>
  );
}

export default PokemonCollection;
