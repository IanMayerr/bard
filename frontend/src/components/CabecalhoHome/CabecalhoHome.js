import { CabecalhoSuperior, Container1, Img1, Img2, Img3 } from "./CabecalhoHome.jsx"
import fotoPerfil from "../../assets/fotoPerfil.svg"
import logoBardExtended from "../../assets/logoBardExtended.svg"
import botaoPessoas from "../../assets/botaoPessoas.svg"


function CabecalhoHome(){
    return(
        <>
            <CabecalhoSuperior>
                <Container1>
                <Img1 src={fotoPerfil} alt='' />
                <Img2 src={logoBardExtended} alt='' />
                <Img3 src={botaoPessoas} alt='' />
                {/* fazer um botão para colocar essas imagens acima ^ */}
                </Container1>
            </CabecalhoSuperior>
        </>
    )
}

export default CabecalhoHome