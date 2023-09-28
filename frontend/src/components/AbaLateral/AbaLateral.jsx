import styled from "styled-components"

export const Fundo = styled.div`
    background-color: #363062;
    height: 100vh;
    width: 62vw;
    display: flex;
    flex-direction: column;
`

export const Img1 = styled.img`
    grid-column: 2/2;
    grid-row: 1/3;
`

export const Letra1 = styled.h1`
    font-size: 18px;
    color: #D8B9C3;
    grid-column: 1/1;
    grid-row: 1/1;
`

export const Letra2 = styled.h1`
    font-size: 14px;
    color: #D8B9C3;
    grid-column: 1/1;
    grid-row: 2/2;
    padding-top: 5px;
`

export const Letra3 = styled.h1`
    font-size: 9px;
    color: #D8B9C3;
    opacity: 50%;
    grid-column: 1/1;
    grid-row: 3/3;
    padding-top: 15px;
`

export const Letra4 = styled.h1`
    font-size: 16px;
    color: #D8B9C3;
    font-weight: bold;
`

export const Letra5 = styled.h1`
    font-size: 16px;
    color: #D8B9C3;
    opacity: 60%;
`

export const Letra6 = styled.h1`
    font-size: 16px;
    color: #D8B9C3;
    margin-top: 35vh;
    align-self: flex-end;
`

export const PrimeiraParte = styled.div`
    padding-top: 30px;
    padding-left: 15px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 20% 20% 20%;
`

export const SegundaParte = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const TerceiraParte = styled.div`
    padding-left: 19vw;
    padding-right: 5px;
    display: flex;
    flex-direction: column;
    gap: 2vh;
    height: 70vh;
`