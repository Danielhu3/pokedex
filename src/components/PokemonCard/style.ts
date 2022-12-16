import styled from "styled-components";
export const PokemonCard= styled.div.attrs((props: {color: string}) => props)`
    max-height: 30rem;
    max-width: 30rem;

    display: flex;
    flex-direction: column;
    background-color: white;
    border: solid 1px ${props => props.color};
    flex: 1 1 20rem;
    margin: 1.6rem;
    border-radius: 0.8rem;

    
    & > span{
        text-align: end;
        margin: 0.4rem 0.8rem 0 0;
        color: ${props => props.color};
    }
    & > img{
        max-width: 100%;
        max-height: 100%;
        display: block;
    }

    

    &  > a {
        text-decoration: none;
        background-color: ${props => props.color};
        padding: 0.4rem 0.8rem;
        text-align: center;
        color: white;
        font-size: 1rem;
        border-radius: 0 0 0.8rem 0.8rem;
    }
`