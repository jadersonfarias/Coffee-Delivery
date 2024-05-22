import {
  Container,
  LayoutCoffeeContainer,
  LayoutCoffeeIcons,
  LayoutCoffeeImg,
  LayoutCoffeeText,
  CoffeeList,
} from "./styles";
import coffeelayouts from "../../assets/coffee-layout.svg";
import { useTheme } from "styled-components";
import { Card } from "../../components/Card";
import { coffees } from "../../../data.json";

import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function Home() {
  const theme = useTheme();
  return (
    <Container>
      <LayoutCoffeeContainer>
        <LayoutCoffeeText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <LayoutCoffeeIcons>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme["white-100"]}
                style={{ backgroundColor: theme["yellow-300"] }}
              />
              <span>Compra simples e segura</span>
            </div>

            <div>
              <Timer
                size={32}
                weight="fill"
                color={theme["white-100"]}
                style={{ backgroundColor: theme["yellow-200"] }}
              />
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <Package
                size={32}
                weight="fill"
                color={theme["white-100"]}
                style={{ backgroundColor: theme["gray-300"] }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <Coffee
                size={32}
                weight="fill"
                color={theme["white-100"]}
                style={{ backgroundColor: theme["purple-200"] }}
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </LayoutCoffeeIcons>
        </LayoutCoffeeText>
        <LayoutCoffeeImg src={coffeelayouts} />
      </LayoutCoffeeContainer>
      <CoffeeList>
   
        <h2 >Nossos cafés</h2>
        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </Container>
  );
}
