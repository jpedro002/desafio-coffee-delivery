import Image from 'next/image'
import Link from 'next/link'

import { MapPin } from 'lucide-react'
import { CartQuantiy } from './CartQuantiy'

export const Header = () => {
  return (
    <header
      className="flex justify-between items-center max-w-[1160px] mx-auto
    w-full py-6 px-5 "
    >
      <Link href={'/'}>
        <Image alt="sfdsd" src="/Logo.png" width={70} height={30} />
      </Link>
      <div className="flex gap-4">
        <div className="bg-purple-200 text-purplePesonalized-300 px-2 py-1.5 rounded-md flex items-center">
          <MapPin className="w-5 h-w-5 " />
          <h6 className="text-base">Porto Alegre, RS</h6>
        </div>
        <CartQuantiy />
      </div>
    </header>
  )
}
