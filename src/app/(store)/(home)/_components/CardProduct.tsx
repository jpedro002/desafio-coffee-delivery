import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { ButtonQuantity } from '@/components/ButtonQuantity'

export const CardProduct = ({
  img,
  tags,
  title,
  description,
  price,
}: {
  img: string
  tags: string[]
  title: string
  description: string
  price: number
}) => {
  return (
    <div
      className="bg-[#F3F2F2] w-64 h-[19.375rem] px-5 pb-5 rounded-[0_3rem_0_3rem]
     flex flex-col items-center text-center     "
    >
      <Image
        alt=""
        src={img}
        width={100}
        height={100}
        quality={100}
        className="-mt-5"
      />
      <div className="flex gap-1 ">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 mt-3 rounded-full bg-yellowPesonalized-100
         text-yellowPesonalized-300 text-sm text-center "
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-baseBlackScale-400 text-lg font-bold mt-4 ">
        {title}
      </h3>
      <p className="text-baseBlackScale-200 mt-2 min-h-8 max-h-8 text-sm  ">
        {description}
      </p>
      <div className="flex items-center gap-4  mt-8 ">
        <span className="text-baseBlackScale-300 text-sm">
          R$
          <strong className="text-lg font-bold ml-1">{price}</strong>
        </span>
        <ButtonQuantity />
        <button
          type="button"
          className="bg-purplePesonalized-300 text-white w-9 h-9 rounded-md
          flex justify-center items-center active:bg-purplePesonalized-200
          transition-colors duration-200"
        >
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  )
}
