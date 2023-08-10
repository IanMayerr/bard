import fundoLogin from "../../assets/fundoLogin.jpg"

import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

import iconGoogle from "../../assets/iconGoogle.png"
import iconApple from "../../assets/iconApple.png"
import { ParteFuncional } from "./BlocoOpcoes.jsx"
import { ContainerFundo } from "./BlocoOpcoes.jsx"
import { Fonte } from "./BlocoOpcoes.jsx"

function BlocoOpcoes() {
    return (
        <>
            <ParteFuncional>
                <ContainerFundo>

                    <Button colorScheme='facebook' leftIcon={<img src={iconGoogle} />}>
                        Conectar com o Google
                    </Button>
                    <Button colorScheme='twitter' leftIcon={<img src={iconApple} />}>
                        Conectar com o Apple ID
                    </Button>
                    <Fonte>Email:</Fonte>
                    <Input placeholder='Basic usage' variant='solid' />
                    <Fonte>Senha:</Fonte>
                    <Input placeholder='Basic usage' variant='solid' />

                    <Button colorScheme='blue'>Entrar</Button>

                </ContainerFundo>
            </ParteFuncional>
        </>
    )
}

export default BlocoOpcoes