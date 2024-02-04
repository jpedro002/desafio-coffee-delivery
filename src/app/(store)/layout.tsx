import { Header } from '@/components/Header'
import { ReactNode } from 'react'

export default function DefaultStoreLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div
      className="grid grid-rows-[min-content_1fr] bg-background
     min-h-screen  "
    >
      <Header />
      {children}
    </div>
  )
}
