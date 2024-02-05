import { CardProduct } from './_components/CardProduct'
import { HeroSection } from './_components/HeroSection'
import { dataProducts } from '@/data'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="p-5 max-w-[1160px] mx-auto    ">
        <h2 className="font-bold text-title_L font-baloo2 mb-16">
          Nossos cafés
        </h2>
        <div className="flex flex-wrap  gap-8  ">
          {dataProducts.map((item) => (
            <CardProduct key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  )
}
