import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

import iconGoogle from "../../assets/iconGoogle.png"
import iconApple from "../../assets/iconApple.png"
import { ContainerFundo, ParteFuncional, Fonte, Titulo, ContainerLinha, Fonte2 } from './BlocoOpcoesLogin.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function BlocoOpcoesLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const data = {
            email,
            password
        }
        console.log(data)

        const response = await axios.post('http://localhost:3005/api/auth/logar', data);

        if (response.data.success) {
            alert(response.data.message);
            navigate('/Home');
        } else {
                alert("Deu erro");
        }
    }



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
                    <Fonte2>
                        <Input 
                            variant='solid' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Fonte2>
                </Fonte>

                <Fonte>Senha:
                    <Fonte2>
                        <Input 
                            type='password' 
                            variant='solid'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Fonte2>
                </Fonte>

                {/* <Link to="/Home"> */}
                <parteBotao>
                    <Button colorScheme='blue' width='40vw' onClick={handleSubmit}>Entrar</Button>
                </parteBotao>
                {/* </Link> */}

            </ContainerFundo>
        </ParteFuncional>
    )
}

export default BlocoOpcoesLogin