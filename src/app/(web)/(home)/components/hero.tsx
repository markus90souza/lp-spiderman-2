import Image from 'next/image'
import React, { FC } from 'react'

import heart from '@/assets/heart.svg'
import iconPS5 from '@/assets/icon-ps5.svg'
import singlePlayer from '@/assets/icon-singleplayer.svg'
import plus from '@/assets/plus.svg'

export const Hero: FC = () => {
  return (
    <section className="w-full h-[800px] pt-28 pb-[142px] bg-hero bg-no-repeat bg-cover bg-center">
      <div className="w-full max-w-lp px-4 mx-auto flex items-start justify-between">
        <div className="w-full max-w-[622px]">
          <div className="flex mb-6 items-center">
            <span className="font-paragraph rounded-l text-xs py-2 px-3 text-[#C0C0CC] bg-[#181821]">
              Disponível para{' '}
            </span>
            <strong className="bg-[#25252e] rounded-r py-1 px-3">PS5</strong>
          </div>

          <h2 className="font-heading mb-2 font-bold uppercase text-[56px]">
            Marvel Spider-Man 2
          </h2>

          <p className="font-paragraph font-normal text-lg mb-12">
            Os Spiders Peter Parker e Miles Morales estão de volta em mais uma
            aventura eletrizante da famosa franquia Marvels Spider-Man para PS5.
          </p>

          <div className="flex flex-col gap-6 mb-[72px]">
            <strong className="font-heading font-semibold text-[32px]">
              R$ 349,90
            </strong>

            <div className="flex items-center gap-[22px]">
              <button className="h-14 font-paragraph text-base bg-[#F55827] rounded-full px-10 flex items-center justify-centerce">
                Adicionar ao carrinho
              </button>
              <button className="border-2 border-[#2f2f3b] flex items-center justify-center rounded-full w-14 h-14">
                <Image src={heart} alt="" />
              </button>
            </div>
          </div>

          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <Image src={iconPS5} alt="" />
              <span className="font-paragraph text-base text-[#f2f2ff]">
                Lançado 20/10/2023 • Versão para PS5
              </span>
            </li>

            <li className="flex items-center gap-4">
              <Image src={singlePlayer} alt="" />
              <span className="font-paragraph text-base text-[#f2f2ff]">
                1 jogador • Compatível com função de vibração e efeito gatilho{' '}
              </span>
            </li>

            <li className="flex items-center gap-4">
              <Image src={plus} alt="" />
              <span className="font-paragraph text-base text-[#f2f2ff]">
                Compatível com a ajuda do jogo
              </span>
            </li>
          </ul>
        </div>

        <div className="w-full mt-11 max-w-24 gap-4 text-right flex flex-col items-end">
          <span className="bg-[#f09104] font-paragraph text-xs rounded w-8 h-8 flex items-center justify-center">
            12
          </span>
          <p className="text-xs font-normal text-[#e1e1e1]">
            Violência Compras no jogo
          </p>
        </div>
      </div>
    </section>
  )
}
