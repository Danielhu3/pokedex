import styled from "styled-components";
export const BottomStatsStatName = styled.span.attrs((props: {color: string}) => props)`

    color: ${props => props.color && `${props.color}`};
    font-weight:700;
    font-size:1.2rem;

`