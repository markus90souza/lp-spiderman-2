import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Mohave, Roboto_Flex } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const mohave = Mohave({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-mohave',
})
const roboto = Roboto_Flex({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'DevProcess | Spiderman 2',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="bg-[#060608] text-white">
      <body className={`${mohave.variable} ${roboto.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
