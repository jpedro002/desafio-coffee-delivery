'use client'

import { MapPin, Clock, DollarSignIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function SuccessPage() {
  const { slug } = useParams()
  const [adress, setAdress] = useState<string[]>([])

  const router = useRouter()

  useEffect(() => {
    if (Array.isArray(slug)) {
      const decodedSlug = slug.map((item) => decodeURIComponent(item).trim())
      return setAdress(decodedSlug)
    } else return router.push('/')
  }, [slug, router])

  return (
    <main className="">
      <div className="max-w-[1160px] mx-auto px-5 py-10 flex justify-between">
        <article className="max-w-[526px] min-w-[526px]">
          <h1
            className="text-title_L font-bold mb-1
             text-yellowPesonalized-300 font-baloo2"
          >
            Uhu! Pedido confirmado
          </h1>
          <span className="font-normal text-text_L text-baseBlackScale-base_subtitle">
            Agora é só aguardar que logo o café chegará até você
          </span>
          <div
            className="rounded-[1rem_3rem] border-2 border-yellowPesonalized-200
           p-10 space-y-8 mt-8  "
          >
            <div
              className="flex items-center text-baseBlackScale-base_text
            text-text_M font-normal font-roboto"
            >
              <div
                className="p-1.5 mr-2 rounded-full bg-purplePesonalized-300
                    text-white flex justify-center items-center "
              >
                <MapPin size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-baseBlackScale-base_text   ">
                  Entrega em <strong>{adress[1] + ' ' + adress[2]}</strong>
                </span>
                <span>
                  {adress[4]} - {adress[5]}, {adress[6]}
                </span>
              </div>
            </div>
            <div
              className="flex items-center text-baseBlackScale-base_text
            text-text_M font-normal font-roboto"
            >
              <div
                className="p-1.5 mr-2 rounded-full bg-yellowPesonalized-200
                    text-white flex justify-center items-center "
              >
                <Clock size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-baseBlackScale-base_text   ">
                  Previsão de entrega
                </span>
                <strong>20 min - 30 min</strong>
              </div>
            </div>
            <div
              className="flex items-center text-baseBlackScale-base_text
            text-text_M font-normal font-roboto"
            >
              <div
                className="p-1.5 mr-2 rounded-full bg-yellowPesonalized-300
                    text-white flex justify-center items-center "
              >
                <DollarSignIcon size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-baseBlackScale-base_text   ">
                  Pagamento na entrega
                </span>
                <strong>{adress[6]}</strong>
              </div>
            </div>
          </div>
        </article>
        <Image
          alt=""
          src="/motoca.png"
          width={492}
          height={293}
          className="self-end  "
        />
      </div>
    </main>
  )
}
