'use client'

import { useCart } from '@/contexts/cartContext'
import { Trash2, Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const AsideCheckout = ({ onClick }: { onClick: () => void }) => {
  const DELIVERY_PRICE = 3.5

  const {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleRemoveItemDirectly,
  } = useCart()

  const [total, setTotal] = useState(0)

  const router = useRouter()

  useEffect(() => {
    if (cart.length === 0) {
      return router.push('/')
    }

    const totalValue = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)

    setTotal(totalValue)
  }, [cart, router])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  return (
    <aside className="min-w-[448px]">
      <h2 className="font-baloo2 font-bold text-title_XS mb-5 ">
        Cafés selecionados
      </h2>
      <div className="bg-baseBlackScale-base_card w-full rounded-[16px_3rem] p-10  ">
        <div className="overflow-auto">
          <ul className="w-full space-y-6">
            {cart.map((i) => (
              <li
                key={i.id}
                className="flex w-full justify-between items-center border-b
                  border-b-blackbbbg-baseBlackScale-base_buttom pb-6"
              >
                <Image
                  alt=""
                  src={i.image}
                  width={64}
                  height={64}
                  quality={100}
                />
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg">{i.title}</h3>
                  <div className="flex gap-2">
                    <div className="flex items-center  ">
                      <button
                        onClick={() => handleRemoveFromCart(i)}
                        type="button"
                        className="bg-[#E6E5E5] rounded-l-md py-2 px-1 w-6 h-9
                        text-purplePesonalized-300 flex justify-center
                          items-center text-lg active:bg-baseBlackScale-100 "
                      >
                        <Minus />
                      </button>
                      <span
                        className="bg-[#E6E5E5] w-6 h-9 flex
                      justify-center items-center text-base "
                      >
                        {i.quantity}
                      </span>
                      <button
                        onClick={() => handleAddToCart(i, 1)}
                        type="button"
                        className="bg-[#E6E5E5] rounded-r-md py-2 px-1 w-6 h-9
                    text-purplePesonalized-300 flex justify-center items-center
                      text-lg active:bg-baseBlackScale-100 "
                      >
                        <Plus />
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItemDirectly(i)}
                      className="p-1 bg-baseBlackScale-base_buttom flex items-center rounded-md"
                    >
                      <Trash2
                        size={20}
                        className="text-purplePesonalized-300 mr-2"
                      />
                      remover
                    </button>
                  </div>
                </div>
                <span className="font-semibold text-base self-start">
                  R$ {i.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between mt-6">
          <span className="text-baseBlackScale-base_text text-sm">
            Total de itens
          </span>
          <span className="text-baseBlackScale-base_text text-sm">
            {formatPrice(total)}
          </span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-baseBlackScale-base_text text-sm">Entrega</span>
          <span className="text-baseBlackScale-base_text text-sm">
            {formatPrice(DELIVERY_PRICE)}
          </span>
        </div>
        <div className="flex justify-between mt-2">
          <strong className="text-baseBlackScale-base_subtitle text-base">
            Total
          </strong>
          <strong className="text-baseBlackScale-base_subtitle text-base">
            {formatPrice(total + DELIVERY_PRICE)}
          </strong>
        </div>
        <button
          onClick={onClick}
          className="bg-yellowPesonalized-200 active:bg-yellowPesonalized-300
              transition-colors duration-200 text-white w-full
          h-[2.875rem] rounded-lg mt-4"
        >
          confirmar pedido
        </button>
      </div>
    </aside>
  )
}
