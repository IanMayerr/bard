import setaVoltar from "../../assets/setaVoltar.svg"
import { Banner, Nome, Arroba, Cidade, Fundo, ParteDeCima, Img, Status, ParteDoMeio, Biografia, TextoBiografia, Img2 } from "./Perfil.jsx"
import fotoPerfil from "../../assets/fotoPerfil.svg"
import iconeLocalizacao from "../../assets/iconeLocalizacao.svg"
import Card from "../../components/Card/Card.js"
import { Link } from "react-router-dom"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react"
import React from "react"


function Perfil() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


    return (
        <>
            <Fundo>
                <Banner>
                    <Link to="/Home">
                        <img src={setaVoltar} alt='' />
                    </Link>
                    
                        <Button onClick={onOpen}>Open Modal</Button>

                        <Modal
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Editar informações</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel>Nome:</FormLabel>
                                        <Input />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Nome de usuário:</FormLabel>
                                        <Input />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Status:</FormLabel>
                                        <Input />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Localização:</FormLabel>
                                        <Input />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Biografia:</FormLabel>
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
    
                </Banner>

                <ParteDeCima>
                    <Img src={fotoPerfil} alt='' />

                    <Nome>Ian Mayer</Nome>
                    <Arroba>@ianziito</Arroba>
                    <Status>Status: Músico(a) Amadador(a)</Status>
                    <Cidade>
                        <Img2 src={iconeLocalizacao} alt='' />
                        São Leopoldo
                    </Cidade>
                </ParteDeCima>

                <ParteDoMeio>
                    <Biografia>Bio:</Biografia>
                    <TextoBiografia>Músico iniciante. 17y. Gosto de tocar sertanejo e MPB. Disponível para fazer um som com qualquer um, chama na DM!</TextoBiografia>
                </ParteDoMeio>

                <Card />
            </Fundo>
        </>
    )
}

export default Perfil