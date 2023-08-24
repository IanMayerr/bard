import { CabecalhoSuperior } from "./CabecalhoHome.jsx"
import fotoPerfil from "../../assets/fotoPerfil.jpg"
import logoBardExtended from "../../assets/logoBardExtended.jpg"
import botaoPessoas from "../../assets/botaoPessoas.jpg"


function CabecalhoHome(){
    return(
        <>
            <CabecalhoSuperior>
                <img src={fotoPerfil} alt='' />
                <img src={logoBardExtended} alt='' />
                <img src={botaoPessoas} alt='' />
                {/* fazer um botão para colocar essas imagens acima ^ */}
            </CabecalhoSuperior>
        </>
    )
}

export default CabecalhoHome