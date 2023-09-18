import logo from "../../assets/logo_bard.png"
import { BlocoUm, BlocoDois } from "./Cabecalho.jsx"

function Cabecalho() {
    return (
        <>
            <BlocoUm>
                <img src={logo} alt="Logo" />
            </BlocoUm>

            <BlocoDois />
        </>
    )
}

export default Cabecalho