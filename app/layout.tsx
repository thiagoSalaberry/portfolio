"use client"
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components'
import { bigShouldersDisplay } from '@/lib/fonts'
// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }
import { RecoilRoot } from 'recoil'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RecoilRoot>
      <html lang="en">
        <body className={bigShouldersDisplay.className}>{children}</body>
      </html>
    </RecoilRoot>
  )
}
