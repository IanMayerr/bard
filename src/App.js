import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Paginas/Home/Home'
import Login from './Paginas/Login/Login'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  )
}

export default App