import CabecalhoHome from "../../components/CabecalhoHome/CabecalhoHome"
import Card from "../../components/Card/Card.js"
import { Fundo, Botão } from "./Home.jsx"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react"
import React from "react"


function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)



  return (
    <Fundo>
      <CabecalhoHome />
      <Card />

      <Botão onClick={onOpen}>+</Botão>
      

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >

        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Publicar</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Imagem:</FormLabel>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Descrição:</FormLabel>
              <Input />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Fundo >
  )
}

export default Home