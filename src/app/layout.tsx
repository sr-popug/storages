import Footer from '@/widgets/Footer/Footer'
import Header from '@/widgets/Header/Header'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const SF = localFont({
  src: [
    {
      path: './fonts/SFProText-Light.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/SFProText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SFProText-Bold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: '',
  description: 'Аренда помещений свободного назначения в городе Мурманске',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`dark ${SF.className} antialiased`}>
        <div className='w-screen overflow-y-hidden'>
          <Header />
          <main
            className='mt-20 w-full max-w-[1080px] mx-auto min-h-[calc(100vh-265px)]
px-4 py-5'
          >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
