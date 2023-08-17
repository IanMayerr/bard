import BlocoOpcoesCadastro from "../../components/BlocoOpcoesCadastro/BlocoOpcoesCadastro.js"
import { Fundo } from "./CadastroG.jsx"
import { MargemCima } from "./CadastroG.jsx"


function CadastroA(){
    return(
        <>
        <MargemCima />
        <Fundo>
            <BlocoOpcoesCadastro />
        </Fundo>
        </>
    )
}

export default CadastroA