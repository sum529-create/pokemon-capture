import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Dex from "../pages/Dex"
import Layout from "../components/layout/Layout"
import PokemonDetail from "../components/pokemon/PokemonDetail"

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/dex" element={<Dex/>}/>
          <Route path="/dex/:pokemonId" element={<PokemonDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router