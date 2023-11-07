import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { ContainerFundo, ParteFuncional, Fonte, Titulo, ContainerLinha, Campos } from './BlocoOpcoesCadastro.jsx'
import { useState } from 'react'
import axios from 'axios'
import Select from "react-select"

function BlocoOpcoesCadastro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");

    const handleSubmit = async () => {

        if (confirmSenha === password) {

            const data = {
                email,
                password,
                nome,
                usuario,
            }

            console.log(data);

            const response = await axios.post('http://localhost:3005/api/cadastro', data);

            if (response.data.success) {
                alert(response.data.message);

            } else {
                alert("Deu erro");
            }
        }
    }

    const option = [
        { value: 'Músico(a) profissional', label: 'Músico(a) profissional' },
        { value: 'Músico(a) iniciante/avançado', label: 'Músico(a) iniciante/avançado' },
        { value: 'Empresa/Comércio', label: 'Empresa/Comércio' }
    ]

    return (
        <ParteFuncional>
            <ContainerFundo>


                <Titulo>Cadastro
                    <ContainerLinha />
                </Titulo>

                <Campos>
                    <Fonte>Insira seu email:
                        <Input
                            placeholder='exemplo@exemplo.com'
                            type='email'
                            color={'#000'}
                            variant='solid'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Fonte>
                </Campos>

                <Campos>
                    <Fonte>Você faz parte de qual grupo de musicos?
                        <Select 
                            options={option}
                            name="color"
                        />
                    </Fonte>
                </Campos>
        
                <Campos>
                    <Fonte>Crie uma senha:
                        <Input
                            type='password'
                            color={'#000'}
                            placeholder='ClaveDeSol2023'
                            variant='solid'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Fonte>
                </Campos>

                <Campos>
                    <Fonte>Repita a senha:
                        <Input
                            type='password'
                            color={'#000'}
                            placeholder='ClaveDeSol2023'
                            variant='solid'
                            value={confirmSenha}
                            onChange={(e) => setConfirmSenha(e.target.value)}
                        />
                    </Fonte>
                </Campos>

                <Campos>
                    <Fonte>Insira seu nome:
                        <Input
                            type="text"
                            color={'#000'}
                            variant='solid'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </Fonte>
                </Campos>

                <Campos>
                    <Fonte>Insira seu nome de usuário:
                        <Input
                            variant='solid'
                            color={'#000'}
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </Fonte>
                </Campos>

                {/* <Campos>
                    <Fonte>Insira seu aniversário:
                        <Input placeholder='Basic usage' variant='solid' />
                    </Fonte>
                </Campos> */}

                <Link to="/Login">
                    <Button
                        colorScheme='purple'
                        onClick={handleSubmit}
                    >
                        Finalizar
                    </Button>
                </Link>

            </ContainerFundo>
        </ParteFuncional>
    )
}

export default BlocoOpcoesCadastro