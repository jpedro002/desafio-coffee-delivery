import { Header } from '@/components/Header/Header'
import { CartProvider } from '@/contexts/cartContext'
import { ReactNode } from 'react'

export default function DefaultStoreLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <CartProvider>
      <div className="grid grid-rows-[min-content_1fr] min-h-screen  ">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
