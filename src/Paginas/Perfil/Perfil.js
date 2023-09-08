import setaVoltar from "../../assets/setaVoltar.svg"
import { Banner, Letra1, Letra2, Letra4, LinhaDividora, Fundo } from "./Perfil.jsx"
import fotoPerfil from "../../assets/fotoPerfil.svg"
import iconeLocalizacao from "../../assets/iconeLocalizacao.svg"
import Card from "../../components/Card/Card.js"

function Perfil() {
    return (
        <>
            <Fundo>
                <Banner>
                    <img src={setaVoltar} alt='' />
                </Banner>

                <div>
                    <img src={fotoPerfil} alt='' />

                    <div>
                        <Letra1>Ian Mayer</Letra1>
                        <Letra2>@ianziito</Letra2>
                        <Letra2>Status: Músico(a) Amadador(a)</Letra2>
                    </div>
                </div>

                <div>
                    <img src={iconeLocalizacao} alt='' />
                    <Letra2>São Leopoldo</Letra2>
                </div>

                <div>
                    <Letra4>Biografia:</Letra4>
                    <Letra1>Músico iniciante. 17y. Gosto de tocar sertanejo e MPB. Disponível para fazer um som com qualquer um, chama na DM!</Letra1>
                </div>

                <LinhaDividora />

                <Card />
            </Fundo>
        </>
    )
}

export default Perfil