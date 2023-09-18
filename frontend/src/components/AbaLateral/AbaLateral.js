import { Fundo, Letra1, Letra2, Letra3, Letra4, Letra5 } from "./AbaLateral.jsx"
import fotoPerfil from "../../assets/fotoPerfil.svg"
import botaoAdicionarConta from "../../assets/botaoAdicionarConta.svg"


function AbaLateral() {
    return (
        <>

            {/* function SlideFadeEx() {
                const {isOpen, onToggle} = useDisclosure()

                return (
                <>
                    <Button onClick={onToggle}>Click Me</Button>
                    <SlideFade in={isOpen} offsetY='20px'>
                    <Box
                        p='40px'
                        color='white'
                        mt='4'
                        bg='teal.500'
                        rounded='md'
                        shadow='md'
                    >
                        <Lorem count={1} />
                    </Box>
                </SlideFade>
            </>
            )
        } */}

            <Fundo>

                <div>
                    <Letra1>Ian Mayer</Letra1>
                    <img src={fotoPerfil} alt='' />
                </div>

                <div>
                    <Letra3>Músico(a) Amador(a)</Letra3>
                </div>

                <div>
                    <Letra2>@ianziito</Letra2>
                </div>

                <div>
                    <img src={botaoAdicionarConta} alt='' />
                    <Letra5>Adicionar conta</Letra5>
                </div>

                <div>
                    <Letra4>Meu Perfil</Letra4>
                </div>

                <div>
                    <Letra4>Começar Transmissão</Letra4>
                </div>

                <div>
                    <Letra4>Buscar</Letra4>
                </div>

                <div>
                    <Letra4>Publicar</Letra4>
                </div>

                <div>
                    <Letra4>Sair</Letra4>
                </div>

                <div>
                    <Letra1>v0.1 alpha</Letra1>
                </div>
            </Fundo>
        </>
    )
}

export default AbaLateral