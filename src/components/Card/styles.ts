import styled from "styled-components";

export const Container = styled.div`
  width: 17rem;
  height: 310px;

  padding: 0 20px 20px;

  display: flex;
  padding: 0 1.25rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background: ${(props) => props.theme["white-300"]};

  border-radius: 6px 36px;

  gap: 1rem;
  margin: 0.5rem;
`;

export const ImgCard = styled.img`
  margin-top: -3rem;
  width: 6rem;
  height: 6rem;
  align-self: center;
`;

export const TagCoffee = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 8px;

    background: ${(props) => props.theme["yellow-100"]};
    color: ${(props) => props.theme["yellow-300"]};

    font-family: "Roboto", sans-serif;
    font-size: 0.725rem;
    line-height: 130%;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const TitleCoffee = styled.div`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: 700;

  color: ${(props) => props.theme["gray-500"]};
`;

export const DescriptionCoffee = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  line-height: 130%;
  font-weight: 400;
`;

export const CoffeeControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  margin-top: 32px;
`;

export const CoffeePrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  :nth-child(1) {
    font-size: 0.9rem;
  }
  :nth-child(2) {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.55rem;
    font-weight: bold;
    color: ${(props) => props.theme["gray-500"]};
    
  }
`;

export const CoffeeContainerButton = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  gap: 0.5rem;

  > button {
    background: ${({ theme , $itemAdded }) => $itemAdded ? theme["yellow-300"] : theme["purple-300"]};
    color: ${(props) => props.theme["white-200"]};
    padding: 6px;
    border: none;
    border-radius: 6px;
  }
`;
