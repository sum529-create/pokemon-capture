import styled from "styled-components";
import PokemonCard from "./PokemonCard"
import PropTypes from "prop-types";

const ListContainer = styled.div`
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

const PokemonList = ({addPokemon, pokemons}) => {

  return (
    <ListContainer>
      {
        pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} addPokemon={addPokemon}/>
        ))
      }
    </ListContainer>
  )
}

PokemonList.propTypes = {
  addPokemon: PropTypes.func,
  pokemons: PropTypes.array
}

export default PokemonList