import { useState } from "react";
import PropTypes from "prop-types";
import MOCK_DATA from "../constants/mock/pokemonList";
import { PokemonContext } from "./pokemonContext";

export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ]);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const POKEMON_LIST = MOCK_DATA;

  return (
    <PokemonContext.Provider
      value={{
        POKEMON_LIST,
        selectedPokemon,
        selectedIdx,
        setSelectedPokemon,
        setSelectedIdx,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
