import { createContext, ReactNode, useReducer, useEffect} from "react";
//import { props } from "../components/Card";

import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from "../reducers/actions";

import { cartReducer, Item, Order } from "../reducers/reducer";
import { OrderInfo } from "../Pages/Checkout";
import { useNavigate } from "react-router-dom";

interface CoffeeContextType {
  cart: Item[];
  orders: Order[];
  addItem: (item: Item) => void;
  removeItem: (itemId: Item["id"]) => void;
  decrementItemQuantity: (itemId: Item["id"]) => void;
  incrementItemQuantity: (itemId: Item["id"]) => void;
  checkout: (order: OrderInfo) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [], //preciso passar aki o que ele vai receber
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return cartState;
    }
  );
  const navigate = useNavigate();

  const { cart, orders } = cartState; //pega informações do reducer

  function addItem(item: Item) {
    dispatch(addItemAction(item));
  }

  function removeItem(itemId: Item["id"]) {
    dispatch(removeItemAction(itemId));
  }

  function checkout(order: OrderInfo) {
    dispatch(checkoutCartAction(order, navigate));
  }

  function incrementItemQuantity(itemId: Item["id"]) {
    dispatch(incrementItemQuantityAction(itemId));
  }

  function decrementItemQuantity(itemId: Item["id"]) {
    dispatch(decrementItemQuantityAction(itemId));
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState);

      localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
    }
  }, [cartState]);

  return (
    <CoffeeContext.Provider
      value={{
        addItem,
        cart,
        orders,
        decrementItemQuantity,
        incrementItemQuantity,
        removeItem,
        checkout,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
