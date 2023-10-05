import setaVoltar from "../../assets/setaVoltar.svg"
import { Banner, Nome, Arroba, Cidade, Fundo, ParteDeCima, Img, Status, ParteDoMeio, Biografia, TextoBiografia } from "./Perfil.jsx"
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

                <ParteDeCima>
                    <Img src={fotoPerfil} alt='' />

                        <Nome>Ian Mayer</Nome>
                        <Arroba>@ianziito</Arroba>
                        <Status>Status: Músico(a) Amadador(a)</Status>
                        <img src={iconeLocalizacao} alt='' />
                        <Cidade>São Leopoldo</Cidade>
                </ParteDeCima>

                <div>
                </div>

                <ParteDoMeio>
                    <Biografia>Biografia:</Biografia>
                    <TextoBiografia>Músico iniciante. 17y. Gosto de tocar sertanejo e MPB. Disponível para fazer um som com qualquer um, chama na DM!</TextoBiografia>
                </ParteDoMeio>

                <Card />
            </Fundo>
        </>
    )
}

export default Perfil