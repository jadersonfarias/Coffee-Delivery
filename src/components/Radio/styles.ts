import styled from "styled-components";

export const Container = styled.label`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme["white-500"]};
  color: ${({ theme }) => theme["gray-500"]};

  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  line-height: 160%;
  font-weight: 400;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme["purple-100"]};
  }

  &[data-state="true"] {
    background-color: ${({ theme }) => theme["purple-100"]};
    border-color: ${({ theme }) => theme["white-500"]};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme["purple-200"]};
  }
`;
