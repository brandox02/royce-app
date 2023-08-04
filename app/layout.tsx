import './globals.css';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'App',
   description: 'App',
}


export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {

   return (
      <html lang="en">
         <body className={`${inter.className} flex`}>
            <Providers>
               {children}
            </Providers>
         </body>
      </html>
   )
}
