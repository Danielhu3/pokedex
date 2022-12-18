import styled from "styled-components";
export const PokemonCard= styled.div.attrs((props: {color: string}) => props)`
    max-height: 32rem;
    max-width: 30rem;

    display: flex;
    flex-direction: column;
    background-color: white;
    border: solid 1px ${props => props.color};
    flex: 1 1 18rem;
    margin: 1.6rem;
    border-radius: 0.8rem;

    
    & > span{
        text-align: end;
        margin: 0.4rem 0.8rem 0 0;
        color: ${props => props.color};
    }

    & > img{
        
        display: block;
        max-width: 100%;
        max-height: 100%;

        margin-bottom: 0;
        
    }


    & > a {
        color: white;
        font-size: 1.4rem;
        padding: 0.4rem 0.8rem;
        text-decoration: none;
        background-color: ${props => props.color};
        text-align: center;
        border-radius: 0 0 0.6rem 0.6rem;
    }

    @media screen and (max-width:720px) {
        max-height: 35rem;
        
    }
   
`