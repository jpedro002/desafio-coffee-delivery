'use client'

import { Product } from '@/data'
import { cartReducer } from '@/reducers/cartReducer'
import { ReactNode, createContext, useContext, useReducer } from 'react'

interface CartContext {
  cart: Product[]
  handleAddToCart: (product: Product, quantity: number) => void
  handleRemoveFromCart: (product: Product) => void
  handleRemoveItemDirectly: (product: Product) => void
  handleClearCart: () => void
}

const cartContext = createContext({} as CartContext)

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dipachCart] = useReducer(cartReducer, [] as Product[])

  const handleAddToCart = (product: Product, quantity: number) => {
    dipachCart({ type: 'ADD_TO_CART', payload: { product, quantity } })
  }

  const handleRemoveFromCart = (product: Product) => {
    dipachCart({ type: 'REMOVE_FROM_CART', payload: { product } })
  }

  const handleRemoveItemDirectly = (product: Product) => {
    dipachCart({ type: 'REMOVE_ITEM_DIRECTLY', payload: { product } })
  }

  const handleClearCart = () => {
    dipachCart({ type: 'CLEAR_CART' })
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        handleRemoveItemDirectly,
        handleClearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  )
}

const useCart = () => useContext(cartContext)

export { CartProvider, useCart }
