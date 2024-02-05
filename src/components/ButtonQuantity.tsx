'use client'

import { useQuantityProduct } from '@/contexts/quantityProductContext'

export const ButtonQuantity = () => {
  const { handleAddItem, handleRemoveItem, itemQuantity } = useQuantityProduct()

  return (
    <div className="flex items-center  ">
      <button
        onClick={() => handleRemoveItem()}
        type="button"
        className="bg-[#E6E5E5] rounded-l-md py-2 px-1 w-6 h-9
      text-purplePesonalized-300 flex justify-center items-center
       text-lg active:bg-baseBlackScale-100 "
      >
        -
      </button>
      <span
        className="bg-[#E6E5E5] w-6 h-9 flex justify-center items-center
   text-base "
      >
        {itemQuantity}
      </span>
      <button
        onClick={() => handleAddItem()}
        type="button"
        className="bg-[#E6E5E5] rounded-r-md py-2 px-1 w-6 h-9
      text-purplePesonalized-300 flex justify-center items-center
       text-lg active:bg-baseBlackScale-100 "
      >
        +
      </button>
    </div>
  )
}
