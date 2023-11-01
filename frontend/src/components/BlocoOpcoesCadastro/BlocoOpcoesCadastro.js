import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Link } from "react-router-dom"

import { ContainerFundo, ParteFuncional, Fonte, Titulo, ContainerLinha, Campos } from './BlocoOpcoesCadastro.jsx'

function BlocoOpcoesCadastro() {
    return (
        <ParteFuncional>
            <ContainerFundo>


                <Titulo>Cadastro
                    <ContainerLinha />
                </Titulo>

                <Campos>
                    <Fonte>Insira seu email:
                        <Input placeholder='Basic usage' variant='solid' />
                    </Fonte>
                </Campos>

                <Campos>
                    <Fonte>Crie uma senha:
                        <Input placeholder='Basic usage' variant='solid' />
                    </Fonte>
                </Campos>

                <Campos>
                    <Fonte>Repita a senha:
                        <Input placeholder='Basic usage' variant='solid' />
                    </Fonte>
                </Campos>

                <Campos>
                    <Fonte>Insira seu nome:
                        <Input placeholder='Basic usage' variant='solid' />
                    </Fonte>
                </Campos>

                <Campos>
                    <Fonte>Insira seu nome de usuário:
                        <Input placeholder='Basic usage' variant='solid' />
                    </Fonte>
                </Campos>

                <Campos>
                    <Fonte>Insira seu aniversário:
                        <Input placeholder='Basic usage' variant='solid' />
                    </Fonte>
                </Campos>

                <Link to="/Login">
                <Button colorScheme='purple'>Finalizar</Button>
                </Link>

            </ContainerFundo>
        </ParteFuncional>
    )
}

export default BlocoOpcoesCadastro