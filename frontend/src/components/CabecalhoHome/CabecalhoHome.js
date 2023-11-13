import { CabecalhoSuperior, Container1, Img1, Img2, Img3 } from "./CabecalhoHome.jsx"
import fotoPerfil from "../../assets/fotoPerfil.svg"
import logoBardExtended from "../../assets/logoBardExtended.svg"
import botaoPessoas from "../../assets/botaoPessoas.svg"
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    FormLabel,
    Box,
    Stack,
    useDisclosure,
} from '@chakra-ui/react'
import React from "react"
import { Link } from "react-router-dom"


function CabecalhoHome() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()


    return (
        <>
            <CabecalhoSuperior>
                <Container1>

                    <Img1 onClick={onOpen} src={fotoPerfil} alt='' />
                    <Drawer
                        isOpen={isOpen}
                        placement='left'
                        initialFocusRef={firstField}
                        onClose={onClose}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader borderBottomWidth='1px'>
                                Opções de conta
                            </DrawerHeader>

                            <DrawerBody>
                                <Stack spacing='24px'>
                                    <Box
                                        padding-left='10px'
                                    >
                                        <Link to="/Perfil">
                                            <FormLabel>Meu Perfil</FormLabel>
                                        </Link>
                                    </Box>
                                    <Box
                                        padding-left='10px'
                                    >
                                        <FormLabel>Buscar</FormLabel>
                                    </Box>
                                    <Box
                                        padding-left='10px'
                                    >
                                        <FormLabel>Transmissão ao vivo</FormLabel>
                                    </Box>
                                    <Box
                                        padding-left='10px'
                                    >
                                        <Link to="/Login">
                                            <FormLabel>Sair</FormLabel>
                                        </Link>
                                    </Box>
                                </Stack>
                            </DrawerBody>

                        </DrawerContent>
                    </Drawer>
                    
                    <Img2 src={logoBardExtended} alt='' />
                    <Img3 src={botaoPessoas} alt='' />

                </Container1>
            </CabecalhoSuperior>
        </>
    )

}

export default CabecalhoHome