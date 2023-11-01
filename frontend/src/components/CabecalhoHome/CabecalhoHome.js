import { CabecalhoSuperior, Container1, Img1, Img2, Img3 } from "./CabecalhoHome.jsx"
import fotoPerfil from "../../assets/fotoPerfil.svg"
import logoBardExtended from "../../assets/logoBardExtended.svg"
import botaoPessoas from "../../assets/botaoPessoas.svg"
import { useDisclosure, DrawerContent, Drawer, DrawerOverlay, DrawerBody } from '@chakra-ui/react'
import AbaLateral from "../AbaLateral/AbaLateral.js"



function CabecalhoHome() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <CabecalhoSuperior>
                <Container1>

                    <Img1 onClick={onOpen} src={fotoPerfil} alt='' />
                    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerBody w='30vw' h='100%'>
                                <AbaLateral />
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