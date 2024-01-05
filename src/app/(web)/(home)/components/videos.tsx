import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import thumb01 from '@/assets/thumb-01.jpg'

export const Videos: FC = () => {
  return (
    <section className="pt-20 pb-16">
      <div className="w-full max-w-lp px-4 mx-auto">
        <header className="flex items-center justify-between mb-8">
          <strong className="font-heading text-[24px] font-semibold uppercase">
            Últimos videos
          </strong>
        </header>

        <Link href={'#'} className="w-full block max-w-[390px]">
          <div className="w-full max-h-[216px] mb-6">
            <Image
              src={thumb01}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <span>Gameplay Reveal</span>
        </Link>
      </div>
    </section>
  )
}
