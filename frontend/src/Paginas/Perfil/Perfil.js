import setaVoltar from "../../assets/setaVoltar.svg"
import { Banner, Nome, Arroba, Cidade, Fundo, ParteDeCima, Img, Status, ParteDoMeio, Biografia, TextoBiografia, Img2, Botão } from "./Perfil.jsx"
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
    const [data, setData] = useState([]);

    const handleSubmit = () => {
        alert('PEGAR OS DADOS DO FORMULARIO')

        const data = {

        }

        // chamar rota da api para cadastrar perfil
        const response = axios.post('URL/perfil/create', data);

        if (response.data.success) {
            alert('Deucerto')
        } else {
            alert("Nao deu certo");
        }
    };

    const fetchData = () => {
        const idUsuario = localStorage.getItem('@Auth:id');
        const response = axios.get('URL/usuario/' + idUsuario);

        if (response.data.sucess) {
            setData(response.data.data);
        } else {

        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <Fundo>
                <Banner>
                    <Link to="/Home">
                        <img src={setaVoltar} alt='' />
                    </Link>

                    <Button onClick={onOpen}>Open Modal</Button>

                    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>

                            <ModalHeader>Editar informações</ModalHeader>

                            <ModalCloseButton />

                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>Nome:</FormLabel>
                                    <Input
                                        value="data.nome"
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Nome de usuário:</FormLabel>
                                    <Input 
                                        value="data.usuario"
                                        onChange={(e) => setUsuario(e.target.value)}
                                    />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Status:</FormLabel>
                                    <Input 
                                        value="data.status"
                                        onChange={(e) => setStatus(e.target.value)}
                                    />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Localização:</FormLabel>
                                    <Input 
                                        value="data.localizacao"
                                        onChange={(e) => setLocalizacao(e.target.value)}
                                    />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Biografia:</FormLabel>
                                    <Input 
                                        value="data.biografia"
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

                    <Nome>Ian Mayer</Nome>
                    <Arroba>@ianziito</Arroba>
                    <Status>Status: Músico(a) Amadador(a)</Status>
                    <Cidade>
                        <Img2 src={iconeLocalizacao} alt='' />
                        São Leopoldo
                    </Cidade>
                </ParteDeCima>

                <ParteDoMeio>
                    <Biografia>Bio:</Biografia>
                    <TextoBiografia>Músico iniciante. 17y. Gosto de tocar sertanejo e MPB. Disponível para fazer um som com qualquer um, chama na DM!</TextoBiografia>
                </ParteDoMeio>

                <Card />
            </Fundo>
        </>
    )
}

export default Perfil