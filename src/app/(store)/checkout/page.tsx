'use client'

import { ButtonQuantity } from '@/components/ButtonQuantity'
import {
  Trash2,
  MapPin,
  DollarSign,
  CreditCard,
  Landmark,
  Banknote,
} from 'lucide-react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

interface FormFields {
  zipCode: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  state: string
}

export const CheckoutPage = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {} as FormFields,
  })

  const onsubmit = (data: FormFields) => {
    console.log(data)
  }

  console.log(watch('zipCode'))

  return (
    <div className="flex gap-5 max-w-[1160px] mx-auto w-full py-10 px-5  ">
      <div className="min-w-[640px]">
        <h2 className="mb-5 font-baloo2 font-bold text-title_XS ">
          Complete seu pedido
        </h2>
        <div className="p-10 bg-baseBlackScale-base_card w-[40rem]  rounded-lg ">
          <div className="flex gap-2">
            <MapPin className="text-yellowPesonalized-200" />
            <div className="flex flex-col">
              <h4 className="text-xl">Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <form className="flex flex-wrap flex-col space-y-4 mt-8">
            <input
              type="text"
              placeholder="Digite seu CEP"
              className="w-[200px] h-[2.625rem] rounded-lg border-[1px] bg-baseBlackScale-base_input
                p-2 placeholder:text-baseBlackScale-base_label px-2 py-1"
              {...register('zipCode')}
            />
            <input
              type="text"
              placeholder="Rua"
              className="w-full h-[2.625rem] rounded-lg border-[1px] bg-baseBlackScale-base_input
                p-2 placeholder:text-baseBlackScale-base_label px-2 py-1"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Número"
                className="w-[200px] h-[2.625rem] rounded-lg border-[1px] bg-baseBlackScale-base_input
              p-2 placeholder:text-baseBlackScale-base_label px-2 py-1"
                {...register('number')}
              />
              <input
                type="text"
                placeholder="Complemento"
                className="w-full h-[2.625rem] rounded-lg border-[1px] bg-baseBlackScale-base_input
              p-2 placeholder:text-baseBlackScale-base_label px-2 py-1"
                {...register('complement')}
              />
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Bairro"
                className="w-[200px] h-[2.625rem] rounded-lg border-[1px] bg-baseBlackScale-base_input
              p-2 placeholder:text-baseBlackScale-base_label px-2 py-1"
                {...register('district')}
              />
              <input
                type="text"
                placeholder="Cidade"
                className="w-[13,25rem] h-[2.625rem] rounded-lg border-[1px]
                bg-baseBlackScale-base_input p-2 placeholder:text-baseBlackScale-base_label px-2 py-1"
                {...register('city')}
              />
              <input
                type="text"
                placeholder="Estado"
                className="w-full h-[2.625rem] rounded-lg border-[1px] bg-baseBlackScale-base_input
              p-2 placeholder:text-baseBlackScale-base_label px-2 py-1"
                {...register('state')}
              />
            </div>
          </form>
          <button onClick={handleSubmit(onsubmit)}>adfasdfas</button>
        </div>
        <div className="p-10 bg-baseBlackScale-base_card w-[40rem]  rounded-lg mt-3  ">
          <div className="flex flex-col gap-2">
            <div className="flex">
              <DollarSign className="text-purplePesonalized-300" />
              <div className="flex flex-col">
                <h4 className="text-xl">Pagamento</h4>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>
            <div className="flex gap-4 mt-6 items-center justify-center">
              <div
                className="bg-baseBlackScale-base_buttom w-[11.125rem] h-[3.1875rem] rounded-lg
              flex items-center gap-2 px-3 py-2 text-sm
              "
              >
                <CreditCard className="text-purplePesonalized-300" />
                <span>Cartão de crédito </span>
              </div>
              <div
                className="bg-baseBlackScale-base_buttom w-[11.125rem] h-[3.1875rem] rounded-lg
              flex items-center gap-2 px-3 py-2 text-sm
              "
              >
                <Landmark className="text-purplePesonalized-300" />
                <span>cartão de débito </span>
              </div>
              <div
                className="bg-baseBlackScale-base_buttom w-[11.125rem] h-[3.1875rem] rounded-lg
              flex items-center gap-2 px-3 py-2 text-sm
              "
              >
                <Banknote className="text-purplePesonalized-300" />
                <span>dinheiro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside className="min-w-[448px]">
        <h2 className="font-baloo2 font-bold text-title_XS mb-5 ">
          Cafés selecionados
        </h2>
        <div className="bg-baseBlackScale-base_card w-full rounded-[16px_3rem] p-10  ">
          <div className="overflow-auto">
            <ul className="w-full space-y-6">
              {Array.from({ length: 2 }, (_, i) => i).map((i) => (
                <li
                  key={i}
                  className="flex w-full justify-between items-center border-b
                  border-b-blackbbbg-baseBlackScale-base_buttom pb-6"
                >
                  <Image
                    alt=""
                    src={'/Image-1.png'}
                    width={64}
                    height={64}
                    quality={100}
                  />
                  <div className="flex flex-col">
                    <h3 className="font-bold text-lg">titulo</h3>
                    <div className="flex gap-2">
                      <ButtonQuantity />
                      <button className="p-1 bg-baseBlackScale-base_buttom flex items-center rounded-md">
                        <Trash2
                          size={20}
                          className="text-purplePesonalized-300 mr-2"
                        />
                        remover
                      </button>
                    </div>
                  </div>
                  <span className="font-semibold text-base self-start">
                    price
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
              R$ 100,00
            </span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-baseBlackScale-base_text text-sm">
              Entrega
            </span>
            <span className="text-baseBlackScale-base_text text-sm">
              R$ 100,00
            </span>
          </div>
          <div className="flex justify-between mt-2">
            <strong className="text-baseBlackScale-base_subtitle text-base">
              Total
            </strong>
            <strong className="text-baseBlackScale-base_subtitle text-base">
              R$ 100,00
            </strong>
          </div>
          <button
            className="bg-yellowPesonalized-200 active:bg-yellowPesonalized-300
              transition-colors duration-200 text-white w-full
          h-[2.875rem] rounded-lg mt-4"
          >
            confirmar pedido
          </button>
        </div>
      </aside>
    </div>
  )
}
export default CheckoutPage
