import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 20px;
  padding: 20px;
  max-height: 50vh;
  overflow-y: auto;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #fafafa;
  background-image: linear-gradient(45deg, #e8e8e8 25%, transparent 25%),
    linear-gradient(-45deg, #e8e8e8 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e8e8e8 75%),
    linear-gradient(-45deg, transparent 75%, #e8e8e8 75%);
  background-size: 20px 20px;
  background-position:
    0 0,
    0 10px,
    10px -10px,
    -10px 0px;
  box-shadow:
    inset 0 0 30px rgba(0, 0, 0, 0.05),
    0 2px 8px rgba(0, 0, 0, 0.1);

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
