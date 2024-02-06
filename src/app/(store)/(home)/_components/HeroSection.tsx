import Image from 'next/image'
import { Package, Coffee, Clock1, ShoppingCart } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section
      className="flex justify-between py-[92px] px-5 gap-4 max-w-[1160px] mx-auto flex-col lg:flex-row items-center lg:items-start
    "
    >
      <article
        className=" flex flex-col gap-4 justify-between items-start pb-4
      max-w-[588px]
      "
      >
        <header className="space-y-4">
          <h1 className="font-bold text-title_XL text-baseBlackScale-base_title font-baloo2  ">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-baseBlackScale-base_subtitle font-roboto text-text_L font-normal ">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </header>
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="flex flex-col gap-4">
            <div
              className="flex items-center text-baseBlackScale-base_text
            text-text_M font-normal font-roboto"
            >
              <div
                className="p-1.5 mr-2 rounded-full bg-yellowPesonalized-300
                    text-white flex justify-center items-center"
              >
                <ShoppingCart size={20} />
              </div>
              Compra simples e segura
            </div>
            <div
              className="flex items-center text-baseBlackScale-base_text
            text-text_M font-normal font-roboto"
            >
              <div
                className="p-1.5 mr-2 rounded-full bg-yellowPesonalized-200
                    text-white flex justify-center items-center"
              >
                <Clock1 size={20} />
              </div>
              Entrega rápida e rastreada
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="flex items-center text-baseBlackScale-base_text
            text-text_M font-normal font-roboto"
            >
              <div
                className="p-1.5 mr-2 rounded-full bg-baseBlackScale-base_text
        text-white flex justify-center items-center"
              >
                <Package size={20} />
              </div>
              Embalagem mantém o café intacto
            </div>

            <div
              className="flex items-center text-baseBlackScale-base_text
            text-text_M font-normal font-roboto"
            >
              <div
                className="p-1.5 mr-2 rounded-full bg-purplePesonalized-300
        text-white flex justify-center items-center"
              >
                <Coffee size={20} />
              </div>
              O café chega fresquinho até você
            </div>
          </div>
        </div>
      </article>
      <aside className=" flex items-center justify-center">
        <Image alt="" src={'/coffeeCup.png'} width={476} height={360} />
      </aside>
    </section>
  )
}
