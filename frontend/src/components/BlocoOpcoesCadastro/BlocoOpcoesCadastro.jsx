import styled from "styled-components"
import fundoLogin from "../../assets/fundoLogin.jpg"


export const ContainerFundo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    background-color: #2B2B2B;
    border-radius: 27px;
    width: 90vw;
    height: 90vh;
    margin-top: 50px;
    margin-left: 8px;
    padding-top: 25px;
    align-items: center;
`

export const ParteFuncional = styled.div`
    display:flex;
    align-items: center;
    background-image: url(${fundoLogin});
    height: 100vh;
    width: 100vw;
`

export const Fonte = styled.h1`
    color: white;
`

export const Titulo = styled.h2`
    text-align: center;
    align-items: center;
    color: white;
    font-size: 20px;
`

export const ContainerLinha = styled.div`
    width: 28vw;
    height: 0.44vh;
    background-color: #827397;
`

export const Campos = styled.div`
    margin-left: 30px;
    margin-right: 30px;
`