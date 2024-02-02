import Image from 'next/image'
import Link from 'next/link'

import { MapPin, ShoppingCart } from 'lucide-react'

export const Header = () => {
  return (
    <header className="flex justify-between items-center ">
      <Link href={'/'}>
        <Image alt="sfdsd" src="/Logo.png" width={70} height={30}

        />
      </Link>
      <div className="flex gap-4">
        <div className="bg-purple-200 text-purplePesonalized-300 px-2 py-1.5 rounded-md flex items-center">
          <MapPin className="w-5 h-w-5 " />
          <h6 className="text-base">Porto Alegre, RS</h6>
        </div>
        <div
          className="flex justify-between items-center
         bg-yellowPesonalized-100 p-2 rounded-md text-yellowPesonalized-300"
        >
          <ShoppingCart className="w-5 h-w-5 " />
        </div>
      </div>
    </header>
  )
}
