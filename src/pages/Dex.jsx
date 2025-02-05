import Dashboard from "../components/layout/Dashboard"
import PokemonList from "../components/pokemon/PokemonList"
import MOCK_DATA from "../constants/mock/pokemonList";
import { useState } from "react";

const pokemons = MOCK_DATA;
const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(['A', 'B', 'C', 'D', 'E', 'F'])
  const [selectedIdx, setSelectedIdx] = useState(0);
  const addPokemon = (data) => {
    if(selectedIdx >= 6){
      return alert('더 이상 포켓몬을 추가할 수 없습니다.');
    }
    if(selectedPokemon.some(e => e.id === data.id)){
      return alert('같은 포켓몬을 추가할 수 없습니다.');
    }
    setSelectedPokemon(selectedPokemon.map((e,i) => i === selectedIdx ? data : e))
    setSelectedIdx(prev => prev + 1);
  }
  const deletePokemon = (id) => {
    const deleteIdx = selectedPokemon.findIndex(pokemon => pokemon.id === id);
    setSelectedPokemon(prev => {
      const filtered = prev.filter(pokemon => pokemon.id !== id);
      
      while (filtered.length < 6) {
        filtered.push("");
      }
      
      return filtered;
    });
    if(deleteIdx < selectedIdx){
      setSelectedIdx(pre => pre - 1);
    }
  }
  return (
    <>
      <Dashboard selectedPokemon={selectedPokemon} deletePokemon={deletePokemon}/>
      <PokemonList pokemons={pokemons} addPokemon={addPokemon}/>
    </>
  )
}
export default Dex