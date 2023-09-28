import CabecalhoHome from "../../components/CabecalhoHome/CabecalhoHome"
import Card from "../../components/Card/Card.js"
import { Fundo } from "./Home.jsx"



function Home() {
    return (
        <Fundo>
            
            <CabecalhoHome/>
            <Card />
           
        </Fundo>
    )
}

export default Home