'use client'

import { useCart } from '@/contexts/cartContext'
import { useQuantityProduct } from '@/contexts/quantityProductContext'
import { Product } from '@/data'
import { ShoppingCart } from 'lucide-react'

export const ButtonCartAdd = ({ product }: { product: Product }) => {
  const { handleAddToCart } = useCart()
  const { itemQuantity, handleResetItem } = useQuantityProduct()

  const handleCartAdd = (product: Product) => {
    console.log('product', product)
    console.log('itemQuantity', itemQuantity)

    handleAddToCart(product, itemQuantity)
    handleResetItem()
  }

  return (
    <button
      onClick={() => handleCartAdd(product)}
      type="button"
      className="bg-purplePesonalized-300 text-white w-9 h-9 rounded-md
          flex justify-center items-center active:bg-purplePesonalized-200
          transition-colors duration-200"
    >
      <ShoppingCart size={18} />
    </button>
  )
}
