'use client'

import { useCart } from '@/contexts/cartContext'
import { ShoppingCart } from 'lucide-react'

export const CartQuantiy = () => {
  const { cart } = useCart()

  return (
    <div
      className="flex justify-between items-center
           bg-yellowPesonalized-100 p-2 rounded-md text-yellowPesonalized-300 relative"
    >
      <ShoppingCart className="w-5 h-w-5 " />
      {cart.length ? (
        <span
          className="text-sm p-2 rounded-full flex justify-center items-center
      bg-yellowPesonalized-300 text-white w-5 h-5 absolute -top-2 -right-2
      "
        >
          {cart.length}
        </span>
      ) : null}
    </div>
  )
}
