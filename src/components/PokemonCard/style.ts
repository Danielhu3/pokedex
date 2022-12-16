import styled from "styled-components";
export const PokemonCard= styled.div`
    height: 300px;
    width: 300px;

    display: flex;
    flex-direction: column;
    background-color: white;

    // remover
    margin-bottom: 2rem;

    border: solid 2px black;
    & > span{
        text-align: end;
        margin: 0.4rem 0.8rem 0 0;
    }
    & > img{
        width: 100%;
        height: 90%;
    }

    & > a {
        text-decoration: none;
        background-color: green;
        padding: 0.4rem 0.8rem;
        text-align: center;
        color: white;
    }
`