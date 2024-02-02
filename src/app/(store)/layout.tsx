import { Header } from '@/components/Header'
import { ReactNode } from 'react'

export default function DefaultStoreLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="grid grid-rows-[5rem_1fr] bg-background max-w-[1440px] min-h-screen px-4 sm:px-10 md:px-20 lg:px-40 mx-auto ">
      <Header />
      {children}
    </div>
  )
}
