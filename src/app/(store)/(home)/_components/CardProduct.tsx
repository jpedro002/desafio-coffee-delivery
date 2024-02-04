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
      className="bg-baseBlackScale-base_card w-64  px-5 pb-5 rounded-[8px_3rem_8px_3rem]
     flex flex-col items-center text-center     "
    >
      <Image
        alt=""
        src={img}
        width={120}
        height={120}
        quality={100}
        className="-mt-5"
      />
      <div className="flex gap-1 ">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 mt-3 rounded-full bg-yellowPesonalized-100
         text-yellowPesonalized-300 text-[0.625rem] text-center font-roboto font-normal "
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-baseBlackScale-base_subtitle text-title_S font-baloo2 font-bold mt-4 ">
        {title}
      </h3>
      <p className="text-baseBlackScale-base_label mt-2  text-text_S  ">
        {description}
      </p>
      <div className="flex items-center justify-between w-full  mt-8 ">
        <span className=" text-text_S">
          R$
          <strong
            className="text-title_M font-bold font-roboto text-baseBlackScale-base_title
           ml-1"
          >
            {price}
          </strong>
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
