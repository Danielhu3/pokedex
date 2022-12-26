import styled from "styled-components";


export const SearchBar = styled.input.attrs((props: {value: string}) => props)`

    border: solid 1px #E0E0E0;
    border-radius: 0.8rem;
    outline: none;

    padding: 0.4rem 0.8rem;

    background-image: url('/images/icon-search.svg');
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 0.8rem;
    background-size: 1.4rem auto;
    padding-left: 2.8rem;
    
`