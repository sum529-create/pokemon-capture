import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Dex from "../pages/Dex"
import Layout from "../components/layout/Layout"

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/dex" element={<Dex/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router