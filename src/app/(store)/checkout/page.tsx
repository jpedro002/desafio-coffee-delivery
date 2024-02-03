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

export const checkoutPage = () => {
  return (
    <div className="grid grid-cols-10  ">
      <div className="col-span-6">
        <h2 className="font-bold text-xl mb-5 ">Complete seu pedido</h2>
        <div className="p-10 bg-[#F3F2F2] w-[40rem] h-[23.25rem] rounded-lg ">
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
              className="w-48 h-[2.625rem] rounded-lg border-[1px] bg-[#EDEDED]
                p-2 placeholder:text-baseBlackScale-200 px-2 py-1"
            />
            <input
              type="text"
              placeholder="Rua"
              className="w-full h-[2.625rem] rounded-lg border-[1px] bg-[#EDEDED]
                p-2 placeholder:text-baseBlackScale-200 px-2 py-1"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Número"
                className="w-48 h-[2.625rem] rounded-lg border-[1px] bg-[#EDEDED]
              p-2 placeholder:text-baseBlackScale-200 px-2 py-1"
              />
              <input
                type="text"
                placeholder="Complemento"
                className="w-full h-[2.625rem] rounded-lg border-[1px] bg-[#EDEDED]
              p-2 placeholder:text-baseBlackScale-200 px-2 py-1"
              />
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Bairro"
                className="w-48 h-[2.625rem] rounded-lg border-[1px] bg-[#EDEDED]
              p-2 placeholder:text-baseBlackScale-200 px-2 py-1"
              />
              <input
                type="text"
                placeholder="Cidade"
                className="w-[13,25rem] h-[2.625rem] rounded-lg border-[1px]
                bg-[#EDEDED] p-2 placeholder:text-baseBlackScale-200 px-2 py-1"
              />
              <input
                type="text"
                placeholder="Estado"
                className="w-full h-[2.625rem] rounded-lg border-[1px] bg-[#EDEDED]
              p-2 placeholder:text-baseBlackScale-200 px-2 py-1"
              />
            </div>
          </form>
        </div>
        <div className="p-10 bg-[#F3F2F2] w-[40rem] h-[12.975rem] rounded-lg mt-3  ">
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
                className="bg-[#E6E5E5] w-[11.125rem] h-[3.1875rem] rounded-lg
              flex items-center gap-2 px-3 py-2 text-sm
              "
              >
                <CreditCard className="text-purplePesonalized-300" />
                <span>Cartão de crédito </span>
              </div>
              <div
                className="bg-[#E6E5E5] w-[11.125rem] h-[3.1875rem] rounded-lg
              flex items-center gap-2 px-3 py-2 text-sm
              "
              >
                <Landmark className="text-purplePesonalized-300" />
                <span>cartão de débito </span>
              </div>
              <div
                className="bg-[#E6E5E5] w-[11.125rem] h-[3.1875rem] rounded-lg
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
      <aside className="col-span-4 ">
        <h2 className="font-bold text-xl mb-5 ">Cafés selecionados</h2>
        <div className="bg-[#F3F2F2] w-[28rem] h-[31.125rem] rounded-[16px_3rem] p-10  ">
          <div className="overflow-auto">
            <ul className="min-h-[240px] max-h-[240px]">
              {Array.from({ length: 2 }, (_, i) => i).map((i) => (
                <li
                  key={i}
                  className="flex w-full justify-between items-center border-b
      border-b-[#E6E5E5] py-6"
                >
                  <Image
                    alt=""
                    src={'/Image-1.png'}
                    width={70}
                    height={70}
                    quality={100}
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg">titulo</h3>
                    <div className="flex gap-2">
                      <ButtonQuantity />
                      <button className="p-1 bg-[#E6E5E5] flex items-center rounded-md">
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
          <div className="flex justify-between mt-2">
            <span className="text-baseBlackScale-300 text-lg">
              Total de itens
            </span>
            <span className="text-baseBlackScale-300 text-lg">R$ 100,00</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-baseBlackScale-300 text-lg">Entrega</span>
            <span className="text-baseBlackScale-300 text-lg">R$ 100,00</span>
          </div>
          <div className="flex justify-between mt-2">
            <strong className="text-baseBlackScale-300 text-2xl">Total</strong>
            <strong className="text-baseBlackScale-300 text-2xl">
              R$ 100,00
            </strong>
          </div>
          <button
            className="bg-yellowPesonalized-300 text-white w-full
          h-[2.75rem] rounded-lg mt-3"
          >
            confirmar pedido
          </button>
        </div>
      </aside>
    </div>
  )
}
export default checkoutPage
