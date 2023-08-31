import { Centralizar, Letra1, Letra2, LinhaSeparadora } from "./Card.jsx"
import aviao from "../../assets/aviao.svg"
import balaofala from "../../assets/balãofala.svg"
import coracao from "../../assets/coracao.svg"




function Card() {
    return (
        <>
            <Centralizar>
                <LinhaSeparadora />
            </Centralizar>

            <div>

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
                    <Letra2>data</Letra2>
                    <Letra2>horário</Letra2>
                </div>

                <div>
                    <img src={balaofala} alt='' />
                    <img src={coracao} alt='' />
                    <img src={aviao} alt='' />
                </div>

            </div>





        </>
    )
}

export default Card