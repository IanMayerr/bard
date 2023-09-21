import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

import iconGoogle from "../../assets/iconGoogle.png"
import iconApple from "../../assets/iconApple.png"
import { ContainerFundo, ParteFuncional, Fonte, Titulo, ContainerLinha, parteBotao, Fonte2 } from './BlocoOpcoesLogin.jsx'

function BlocoOpcoesLogin() {
    return (
        <ParteFuncional>
            <ContainerFundo>

                <Titulo>Login
                    <ContainerLinha />
                </Titulo>

            
                <Button h='8vh' w='80vw' background-color='white' leftIcon={<img src={iconGoogle} />}>
                    Conectar com o Google
                </Button>

                <Button h='8vh' w='80vw' background-color='white' leftIcon={<img src={iconApple} />}>
                    Conectar com o Apple ID
                </Button>

                <Fonte>Email:
                    <Fonte2><Input placeholder='Basic usage' variant='solid' /></Fonte2>
                </Fonte>

                <Fonte>Senha:
                    <Fonte2><Input placeholder='Basic usage' variant='solid' /></Fonte2>
                </Fonte>

                <parteBotao>
                    <Button colorScheme='blue' width='40vw'>Entrar</Button>
                </parteBotao>

            </ContainerFundo>
        </ParteFuncional>
    )
}

export default BlocoOpcoesLogin