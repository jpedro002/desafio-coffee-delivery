'use client'

import { FormState, UseFormRegister } from 'react-hook-form'
import { FormFields } from '../page'

interface FormCheckoutProps {
  formState: FormState<FormFields>
  register: UseFormRegister<FormFields>
}

export const FormCheckout = ({ formState, register }: FormCheckoutProps) => {
  const { errors } = formState
  return (
    <form className="flex flex-wrap flex-col space-y-4 mt-8">
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Digite seu CEP"
          className="w-[200px] h-[2.625rem] rounded-lg border-[1px] bg-baseBlackScale-base_input
                  p-2 placeholder:text-baseBlackScale-base_label px-2 py-1"
          {...register('zipCode')}
        />
        {errors.zipCode && (
          <p className="text-red-500 mt-2">{errors.zipCode.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Rua"
          className="w-full h-[2.625rem] rounded-lg border-[1px] bg-baseBlackScale-base_input
                  p-2 placeholder:text-baseBlackScale-base_label px-2 py-1"
          {...register('street')}
        />
        {errors.street && (
          <p className="text-red-500 mt-2">{errors.street.message}</p>
        )}
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Número"
            className="w-[200px] h-[2.625rem] rounded-lg border-[1px] bg-baseBlackScale-base_input
                p-2 placeholder:text-baseBlackScale-base_label px-2 py-1"
            {...register('number')}
          />
          {errors.number && (
            <p className="text-red-500 mt-2">{errors.number.message}</p>
          )}
        </div>
        <input
          type="text"
          placeholder="Complemento"
          className="w-full h-[2.625rem] rounded-lg border-[1px] bg-baseBlackScale-base_input
              p-2 placeholder:text-baseBlackScale-base_label px-2 py-1"
          {...register('complement')}
        />
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Bairro"
            className="w-[200px] h-[2.625rem] rounded-lg border-[1px] bg-baseBlackScale-base_input
                p-2 placeholder:text-baseBlackScale-base_label px-2 py-1"
            {...register('district')}
          />
          {errors.district && (
            <p className="text-red-500 mt-2">{errors.district.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Cidade"
            className="w-[13,25rem] h-[2.625rem] rounded-lg border-[1px]
                  bg-baseBlackScale-base_input p-2 placeholder:text-baseBlackScale-base_label px-2 py-1"
            {...register('city')}
          />
          {errors.city && (
            <p className="text-red-500 mt-2">{errors.city.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Estado"
            className="w-full h-[2.625rem] rounded-lg border-[1px] bg-baseBlackScale-base_input
                p-2 placeholder:text-baseBlackScale-base_label px-2 py-1"
            {...register('state')}
          />
          {errors.state && (
            <p className="text-red-500 mt-2">{errors.state.message}</p>
          )}
        </div>
      </div>
    </form>
  )
}
