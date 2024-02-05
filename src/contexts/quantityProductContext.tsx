'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface QuantityProductContextData {
  handleAddItem: () => void
  handleRemoveItem: () => void
  handleResetItem: () => void
  itemQuantity: number
}

const quantityProductContext = createContext({} as QuantityProductContextData)

const QuantityProductProvider = ({ children }: { children: ReactNode }) => {
  const [itemQuantity, setItemQuantity] = useState(1)

  const handleAddItem = () => {
    setItemQuantity((prev) => prev + 1)
  }

  const handleRemoveItem = () => {
    setItemQuantity((prev) => prev - 1)
  }

  const handleResetItem = () => {
    setItemQuantity(1)
  }

  return (
    <quantityProductContext.Provider
      value={{ handleAddItem, itemQuantity, handleRemoveItem, handleResetItem }}
    >
      {children}
    </quantityProductContext.Provider>
  )
}

const useQuantityProduct = () => useContext(quantityProductContext)

export { QuantityProductProvider, useQuantityProduct }
