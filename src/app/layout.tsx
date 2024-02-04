import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Roboto, Baloo_2 } from 'next/font/google'

import './globals.css'

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-baloo-2',
})

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Coffee Delivery',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${roboto.variable} ${baloo.variable}`}>
      <body className={` ${roboto.className} bg-baseBlackScale-background `}>
        {children}
      </body>
    </html>
  )
}
