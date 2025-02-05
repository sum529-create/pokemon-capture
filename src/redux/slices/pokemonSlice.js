import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../constants/mock/pokemonList";

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
      if (state.selectedIdx >= 6) {
        return alert("더 이상 포켓몬을 추가할 수 없습니다.");
      }
      if (state.selectedPokemon.some((e) => e.id === action.payload.id)) {
        return alert("같은 포켓몬을 추가할 수 없습니다.");
      }
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
      while (filtered.length < 6) {
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
