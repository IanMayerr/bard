import { Centralizar, ContainerSeparadora, Letra1, Letra2 } from "./Card.jsx"
import aviao from "../../assets/aviao.svg"
import balaofala from "../../assets/balãofala.svg"
import coracao from "../../assets/coracao.svg"

function Card() {

    // const [imagem, setImagem] = useState('');
    // const [descricao, setDescricao] = useState('');
    // const [nome, setNome] = useState('');
    // const [arroba, setArroba] = useState('');

    // const handleSubmit = async () => {
        // const data = {
        //     imagem,
        //     descricao,
        //     nome,
        //     arroba,
        // }

    //     console.log(data);
    // }

    return (
        <>
            <Centralizar>
                <ContainerSeparadora>
                    <div>
                        <img src='' alt='' />

                        <div>
                            <Letra1>Nome do perfil</Letra1>
                            <Letra2>Arroba do perfil</Letra2>
                        </div>

                        <Letra2>Tipo de usuário</Letra2>
                    </div>

                    <div>
                        <img src="" alt="" />
                        <Letra2>descrição</Letra2>
                        {/* <Letra2>horário</Letra2> */}
                    </div>

                    <div>
                        <img src={coracao} alt='' />
                        <img src={aviao} alt='' />
                        <img src={balaofala} alt='' />
                    </div>
                </ContainerSeparadora>
            </Centralizar>
        </>
    )
}

export default Card