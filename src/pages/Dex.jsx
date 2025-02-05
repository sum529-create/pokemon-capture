import Dashboard from "../components/layout/Dashboard"
import PokemonList from "../components/pokemon/PokemonList"
import { PokemonProvider } from "../context/PokemonProvider"


const Dex = () => {
  return (
    <PokemonProvider>
      <Dashboard/>
      <PokemonList/>
    </PokemonProvider>
  )
}
export default Dex