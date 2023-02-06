import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function PokemonPage() {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    fetch ('http://localhost:3001/pokemon')
    .then((response) => response.json())
    .then(pokeData => setPokeData(pokeData))
  }, [])

  const [search, setSearch] = useState("")
const pokemonToRender = pokeData.filter(pokemon => {
  if (search === ""){
    return true;
  }
  return (pokemon.name.toLowerCase().includes(search.toLowerCase()))
} );

function handleChange(e){
  setSearch(e.target.value)
}


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search handleChange={handleChange} />
      <br />
      <PokemonCollection pokemonToRender ={pokemonToRender} />
    </Container>
  );
}

export default PokemonPage;
