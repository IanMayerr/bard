import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Login from './Paginas/Login/Login'
import CadastroG from "./Paginas/CadastroG/CadastroG"
import CadastroA from "./Paginas/CadastroA/CadastroA"

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <CadastroA />
    </ChakraProvider>
  )
}

export default App