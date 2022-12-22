import styled from "styled-components";
export const BottomAboutItems = styled.div`
    display: flex;
  

    & > :not(:first-child){
        border-left: solid 1px #E0E0E0;
       
    }
    
    & > :nth-child(1){
        padding-right: 2.4rem;
    }

    & > :nth-child(2){
        padding: 0 2.4rem;
    }

    & > :nth-child(3){
        padding-left: 2.4rem;
    }
    

    
`