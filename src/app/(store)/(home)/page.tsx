import Image from 'next/image'
import { Package, Coffee, Clock1, ShoppingCart } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <section className="flex py-16 gap-4 flex-col-reverse sm:flex-row ">
        <article className="basis-1/2 flex flex-col gap-4 justify-between items-start pb-4">
          <header className="space-y-4">
            <h3 className="font-bold text-xl text-justify">
              Encontre o café perfeito para qualquer hora do dia Com o Coffee
              Delivery você recebe seu café onde estiver, a qualquer hora
            </h3>
            <p className="text-base text-justify">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </header>
          <div
            className="grid
          grid-rows-4 gap-2
          md:grid-cols-2 md:grid-rows-2 md:gap-3"
          >
            <div className="flex items-center">
              <div
                className="p-1.5 mr-2 rounded-full bg-yellowPesonalized-300
              text-white flex justify-center items-center"
              >
                <ShoppingCart size={20} />
              </div>
              Compra simples e segura
            </div>
            <div className="flex items-center">
              <div
                className="p-1.5 mr-2 rounded-full bg-baseBlackScale-300
              text-white flex justify-center items-center"
              >
                <Package size={20} />
              </div>
              Embalagem mantém o café intacto
            </div>
            <div className="flex items-center">
              <div
                className="p-1.5 mr-2 rounded-full bg-yellowPesonalized-200
              text-white flex justify-center items-center"
              >
                <Clock1 size={20} />
              </div>
              Entrega rápida e rastreada
            </div>
            <div className="flex items-center">
              <div
                className="p-1.5 mr-2 rounded-full bg-purplePesonalized-300
              text-white flex justify-center items-center"
              >
                <Coffee size={20} />
              </div>
              O café chega fresquinho até você
            </div>
          </div>
        </article>
        <aside className="basis-1/2 flex items-center justify-center">
          <Image alt="" src={'/coffeeCup.png'} width={476} height={360} />
        </aside>
      </section>
    </main>
  )
}
