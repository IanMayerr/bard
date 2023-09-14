import {BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../Paginas/Login/Login.js"

function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>} />
        </Routes>
        </BrowserRouter>
        
        
    )
}

export default Rotas