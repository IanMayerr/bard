import { Fundo, Img1, Letra1, Letra2, Letra3, Letra4, Letra5, Letra6, PrimeiraParte, SegundaParte, TerceiraParte } from "./AbaLateral.jsx"
import fotoPerfil from "../../assets/fotoPerfil.svg"
import botaoAdicionarConta from "../../assets/botaoAdicionarConta.svg"

// import { Slide } from '@chakra-ui/react'


function AbaLateral() {

    // <Button onClick={onToggle}>Click Me</Button>
    // const { isOpen, onToggle } = useDisclosure()

    return (
        <>
            {/* <Slide direction='left' in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    p='40px'
                    color='white'
                    mt='4'
                    bg='teal.500'
                    rounded='md'
                    shadow='md'
                > */}
            <Fundo>

                <PrimeiraParte>
                    <Letra1>Ian Mayer</Letra1>
                    <Img1 src={fotoPerfil} alt='' />
                    <Letra2>@ianziito</Letra2>
                    <Letra3>Músico(a) Amador(a)</Letra3>
                </PrimeiraParte>

                <SegundaParte>
                    <img src={botaoAdicionarConta} alt='' />
                    <Letra5>Adicionar conta</Letra5>
                </SegundaParte>

                <TerceiraParte>
                    <Letra4>Meu Perfil</Letra4>

                    <Letra4>Buscar</Letra4>

                    <Letra4>Publicar</Letra4>

                    <Letra4>Sair</Letra4>

                    <Letra6>v0.1 alpha</Letra6>
                </TerceiraParte>

            </Fundo>

            {/* </Box>
            </Slide> */}
        </>
    )
}

export default AbaLateral