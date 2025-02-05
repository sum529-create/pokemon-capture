import styled from "styled-components";
import PokemonCard from "./PokemonCard"
import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonContext";

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 20px;
  padding: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const PokemonList = () => {
  const {POKEMON_LIST} = useContext(PokemonContext)
  return (
    <ListContainer>
      {
        POKEMON_LIST?.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))
      }
    </ListContainer>
  )
}

export default PokemonList