import styled from "styled-components";
export const BottomTypesType = styled.span.attrs((props: {color: string}) => props)`
    padding: 0.4rem 1rem;
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 1rem;
    background-color: ${props => props.color && `${props.color}`};
    
`