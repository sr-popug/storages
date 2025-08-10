import Footer from "@/shared/ui/Footer/Footer";
import Header from "@/shared/ui/Header/Header";
import { Manrope } from "next/font/google"; // Изменено с @next/font/google
import { Toaster } from "sonner";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"], // Добавлены кириллические символы
  display: "swap",
  variable: "--font-manrope",
  // Убраны явные weight - шрифт будет автоматически подгружать нужные начертания
});

export const metadata = {
  title: "Ваш сайт",
  description: "Описание сайта",
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
            <section className='absolute -z-10 -top-[4%] -left-[150%] sm:-left-[75%] -rotate-45'>
              <div className='bg-white opacity-[2%] h-96 w-[200vw]'></div>
              <div className='bg-white opacity-[2%] h-12 w-[200vw] mt-5'></div>
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
