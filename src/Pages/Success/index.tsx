import {
  Container,
  ImageMotorcycleCourier,
  OrderConfirmedCoffee,
  TagCoffee,
} from "./styles";
import coffeeBike from "../../assets/coffee-bike.svg";
import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeContext";
import { useParams } from "react-router-dom";

export function Success() {
  const { orders } = useContext(CoffeeContext);
  const { orderId } = useParams();

  const orderInfo = orders.find((order) => order.id === Number(orderId));

  const paymentMethod = {
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
    cash: "Dinheiro",
  };
  const theme = useTheme();

  if (!orderInfo?.id) {
    return null;
  }

  return (
    <Container>
      <OrderConfirmedCoffee>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <TagCoffee>
          <div>
            <MapPin
              size={33}
              weight="fill"
              color={theme["white-100"]}
              style={{ backgroundColor: theme["purple-200"] }}
            />

            <div>
              <span>
                Entrega em{" "}
                <strong>
                  {orderInfo.street}, {orderInfo.number}
                </strong>
              </span>
              <span>
                {orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state}
              </span>
            </div>
          </div>

          <div>
            <Timer
              size={33}
              weight="fill"
              color={theme["white-100"]}
              style={{ backgroundColor: theme["yellow-200"] }}
            />
            <div>
              <span>Previsão de entrega</span>
              <strong>20 mim - 30 min</strong>
            </div>
          </div>

          <div>
            <CurrencyDollar
              size={33}
              weight="fill"
              color={theme["white-100"]}
              style={{ backgroundColor: theme["yellow-300"] }}
            />
            <div>
              <span>Pagamento na entrega</span>
              <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
            </div>
          </div>
        </TagCoffee>
      </OrderConfirmedCoffee>
      <ImageMotorcycleCourier src={coffeeBike} alt="Pedido concluído" />
    </Container>
  );
}
