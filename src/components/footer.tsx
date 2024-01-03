import { FC } from 'react'
import Image from 'next/image'

import boost from '@/assets/design-boost.svg'

export const Footer: FC = () => {
  return (
    <footer className="relative w-full pt-24 pb-[72px] bg-divider bg-no-repeat bg-top ">
      <div className="max-w-lp px-4 mx-auto w-full flex items-end justify-between">
        <div className="flex flex-col items-start gap-3 max-w-[668px]">
          <strong className="font-heading font-semibold text-base">
            ©codeboost2024
          </strong>
          <p className="text-sm font-paragraph font-normal text-[#ceced9]">
            Este conteúdo destina-se exclusivamente a fins educacionais e não
            será utilizado para fins comerciais. Todas as imagens e marcas
            registradas são de propriedade de seus respectivos detentores de
            direitos autorais. O uso deste material busca promover a educação e
            o conhecimento.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-paragraph font-medium text-xs">Design:</span>
          <Image src={boost} alt="" />
        </div>
      </div>
    </footer>
  )
}
