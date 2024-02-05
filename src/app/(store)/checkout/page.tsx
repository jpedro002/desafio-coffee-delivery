'use client'

import {
  MapPin,
  DollarSign,
  CreditCard,
  Landmark,
  Banknote,
} from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormCheckout } from './_components/FormCheckout'
import { AsideCheckout } from './_components/AsideCheckout'
export interface FormFields {
  zipCode: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  state: string
}

const schema = z.object({
  zipCode: z.string().length(8, 'CEP deve conter 8 dígitos apenas numéricos'),
  street: z.string().min(1, 'campo obrigatório'),
  number: z.string().min(1, 'campo obrigatório'),
  complement: z.string().optional(),
  district: z.string().min(1, 'campo obrigatório'),
  city: z.string().min(1, 'campo obrigatório'),
  state: z.string().min(1, 'campo obrigatório'),
})

export const CheckoutPage = () => {
  const { register, handleSubmit, watch, setValue, formState } =
    useForm<FormFields>({
      defaultValues: {
        zipCode: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
      } as FormFields,
      resolver: zodResolver(schema),
    })

  const zipCode = watch('zipCode')

  useEffect(() => {
    if (zipCode?.length === 8) {
      fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
        .then((response) => response.json())
        .then((data) => {
          setValue('street', data.logradouro)
          setValue('district', data.bairro)
          setValue('city', data.localidade)
          setValue('state', data.uf)
          setValue('complement', data.complemento)
        })
    }
  }, [zipCode, setValue])

  const onsubmit = (data: FormFields) => {
    console.log(data)
  }

  return (
    <div className="flex gap-5 max-w-[1160px] mx-auto w-full py-10 px-5 justify-between  ">
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
          <FormCheckout formState={formState} register={register} />
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
      <AsideCheckout onClick={handleSubmit(onsubmit)} />
    </div>
  )
}
export default CheckoutPage
