import setaVoltar from "../../assets/setaVoltar.svg"
import { Banner, Nome, Arroba, Cidade, Fundo, ParteDeCima, Img, Status, ParteDoMeio, Biografia, TextoBiografia, Img2, LugarBotao, PlanoDeFundo, Select } from "./Perfil.jsx"
import fotoPerfil from "../../assets/fotoPerfil.svg"
import iconeLocalizacao from "../../assets/iconeLocalizacao.svg"
import Card from "../../components/Card/Card.js"
import { Link } from "react-router-dom"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react"
import { React, useEffect, useState } from "react"
import axios from 'axios';


function Perfil() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("");
    const [grupo, setGrupo] = useState("");
    const [local, setLocal] = useState("");
    const [biografia, setBiografia] = useState("");
    const [dataUser, setDataUser] = useState([]);

    const userId = localStorage.getItem('@Auth:user_id')

    const handleSubmit = async () => {
        // alert('PEGAR OS DADOS DO FORMULARIO')

        const data = {
            nome: nome === "" ? dataUser.nome : nome,
            usuario: usuario === "" ? dataUser.usuario : usuario,
            grupo: grupo === "" ? dataUser.grupo : grupo,
            local: local === "" ? dataUser.local : local,
            biografia: biografia === "" ? dataUser.biografia : biografia,
        }
        console.log(data);
        alert(JSON.stringify(data))
        const response = await axios.put(`http://localhost:3005/api/updatePerfil/${userId}`, data);

        if (response.data.success) {
            alert("Informações alteradas com sucesso!");

        } else {
            alert("Deu um erro ao alterar as informações. Tente de novo mais tarde.");
        }
        // chamar rota da api para cadastrar perfil
        // const response = axios.post('URL/perfil/create', data);

        // if (response.data.success) {
        //     alert('Deucerto')
        // } else {
        //     alert("Nao deu certo");
        // }
    };

    const fetchData = async () => {
        const idUsuario = localStorage.getItem('@Auth:user_id');
        console.log(idUsuario);
        const response = await axios.get('http://localhost:3005/api/usuario/' + idUsuario);
        console.log(response.data.success);
        if (response.data.success) {
            console.log(response.data.data);
            setDataUser(response.data.data[0]);
            console.log(dataUser);
        } else {
            alert("Algo deu de errado")
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    const option = [
        { value: 'Músico(a) profissional', label: 'Músico(a) profissional' },
        { value: 'Músico(a) iniciante/avançado', label: 'Músico(a) iniciante/avançado' },
        { value: 'Empresa/Comércio', label: 'Empresa/Comércio' }
    ]

    return (
        <>
            <PlanoDeFundo>
                <Fundo>
                    <Banner>
                        <Link to="/Home">
                            <img src={setaVoltar} alt='' />
                        </Link>

                        <LugarBotao>
                            <Button onClick={onOpen}>Editar Perfil</Button>
                        </LugarBotao>

                        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>

                                <ModalHeader>Editar informações</ModalHeader>

                                <ModalCloseButton />

                                <ModalBody pb={6}>

                                    <FormControl>
                                        <FormLabel>Nome:</FormLabel>
                                        <Input
                                            defaultValue={dataUser.nome}
                                            onChange={(e) => setNome(e.target.value, nome)}
                                        />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Nome de usuário:</FormLabel>
                                        <Input
                                            defaultValue={dataUser.usuario}
                                            onChange={(e) => setUsuario(e.target.value)}
                                        />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Status:</FormLabel>
                                        <Select value={grupo} onChange={(e) => setGrupo(e.target.value)} >
                                            <option value="Músico(a) profissional">Músico(a) profissional</option>
                                            <option value="Músico(a) iniciante/avançado">Músico(a) iniciante/avançado</option>
                                            <option value="Empresa/Comércio">Empresa/Comércio</option>
                                        </Select>
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Localização:</FormLabel>
                                        <Input
                                            defaultValue={dataUser.local ? dataUser.local : ""}
                                            onChange={(e) => setLocal(e.target.value)}
                                        />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Biografia:</FormLabel>
                                        <Input
                                            defaultValue={dataUser.biografia ? dataUser.biografia : ""}
                                            onChange={(e) => setBiografia(e.target.value)}
                                        />
                                    </FormControl>

                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                                        Salvar
                                    </Button>
                                    <Button onClick={onClose}>Cancelar</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Banner>

                    <ParteDeCima>
                        <Img src={fotoPerfil} alt='' />

                        <Nome>{dataUser.nome}</Nome>
                        <Arroba>{dataUser.usuario}</Arroba>
                        <Status>Status:{dataUser.grupo}</Status>
                        <Cidade>
                            <Img2 src={iconeLocalizacao} alt='' />
                            {dataUser.local}
                        </Cidade>
                    </ParteDeCima>

                    <ParteDoMeio>
                        <Biografia>Bio:</Biografia>
                        <TextoBiografia>{dataUser.biografia}</TextoBiografia>
                    </ParteDoMeio>

                    <Card />
                </Fundo>
            </PlanoDeFundo>
        </>
    )
}

export default Perfil