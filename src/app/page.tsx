import MainPage from '@/widgets/main/MainPage'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script
        src='https://api-maps.yandex.ru/v3/?apikey=d7d65dde-198b-4d7b-a8b2-0820737b152f&lang=ru_RU'
        strategy='beforeInteractive'
      />
      <MainPage />
    </>
  )
}
