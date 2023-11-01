import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

import iconGoogle from "../../assets/iconGoogle.png"
import iconApple from "../../assets/iconApple.png"
import { ContainerFundo, ParteFuncional, Fonte, Titulo, ContainerLinha, parteBotao, Fonte2 } from './BlocoOpcoesLogin.jsx'
import { Link } from 'react-router-dom'

function BlocoOpcoesLogin() {
    return (
        <ParteFuncional>
            <ContainerFundo>

                <Titulo>Login
                    <ContainerLinha />
                </Titulo>

                <Link to="/CadastroG">
                <Button h='8vh' w='80vw' background-color='white' leftIcon={<img src={iconGoogle} />}>
                    Conectar com o Google
                </Button>
                </Link>

                <Link to="/CadastroA">
                <Button h='8vh' w='80vw' background-color='white' leftIcon={<img src={iconApple} />}>
                    Conectar com o Apple ID
                </Button>
                </Link>

                <Fonte>Email:
                    <Fonte2><Input placeholder='Basic usage' variant='solid' /></Fonte2>
                </Fonte>

                <Fonte>Senha:
                    <Fonte2><Input placeholder='Basic usage' variant='solid' /></Fonte2>
                </Fonte>

                <Link to="/Home">
                <parteBotao>
                    <Button colorScheme='blue' width='40vw'>Entrar</Button>
                </parteBotao>
                </Link>

            </ContainerFundo>
        </ParteFuncional>
    )
}

export default BlocoOpcoesLogin