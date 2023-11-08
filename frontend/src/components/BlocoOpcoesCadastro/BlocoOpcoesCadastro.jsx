import styled from "styled-components"
import fundoLogin from "../../assets/fundoLogin.jpg"


export const ContainerFundo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
    background-color: #2B2B2B;
    border-radius: 27px;
    width: 90vw;
    height: 90vh;
    /* margin-left: 5vw; */

    padding-top: 20px;
    align-items: center;
`

export const SelectOption = styled.select`
    color: black;
`

export const ParteFuncionalCadastro = styled.div`
     display:flex;
    align-items: center;
    justify-content: center;
    /* background-image: url(${fundoLogin}); */
    background-size: 80%;
    background-repeat: no-repeat;
    height: 96vh;
    width: 100vw;
    padding-left: 7px;
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