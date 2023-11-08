import BlocoOpcoesCadastro from "../../components/BlocoOpcoesCadastro/BlocoOpcoesCadastro.js"
import { Fundo } from "./CadastroA.jsx"
import { MargemCima } from "./CadastroA.jsx"


function CadastroA(){
    return(
        <>
        {/* <MargemCima>
        </MargemCima> */}

        <Fundo>
            <BlocoOpcoesCadastro />
        </Fundo>
        </>
    )
}

export default CadastroA