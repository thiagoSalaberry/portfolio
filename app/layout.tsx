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
    <html lang="en">
        <head>
          <title>Portfolio: Thiago Salaberry</title>
          <link rel="icon" href="briefcase.svg" type="image/svg"/>
        </head>
          <body className={bigShouldersDisplay.className}>
            <RecoilRoot>
              {children}
            </RecoilRoot>
          </body>
      </html>
  )
}
