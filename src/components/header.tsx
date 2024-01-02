import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '@/assets/logo.svg'

export const Header: FC = () => {
  return (
    <header className="w-full flex h-[72px] sticky top-0 bg-[rgba(0, 4, 7, 0.9)] backdrop-blur-[4px]">
      <div className="max-w-lp px-4 mx-auto w-full flex items-center justify-between">
        <Image src={logo} alt="" />

        <nav className="flex gap-12">
          <Link className="font-paragraph font-medium text-sm" href={''}>
            Visão geral
          </Link>
          <Link className="font-paragraph font-medium text-sm" href={''}>
            Edições
          </Link>
          <Link className="font-paragraph font-medium text-sm" href={''}>
            Características
          </Link>
          <Link className="font-paragraph font-medium text-sm" href={''}>
            Gameplay
          </Link>
        </nav>

        <button className="px-6 py-2 flex items-center font-paragraph font-medium text-sm border-2 rounded-full border-[#2F2F3B]">
          Adicionar ao carrinho
        </button>
      </div>
    </header>
  )
}
