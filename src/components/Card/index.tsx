import {
  Container,
  ImgCard,
  DescriptionCoffee,
  TagCoffee,
  TitleCoffee,
  CoffeeControl,
  CoffeePrice,
  CoffeeContainerButton,
} from "./styles";

import { QualityCoffee } from "../QuantityCoffee";
import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { useState, useEffect, useContext } from "react";
import { CoffeeContext } from "../../context/CoffeContext";

 export type props = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

export function Card({ coffee }: props) {
  const theme = useTheme()
  const {addItem} = useContext(CoffeeContext)

  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)

  
  function handleAddItem() {
    addItem({ id: coffee.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  return (
    <Container >
      <ImgCard src={coffee.image} alt={coffee.title} />
      <TagCoffee>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagCoffee>
      <TitleCoffee>{coffee.title}</TitleCoffee>
      <DescriptionCoffee>{coffee.description}</DescriptionCoffee>

      <CoffeeControl>
        <CoffeePrice>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </CoffeePrice>
        <CoffeeContainerButton>
          <QualityCoffee 
              quantity={quantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
          />

          <button disabled={isItemAdded} onClick={handleAddItem}>
          {isItemAdded ? (
              <CheckFat
                weight="fill"
                size={22}
                color={theme["white-200"]}
              />
            ) : (
            <ShoppingCart size={22}  weight="fill"  color={theme["yellow-white"]}/>
          )}
          </button>
        </CoffeeContainerButton>
      </CoffeeControl>
    </Container>
  );
}
