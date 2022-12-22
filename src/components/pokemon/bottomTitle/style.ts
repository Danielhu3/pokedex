import styled from "styled-components";
export const BottomTitle = styled.h3.attrs((props: {color: string}) => props)`
    color: ${props => props.color && `${props.color}`}
`