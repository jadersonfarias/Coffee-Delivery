import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "@phosphor-icons/react";
import {
  Container,
  InfoContainer,
  PaymentInformation,
  AddressHeading,
  AddressForm,
  SelectedCoffee,
  Ordem,
  OrderedCoffee,
  InfoCoffee,
  CheckoutButton,
  AddressContainer,
  PaymentErrorMessage,
} from "./styles";

import { Fragment } from "react";

import { zodResolver } from "@hookform/resolvers/zod"; //resolve  a conexão entre o hook forme e o zod
import * as zod from "zod"; //pegando o zod

import { useForm, SubmitHandler } from "react-hook-form";
import { coffees } from "../../../data.json";
import { Input } from "../../components/Input";
import { QualityCoffee } from "../../components/QuantityCoffee";
import { Radio } from "../../components/Radio";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeContext";

type FormInputs = {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
};

const newOrder = zod.object({
  cep: zod.number({ invalid_type_error: "Informe o CEP" }),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.string().min(1, "Informe o número"),
  fullAddress: zod.string(),
  neighborhood: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  state: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export type OrderInfo = zod.infer<typeof newOrder>;

const shippingPrice = 3.5;

export function Checkout() {
  const {
    cart,
    incrementItemQuantity,
    decrementItemQuantity,
    checkout,
    removeItem,
  } = useContext(CoffeeContext);

  //console.log(cart)

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error("Invalid coffee.");
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  });

  const selectedPaymentMethod = watch("paymentMethod");

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId);
    console.log(itemId);
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId);
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId);
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert("É preciso ter pelo menos um item no carrinho");
    }
    checkout(data);
  };
  

  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <form onSubmit={handleSubmit(handleOrderCheckout)} id="order">
          <AddressContainer>
            <AddressHeading>
              <h1>
                <MapPinLine size={32} /> Endereço de Entrega
              </h1>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </AddressHeading>
            <AddressForm>
              <Input
                placeholder="CEP"
                error={errors.cep}
                containerProps={{ style: { gridArea: "cep" } }}
                {...register("cep", { valueAsNumber: true })}
              />
              <Input
                placeholder="Rua"
                containerProps={{ style: { gridArea: "street" } }}
                {...register("street")}
                error={errors.street}
              />
              <Input
                placeholder="Número"
                containerProps={{ style: { gridArea: "number" } }}
                {...register("number")}
                error={errors.number}
              />
              <Input
                placeholder="Complementos"
                containerProps={{ style: { gridArea: "fullAddress" } }}
                {...register("fullAddress")}
                error={errors.fullAddress}
              />
              <Input
                placeholder="Bairro"
                containerProps={{ style: { gridArea: "neighborhood" } }}
                {...register("neighborhood")}
                error={errors.neighborhood}
              />
              <Input
                placeholder="Cidade"
                containerProps={{ style: { gridArea: "city" } }} //serve para botar a area no grid
                {...register("city")}
                error={errors.city}
              />
              <Input
                placeholder="UF"
                containerProps={{ style: { gridArea: "state" } }}
                {...register("state")}
                error={errors.state}
              />
            </AddressForm>
          </AddressContainer>

          <PaymentInformation>
            <h1>
              <CurrencyDollar size={25} />
              Pagamento
            </h1>
            <p>
              {" "}
              O pagamento é feito na entrega. Escolha a forma que deseja pagar{" "}
            </p>
            <div>
              <Radio
                isSelected={selectedPaymentMethod === "credit"}
                {...register("paymentMethod")}
                value="credit"
              >
                <CreditCard size={16} />
                <span>Cartão de Crédito</span>
              </Radio>

              <Radio
                isSelected={selectedPaymentMethod === "debit"}
                {...register("paymentMethod")}
                value="debit"
              >
                <Bank size={16} />
                <span>Cartão de débito</span>
              </Radio>

              <Radio
                isSelected={selectedPaymentMethod === "cash"}
                {...register("paymentMethod")}
                value="cash"
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
            </div>

            {errors.paymentMethod ? (
              <PaymentErrorMessage role="alert">
                {errors.paymentMethod.message}
              </PaymentErrorMessage>
            ) : null}
          </PaymentInformation>
        </form>
      </InfoContainer>

      <SelectedCoffee>
        <h2>Cafés selecionados</h2>
        <Ordem>
          {coffeesInCart.map((coffee) => (
            <Fragment key={coffee.id}>
              <OrderedCoffee>
                <img src={coffee.image} alt="" />
                <div id="box-span">
                  <span>{coffee.title}</span>
                  <div id="box-button">
                    <QualityCoffee
                      quantity={coffee.quantity}
                      incrementQuantity={() => handleItemIncrement(coffee.id)}
                      decrementQuantity={() => handleItemDecrement(coffee.id)}
                    />
                    <button onClick={() => handleItemRemove(coffee.id)}>
                      <Trash />
                      <span>Remover</span>
                    </button>
                  </div>
                </div>
                <aside> R$ {coffee.price?.toFixed(2)}</aside>
              </OrderedCoffee>
            </Fragment>
          ))}
        </Ordem>

        <InfoCoffee>
          <div>
            <span>Total de itens</span>
            <span>
              {new Intl.NumberFormat("pt-br", {
                currency: "BRL",
                style: "currency",
              }).format(totalItemsPrice)}
            </span>
          </div>
          <div>
            <span>Entrega</span>
            <span>
              {new Intl.NumberFormat("pt-br", {
                currency: "BRL",
                style: "currency",
              }).format(shippingPrice)}
            </span>
          </div>
          <div>
            <span>Total</span>
            <span>
              {new Intl.NumberFormat("pt-br", {
                currency: "BRL",
                style: "currency",
              }).format(totalItemsPrice + shippingPrice)}
            </span>
          </div>

          <CheckoutButton type="submit" form="order">
            <h1>Confirmar Pedido</h1>
          </CheckoutButton>
        </InfoCoffee>
      </SelectedCoffee>
    </Container>
  );
}
