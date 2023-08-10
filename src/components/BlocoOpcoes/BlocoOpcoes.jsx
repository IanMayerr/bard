import styled from "styled-components"
import fundoLogin from "../../assets/fundoLogin.jpg"


export const ContainerFundo = styled.div`
    align-items: center;
    justify-content: left;
    background-color: #2B2B2B;
    border-radius: 27px;
    width: 35vh;
    height: 35vh;
`

export const ParteFuncional = styled.div`
    align-items: center;
    justify-items: center;
    background-image: url(${fundoLogin});
    height: 50vh;
    width: 50vh;
    padding: 50px;
`

export const Fonte = styled.h1`
    color: white;
`