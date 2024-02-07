import { Product } from '@/data'

type ADD_TO_CART = {
  type: 'ADD_TO_CART'
  payload: { product: Product; quantity: number }
}

type REMOVE_FROM_CART = {
  type: 'REMOVE_FROM_CART'
  payload: { product: Product }
}

type REMOVE_ITEM_DIRECTLY = {
  type: 'REMOVE_ITEM_DIRECTLY'
  payload: { product: Product }
}

type CLEAR_CART = {
  type: 'CLEAR_CART'
}

type CartAction =
  | ADD_TO_CART
  | REMOVE_FROM_CART
  | REMOVE_ITEM_DIRECTLY
  | CLEAR_CART

const cartReducer = (cart: Product[], action: CartAction) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const itemInCart = cart.find(
        (item) => item.id === action.payload.product.id,
      )

      if (itemInCart) {
        return cart.map((item) =>
          item.id === action.payload.product.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item,
        )
      } else {
        return [
          ...cart,
          { ...action.payload.product, quantity: action.payload.quantity },
        ]
      }
    }
    case 'REMOVE_FROM_CART': {
      const itemInCart = cart.find(
        (item) => item.id === action.payload.product.id,
      )
      if (itemInCart?.quantity === 1) {
        return cart.filter((item) => item.id !== action.payload.product.id)
      } else {
        return cart.map((item) =>
          item.id === action.payload.product.id
            ? { ...item, quantity: item.quantity ? item.quantity - 1 : 0 }
            : item,
        )
      }
    }
    case 'REMOVE_ITEM_DIRECTLY': {
      return cart.filter((item) => item.id !== action.payload.product.id)
    }
    case 'CLEAR_CART': {
      return (cart = [])
    }
    default:
      return cart
  }
}

export { cartReducer }
