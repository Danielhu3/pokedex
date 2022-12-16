import styled from "styled-components";
export const PokemonCard= styled.div.attrs((props: {color: string}) => props)`
    height: 300px;
    width: 300px;

    display: flex;
    flex-direction: column;
    background-color: white;

    
    & > span{
        text-align: end;
        margin: 0.4rem 0.8rem 0 0;
        color: ${props => props.color};
    }
    & > img{
        width: 100%;
        height: 90%;
    }

    & > a {
        text-decoration: none;
        background-color: ${props => props.color};
        padding: 0.4rem 0.8rem;
        text-align: center;
        color: white;
        font-size: 1rem;
    }
`