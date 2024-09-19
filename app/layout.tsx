"use client"
import './globals.css'
import { bigShouldersDisplay } from '@/lib/fonts'

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
