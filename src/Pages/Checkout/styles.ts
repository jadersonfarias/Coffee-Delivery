import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;

  justify-content: center;
  gap: 2rem;

  padding: 4.2rem 7rem;

  h2 {
    margin-bottom: 1rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export const PaymentInformation = styled.div`
   width: 40rem;

  padding: 2.5rem;

  background: ${(props) => props.theme["white-300"]};

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 700;
    color: ${(props) => props.theme["gray-500"]};
  }

  svg {
    margin-bottom: -0.2rem;
    color: ${(props) => props.theme["purple-200"]};
  }
  p {
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    div {
      flex-direction: column;
    }
  }
`;


export const AddressContainer = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme["white-300"]};
`;

export const AddressHeading = styled.div`
  margin-bottom: 2rem;

  h1 {
    display: flex;
    align-items: center;

    font-size: 1rem;
    line-height: 130%;
    font-weight: 800;
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
  }

  svg {
    color: ${({ theme }) => theme["yellow-300"]};
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number fullAddress fullAddress"
    "neighborhood city state";
  grid-template-columns: 200px 1fr 60px; /* Define o tamanho das colunas da grade */
  grid-gap: 16px 12px;
`;
export const SelectedCoffee = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 1rem;
  }
  color: ${(props) => props.theme["gray-500"]};
`;

export const Ordem = styled.div`
  width: 100%;

  //background: ${(props) => props.theme["white-300"]};

  img {
    width: 64px;
    height: 64px;
  }
`;

export const OrderedCoffee = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  gap: 1rem;

  aside {
    margin-left: 5rem;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    line-height: 160%;
    font-weight: 700;
  }

  background: ${(props) => props.theme["white-300"]};

  border-bottom: 1px solid ${(props) => props.theme["purple-100"]};

  #box-span {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    span {
    }
  }

  #box-button {
    display: flex;
    gap: 8px;

    > button {
      display: flex;
      align-items: center;
      border: none;
      background: ${(props) => props.theme["gray-100"]};
      padding: 6px;
      border-radius: 8px;
      gap: 0.5rem;

      > svg {
        color: ${(props) => props.theme["purple-200"]};
      }
    }
  }
`;

export const InfoCoffee = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1rem;
  background: ${(props) => props.theme["white-300"]};

  border-bottom-left-radius: 28px;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  div:nth-child(3) {
    color: ${(props) => props.theme["gray-500"]};
    font-weight: 800;
    font-size: 1.5rem;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 12px;

  border: none;
  border-radius: 6px;

  font-size: 0.75rem;
  color: ${(props) => props.theme["white-100"]};
  background: ${(props) => props.theme["yellow-300"]};

  &:hover {
    background: ${(props) => props.theme["yellow-200"]};
  }
`;

export const PaymentErrorMessage = styled.p`
  font-family: "Roboto", sans-serif;

  font-weight: 400;
  color: red;
`;
