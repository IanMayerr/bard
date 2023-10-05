import styled from "styled-components"
import fundoPerfil from "../../assets/fundoPerfil.svg"

export const Banner = styled.div`
    background-image: url(${fundoPerfil});
    height: 15vh;
    width: 100vw;
    padding-top: 5vh;
`

export const Fundo = styled.div`
    background-color: #4D4C7D;
    height: 100%;
    width: 100vw;
`

export const Nome = styled.h1`
    font-size: 19px;
    color: #D8B9C3;
    grid-column: 2/2;
    grid-row: 1/1;
`

export const Arroba = styled.h1`
    font-size: 16px;
    color: #D8B9C3;
    grid-column: 2/2;
    grid-row: 2/2;
`

export const Status = styled.h1`
    font-size: 14px;
    color: #D8B9C3;
    opacity: 50%;
    grid-column: 3/3;
    grid-row: 1/1;
`

export const Cidade = styled.h1`
    font-size: 16px;
    color: #D8B9C3;
    font-weight: bold;
`

export const Biografia = styled.h1`
    font-size: 16px;
    color: #D8B9C3;
    opacity: 60%;
`

export const TextoBiografia = styled.div`

`

export const ParteDeCima = styled.div`
    display: grid;
    padding: 20px;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 33% 33% 33%;
    /* border: 1px solid red; */
`

export const Img = styled.img`
    grid-column: 1/1;
    grid-row: 1/3;
`

export const ParteDoMeio = styled.div`
    padding-left: 25px;
    padding-right: 15px;
`