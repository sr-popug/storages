import Footer from '@/widgets/Footer/Footer'
import Header from '@/widgets/Header/Header'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Toaster } from 'sonner'
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
            className='mt-20 w-full max-w-[1080px] mx-auto min-h-[calc(100vh-205px)]
px-4 py-5 relative'
          >
            <section className='absolute -z-1 -top-[4%] -left-[150%] sm:-left-[75%]  -rotate-45'>
              <div className='bg-white opacity-[2%] h-96 w-4xl'></div>
              <div className='bg-white opacity-[2%] h-12 w-4xl mt-5'></div>
            </section>
            {children}
          </main>
          <Footer />
        </div>
        <Toaster richColors theme='dark' />
      </body>
    </html>
  )
}
