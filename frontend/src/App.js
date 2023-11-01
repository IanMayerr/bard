import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import Rotas from './rotas/Rotas.js'
// import Login from './Paginas/Login/Login'
// import CadastroG from "./Paginas/CadastroG/CadastroG"
// import CadastroA from "./Paginas/CadastroA/CadastroA"
// import Home from './Paginas/Home/Home'

function App() {
  return (
    <ChakraProvider>
      <Rotas />
    </ChakraProvider>
  )
}

export default App