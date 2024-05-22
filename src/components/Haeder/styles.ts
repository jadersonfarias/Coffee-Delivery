import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 104px;
  margin: 0px 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const BaseHeader = styled.span`
  background: ${(props) => props.theme["purple-100"]};
  border-radius: 6px;
`;

export const HeaderLocation = styled(BaseHeader)`
  display: flex;
  padding: 0.4rem;
  color: ${(props) => props.theme["purple-300"]};

  svg {
    color: ${(props) => props.theme["purple-300"]};
  }
`;

export const HeaderCart = styled(BaseHeader)`
  background: ${(props) => props.theme["yellow-100"]};
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative;

  span {
    color: ${(props) => props.theme["white-100"]};
    background: ${(props) => props.theme["yellow-300"]};
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(50%, -50%);
  }

  svg {
    color: ${(props) => props.theme["yellow-300"]};
    
  }
`;
