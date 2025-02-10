import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../constants/mock/pokemonList";
import { POKEMON_MAX_COUNT } from "../../constants/pokemon";

const initialState = {
  pokemonList: MOCK_DATA,
  selectedPokemon: ["A", "B", "C", "D", "E", "F"],
  selectedIdx: 0,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.selectedPokemon[state.selectedIdx] = action.payload;
      state.selectedIdx += 1;
    },
    deletePokemon: (state, action) => {
      const deleteIdx = state.selectedPokemon.findIndex(
        (e) => e.id === action.payload.id
      );
      const filtered = state.selectedPokemon.filter(
        (e) => e.id !== action.payload.id
      );
      while (filtered.length < POKEMON_MAX_COUNT) {
        filtered.push("");
      }
      state.selectedPokemon = filtered;
      if (state.selectedIdx > deleteIdx) {
        state.selectedIdx -= 1;
      }
    },
  },
});

export default pokemonSlice.reducer;
export const { addPokemon, deletePokemon } = pokemonSlice.actions;
