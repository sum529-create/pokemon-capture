import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(8px);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px){
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr)
  }
`;

const PokemonList = () => {
  const pokemonLists = useSelector((state) => state.pokemon.pokemonList);
  return (
    <ListContainer>
      {pokemonLists?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
