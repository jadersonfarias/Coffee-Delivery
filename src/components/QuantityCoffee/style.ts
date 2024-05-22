import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: ${(props) => props.theme["gray-100"]};
    padding:6px ;
    border-radius: 8px;

    gap: 0.5rem;


    span {
        padding-bottom: 2px;
        color: ${(props) => props.theme["gray-500"]}
    }
     
    button{
        background: transparent;
        border: none;
    }

    button svg {
        color: ${(props) => props.theme["purple-200"]};

        transition: all 0.2s;

         

        &:hover {
       color: ${( props ) => props.theme['purple-300']};
      }

    }
`