import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Container = styled.label`
  &[data-state='focused'] {
    border-color: ${({ theme }) => theme["yellow-300"]};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme["gray-500"]};
  }

  
  input {
    width: 100%;
    padding: 0.65rem;
    border: none;
    
    color: ${(props) => props.theme["gray-200"]};;
    background: ${(props) => props.theme["white-500"]};
    border-radius: 6px;
    &:focus {
        border: 1px solid ${(props) => props.theme["purple-100"]};
    }

    span {
        padding-right: 12px;
    }
  }
`;


export const ErrorMessage = styled.p`
  font-weight: 400;
  color: red;
`