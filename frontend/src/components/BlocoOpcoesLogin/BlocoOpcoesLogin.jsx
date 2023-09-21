import styled from "styled-components"
import fundoLogin from "../../assets/fundoLogin.jpg"

export const ContainerFundo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    background-color: #2B2B2B;
    border-radius: 27px;
    width: 90vw;
    height: 62vh;
    margin-top: 30px;
    margin-left: 8px;
    margin-bottom: 29px;
    padding-top: 25px;
    padding-bottom: 10px;
    align-items: center;
`

export const ParteFuncional = styled.div`
    display:flex;
    align-items: center;
    background-image: url(${fundoLogin});
    height: 100%;
    width: 100vw;
    padding-left: 7px;
`

export const Fonte = styled.h1`
    color: white;
    width: 80vw;
`

export const Fonte2 = styled.h1`
    color: black;
    width: 80vw;
`

export const Titulo = styled.h2`
    text-align: center;
    align-items: center;
    color: white;
    font-size: 20px;
`

export const ContainerLinha = styled.div`
    width: 20vw;
    height: 0.44vh;
    background-color: #827397;
    align-items: center;
    margin-bottom: 15px;
`

export const parteBotao = styled.button`
    margin-bottom: 50px;
    padding-bottom: 15px;
`