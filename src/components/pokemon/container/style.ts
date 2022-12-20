import styled from "styled-components";
export const Container = styled.main`
    display: grid;
    grid-template-rows: 1fr 2fr;
    grid-template-areas: 'top'
                         'bottom';
    min-height: 100vh;
    
    background-color: ${props => props.color && `${props.color}` };

`