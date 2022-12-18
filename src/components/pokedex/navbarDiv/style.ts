import styled from "styled-components";
export const NavbarDiv = styled.div`
    display: flex;
    gap: 1.6rem;
    align-items: center;

    & > a {
        text-decoration: none;
        color: black;
        font-size: 2.4rem;
        font-weight: 700;
    }

    & a:first-child {
        font-size: 1.4rem;
    }
`