import { CabecalhoSuperior } from "./CabecalhoHome.jsx"
import fotoPerfil from "../../assets/fotoPerfil.svg"
import logoBardExtended from "../../assets/logoBardExtended.svg"
import botaoPessoas from "../../assets/botaoPessoas.svg"


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