import {BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../Paginas/Login/Login.js"
import CadastroA from "../Paginas/CadastroA/CadastroA.js"
import CadastroG from "../Paginas/CadastroG/CadastroG.js"
import Home from "../Paginas/Home/Home.js"
import Perfil from "../Paginas/Perfil/Perfil.js"


function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>} />
            <Route path="Home" element={<Home/>}></Route>
            <Route path="CadastroA" element={<CadastroA/>}></Route>
            <Route path="CadastroG" element={<CadastroG/>}></Route>
            <Route path="Perfil" element={<Perfil/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas