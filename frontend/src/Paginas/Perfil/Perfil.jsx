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
    font-size: 18px;
    color: #D8B9C3;
    grid-column: 2/2;
    grid-row: 1/1;
    padding-left: 5px;
    text-shadow: 1.5px 1.5px 1.5px black;

`

export const Arroba = styled.h1`
    font-size: 14px;
    color: #D8B9C3;
    grid-column: 2/2;
    grid-row: 2/2;
    padding-left: 5px;
    padding-bottom: 8px;
    text-shadow: 1.5px 1.5px 1.5px black;
`

export const Status = styled.h1`
    font-size: 12px;
    color: #D8B9C3;
    opacity: 50%;
    grid-column: 3/4;
    padding-right:5px ;
    grid-row: 1/2;
    text-align: end;
    text-shadow: 1.5px 1.5px 1.5px black;
`


export const Cidade = styled.h1`
    font-size: 85%;
    color: #D8B9C3;
    font-weight: bold;
    display: flex;
    flex: column;
    grid-column: 2/4;
    grid-row: 3/3;
    text-shadow: 1.5px 1.5px 1.5px black;

`

export const Biografia = styled.h1`
    font-size: 16px;
    color: #D8B9C3;
    opacity: 60%;
    text-shadow: 2px 2px 2px black;

`

export const TextoBiografia = styled.div`
    color: #D8B9C3;
    font-size: 14px;
`

export const ParteDeCima = styled.div`
    display: grid;
    margin: 2vw 2vw 0 2vw;
    grid-template-columns: 33% 40% 27%;
    grid-template-rows: 29% 34% 25%;
    height: 100%;
`

export const Img = styled.img`
    grid-column: 1/1;
    grid-row: 1/3;
    height: 140%;
    width: 30vw;
    
`

export const Img2 = styled.img`
    height: 25px;
    width: 10vw;
`


export const ParteDoMeio = styled.div`
    padding-left: 20px;
    padding-right: 10px;
`

