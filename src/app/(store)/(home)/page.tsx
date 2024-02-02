import { CardProduct } from './_components/CardProduct'
import { HeroSection } from './_components/HeroSection'
import { dataProducts } from '@/data'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="py-5     ">
        <h2 className="font-bold text-xl mb-8">Nossos cafés</h2>
        <div className="grid gap-8 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {dataProducts.map((item) => (
            <CardProduct
              key={item.id}
              description={item.description}
              img={item.image}
              price={item.price}
              tags={item.tags}
              title={item.title}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
