'use client'

import { useCart } from '@/contexts/cartContext'
import { ShoppingCart } from 'lucide-react'

export const CartQuantiy = () => {
  const { cart } = useCart()

  // TODO: Add a badge to show the quantity of products in the cart

  return (
    <div
      className="flex justify-between items-center
           bg-yellowPesonalized-100 p-2 rounded-md text-yellowPesonalized-300"
    >
      <ShoppingCart className="w-5 h-w-5 " />
      {cart.length}
    </div>
  )
}
