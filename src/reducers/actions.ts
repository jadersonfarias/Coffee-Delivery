// Importação de tipos específicos do 'react-router-dom'
import { NavigateFunction } from 'react-router-dom'
// Importação do tipo OrderInfo de um arquivo específico
import { OrderInfo } from '../Pages/Checkout'
// Importação do tipo Item de um arquivo chamado 'reducer'
import { Item } from './reducer'

// Enumeração que define os diferentes tipos de ações possíveis
export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

// Definição do tipo Actions que cobre todas as ações possíveis
export type Actions =
  // Ação para adicionar um item
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: Item
      }
    }
  // Ações para remover, incrementar ou decrementar a quantidade de um item
  | {
      type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_ITEM
      payload: {
        itemId: Item['id']
      }
    }
  // Ação para finalizar a compra (checkout) do carrinho
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: OrderInfo
        callback: NavigateFunction
      }
    }

// Função que cria uma ação para adicionar um item
export function addItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions // Garante que o retorno esteja de acordo com o tipo Actions
}

// Função que cria uma ação para remover um item
export function removeItemAction(itemId: Item['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies Actions // Garante que o retorno esteja de acordo com o tipo Actions
}

// Função que cria uma ação para incrementar a quantidade de um item
export function incrementItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions // Garante que o retorno esteja de acordo com o tipo Actions
}

// Função que cria uma ação para decrementar a quantidade de um item
export function decrementItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions // Garante que o retorno esteja de acordo com o tipo Actions
}

// Função que cria uma ação para finalizar a compra (checkout)
export function checkoutCartAction(
  order: OrderInfo,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  } satisfies Actions // Garante que o retorno esteja de acordo com o tipo Actions
}
