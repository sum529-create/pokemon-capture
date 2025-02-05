import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Dex from "../pages/Dex"
import Layout from "../components/layout/Layout"
import DexDetail from "../pages/DexDetail"

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/dex" element={<Dex/>}/>
          <Route path="/dex/:pokemonId" element={<DexDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router