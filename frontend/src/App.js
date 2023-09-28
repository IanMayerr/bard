import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
// import Perfil from './Paginas/Perfil/Perfil'
// import Login from './Paginas/Login/Login'
// import Rotas from './rotas/rotas'
// import CadastroG from "./Paginas/CadastroG/CadastroG"
// import CadastroA from "./Paginas/CadastroA/CadastroA"
// import Home from './Paginas/Home/Home'
import AbaLateral from './components/AbaLateral/AbaLateral'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <AbaLateral />
    </ChakraProvider>
  )
}

export default App