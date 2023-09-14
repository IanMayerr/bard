import styled from "styled-components"
import fundoCadastro from "../../assets/fundoCadastro.jpg"

export const MargemCima = styled.div`
    background-color: #2B2B2B;
    width: 100%;
    height: 5vh;
`

export const Fundo = styled.div`
    background-image: url(${fundoCadastro});
    display: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`