import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  padding-bottom: 4rem ;
`;

export const LayoutCoffeeContainer = styled.div`
  max-width: 78rem;
  padding: 85px 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  gap: 4rem;

  @media (max-width: 1024px) {
   flex-direction: column;
   margin: 0 1rem;

  }
`;

export const LayoutCoffeeText = styled.div`
  display: flex;
  flex-direction: column;

  gap: 26px;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;

    color: ${(props) => props.theme["gray-500"]};
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 1.35rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme["gray-400"]};
  }
`;

export const LayoutCoffeeIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
 

  span {
    font-family: "Roboto", sans-serif;
    font-size: 0.90rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme["gray-200"]};
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  svg {
    padding: 8px;
    border-radius: 999px;
  }


`;

export const LayoutCoffeeImg = styled.img`
  max-height: 544px;
  width: 60vw;
  object-fit: cover;
`;

export const CoffeeList = styled.div`
  max-width: 72rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;

    color: ${(props) => props.theme["gray-500"]};
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 30px;
    grid-column-gap: 20px;
  }

  @media (max-width: 1024px) {
   div {
    grid-template-columns: 1fr 1fr  ;
   }

  }
`;
