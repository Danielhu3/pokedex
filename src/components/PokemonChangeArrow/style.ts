import styled from "styled-components";

export const PokemonChangeArrow = styled.a.attrs((props: {type: string}) => props)`

    cursor: pointer;
    & img {
        margin-bottom: 1.6rem;
    }
    ${props => props.type === 'next' && `
        & img {
            transform: rotate(180deg);
            margin-left: auto;
        }
    `}
    

`