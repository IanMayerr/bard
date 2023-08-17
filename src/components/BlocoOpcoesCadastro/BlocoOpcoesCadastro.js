import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

import { ContainerFundo, ParteFuncional, Fonte, Titulo, ContainerLinha } from './BlocoOpcoesCadastro.jsx'

function BlocoOpcoesCadastro() {
    return (
        <ParteFuncional>
            <ContainerFundo>

                <Titulo>Cadastro
                    <ContainerLinha />
                </Titulo>

                <Fonte>Insira seu email:
                    <Input placeholder='Basic usage' variant='solid' />
                </Fonte>

                <Fonte>Crie uma senha:
                    <Input placeholder='Basic usage' variant='solid' />
                </Fonte>

                <Fonte>Repita a senha:
                    <Input placeholder='Basic usage' variant='solid' />
                </Fonte>

                <Fonte>Insira seu nome:
                    <Input placeholder='Basic usage' variant='solid' />
                </Fonte>

                <Fonte>Insira seu nome de usuário:
                    <Input placeholder='Basic usage' variant='solid' />
                </Fonte>
                
                <Fonte>Insira seu aniversário:
                    <Input placeholder='Basic usage' variant='solid' />
                </Fonte>

                <Button colorScheme='blue'>Finalizar</Button>

            </ContainerFundo>
        </ParteFuncional>
    )
}

export default BlocoOpcoesCadastro