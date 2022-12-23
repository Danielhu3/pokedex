import styled from "styled-components";

export const PokemonChangeArrow = styled.div.attrs((props: {type: string}) => props)`

    cursor: pointer;
    align-self: flex-end;
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