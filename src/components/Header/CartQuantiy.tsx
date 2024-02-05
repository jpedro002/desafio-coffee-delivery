'use client'

import { useCart } from '@/contexts/cartContext'
import { ShoppingCart } from 'lucide-react'
import { useEffect } from 'react'

export const CartQuantiy = () => {
  const { cart } = useCart()

  useEffect(() => {
    console.log('cart', cart)
  }, [cart])

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
