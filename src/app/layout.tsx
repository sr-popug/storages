import Footer from "@/shared/ui/Footer/Footer";
import Header from "@/shared/ui/Header/Header";
import { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Складские помещения - г. Мурманск",
  description:
    "Наши кладовки отлично подойдут для хранения вещей, инструмента, зимних или летних шин, мебели или бытовой техники на время переезда или ремонта, сезонного и спортивного инвентаря — велосипеды, мопеды, самокаты, ватрушки, сноуборды и т.д. Также можно использовать под мастерские различного вида. Варианты размеров кладовок на любой вкус — от 1,5 до 30 кв. метров.",
  keywords:
    "складские помещения Мурманск, аренда кладовки, хранение вещей, хранение шин, хранение мебели, хранение инструмента, хранение сезонных вещей, склад для спортинвентаря, кладовки, мини-склады Мурманск, аренда склада недорого, хранение вещей при переезде, хранение бытовой техники, склад для мастерской, помещения свободного назначения",
  openGraph: {
    title: "Аренда складских помещений в Мурманске | Надежное хранение вещей",
    description:
      "Складские боксы и кладовки от 1,5 м². Хранение вещей, мебели, шин, инвентаря. Охрана, удобный доступ!",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Складские помещения мурманск",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/slide1.jpg`,
        width: 1200,
        height: 630,
        alt: "Складские помещения в Мурманске",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Аренда складов в Мурманске — выгодные условия!",
    description:
      "Надежные кладовки для хранения вещей, мебели, шин и спортинвентаря.",
    images: [`${process.env.NEXT_PUBLIC_URL}/slide1.jpg`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru' className={manrope.variable}>
      <body className={`dark bg-background text-foreground antialiased`}>
        <div className='w-screen overflow-hidden'>
          <Header />
          <main className='mt-20 w-full max-w-[1080px] mx-auto min-h-[calc(100vh-205px)] px-4 py-5 relative'>
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
  );
}
