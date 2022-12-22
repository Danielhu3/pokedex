import styled from "styled-components";
export const BottomAboutItemsItem = styled.div.attrs((props: {field: string}) => props)`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;


    justify-content: end;
  

    & span {
        font-size: 1.0rem;
        font-size: 1.2rem;

        display: flex;
        align-items: center;

        
        &::before{
            ${props => props.field === 'Weight' && `
                content: url('/images/icon-weight.svg');
                margin-right: 0.8rem;
            `}

            ${props => props.field === 'Height' && `
                content: url('/images/icon-height.svg');
                margin-right: 0.8rem;
            `}
        
        }
    }
    & p {
        color:#666666;
        font-size: 0.8rem;
        font-size: 1rem;
        align-self:center;
    }
    
    
`

//  content: url('/images/icon-weight.svg');
//margin-right: 0.8rem;