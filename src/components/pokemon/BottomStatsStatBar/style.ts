import styled from "styled-components";
export const BottomStatsStatBar = styled.div.attrs((props: {color: string, value:number}) => props)`
    height: 4px;
    width: 100%;
    border-radius: 0.4rem;
    position: relative;

    background-color: ${props => props.color && `${props.color}20`};

    &::after{
        position: absolute;
        content: '';
        background-color:${props => props.color && `${props.color}`};;
        border-radius: 0.4rem;
        width: 50%;
        width: ${props => props.value && `${props.value}%`};
        top: 0; 
        bottom: 0;
        left: 0; 

    }
`