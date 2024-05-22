import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  
  display: flex;
  align-items: end;
  justify-content: center;

  margin: 3rem 0 3rem;

  gap: 6.25rem;
  @media (max-width: 768px) {
   flex-direction: column;
   align-items: center;
  }

  `;

export const OrderConfirmedCoffee = styled.div`
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2.5rem;
    line-height: 130%;
    font-weight: 800;
 
    color: ${(props) => props.theme["yellow-300"]}
  }

  p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 400;

      color: ${(props) => props.theme["gray-500"]}
  }
`;

export const TagCoffee = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 6px 32px;

  padding: 2.5rem;
  margin-top: 2.5rem;

  border: 2px solid ${(props) => props.theme["purple-200"]};

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
   

    svg {
      border-radius: 999px;
      padding: 6px;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
    align-items: start;

    color: ${(props) => props.theme["gray-300"]}
  }
`;

export const ImageMotorcycleCourier = styled.img`
  
  object-fit: cover;
`;
